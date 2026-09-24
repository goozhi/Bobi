// textEditorUtils.js - 纯文本操作函数（完全不依赖DOM，只接收editor实例）
function moveCursorLeft(editor) {
    const cursor = editor.getCursor();
    if (cursor.ch > 0) {
        editor.setCursor({ line: cursor.line, ch: cursor.ch - 1 });
    } else if (cursor.line > 0) {
        const prevLineLength = editor.getLine(cursor.line - 1).length;
        editor.setCursor({ line: cursor.line - 1, ch: prevLineLength });
    }
    editor.focus();
}
function showToast(msg, duration = 1200) {
    let toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '100px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = '#1e293bdd';
    toast.style.backdropFilter = 'blur(8px)';
    toast.style.color = 'white';
    toast.style.padding = '6px 18px';
    toast.style.borderRadius = '40px';
    toast.style.fontSize = '0.75rem';
    toast.style.zIndex = '10002';
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), duration);
}

function moveCursorRight(editor) {
    const cursor = editor.getCursor();
    const lineLength = editor.getLine(cursor.line).length;
    if (cursor.ch < lineLength) {
        editor.setCursor({ line: cursor.line, ch: cursor.ch + 1 });
    } else if (cursor.line < editor.lineCount() - 1) {
        editor.setCursor({ line: cursor.line + 1, ch: 0 });
    }
    editor.focus();
}

function extendSelectionLeft(editor) {
    const selections = editor.listSelections();
    if (!selections.length) return;
    const currentSel = selections[0];
    const anchor = currentSel.anchor;
    const head = currentSel.head;
    let from, to;
    if (anchor.line < head.line || (anchor.line === head.line && anchor.ch < head.ch)) {
        from = anchor;
        to = head;
    } else {
        from = head;
        to = anchor;
    }
    let newFrom = { ...from };
    if (from.ch > 0) {
        newFrom = { line: from.line, ch: from.ch - 1 };
    } else if (from.line > 0) {
        const prevLineLength = editor.getLine(from.line - 1).length;
        newFrom = { line: from.line - 1, ch: prevLineLength };
    }
    editor.setSelection(newFrom, to);
    editor.focus();
}

function extendSelectionRight(editor) {
    const selections = editor.listSelections();
    if (!selections.length) return;
    const currentSel = selections[0];
    const anchor = currentSel.anchor;
    const head = currentSel.head;
    let from, to;
    if (anchor.line < head.line || (anchor.line === head.line && anchor.ch < head.ch)) {
        from = anchor;
        to = head;
    } else {
        from = head;
        to = anchor;
    }
    let newTo = { ...to };
    const lineLength = editor.getLine(to.line).length;
    if (to.ch < lineLength) {
        newTo = { line: to.line, ch: to.ch + 1 };
    } else if (to.line < editor.lineCount() - 1) {
        newTo = { line: to.line + 1, ch: 0 };
    }
    editor.setSelection(from, newTo);
    editor.focus();
}

function moveToLineStart(editor, selectMode = false) {
    const cursor = editor.getCursor();
    if (selectMode) {
        const selections = editor.listSelections();
        if (selections.length) {
            const sel = selections[0];
            const anchor = sel.anchor, head = sel.head;
            if (anchor.line < head.line || (anchor.line === head.line && anchor.ch < head.ch))
                editor.setSelection({ line: anchor.line, ch: 0 }, head);
            else
                editor.setSelection(anchor, { line: head.line, ch: 0 });
        }
    } else {
        editor.setCursor({ line: cursor.line, ch: 0 });
    }
    editor.focus();
}

function moveToLineEnd(editor, selectMode = false) {
    const cursor = editor.getCursor();
    const lineLength = editor.getLine(cursor.line).length;
    if (selectMode) {
        const selections = editor.listSelections();
        if (selections.length) {
            const sel = selections[0];
            const anchor = sel.anchor, head = sel.head;
            if (anchor.line < head.line || (anchor.line === head.line && anchor.ch < head.ch))
                editor.setSelection(anchor, { line: head.line, ch: lineLength });
            else
                editor.setSelection({ line: anchor.line, ch: lineLength }, head);
        }
    } else {
        editor.setCursor({ line: cursor.line, ch: lineLength });
    }
    editor.focus();
}

function selectAll(editor) {
    editor.execCommand('selectAll');
}

function insertText(editor, text) {
    const selections = editor.listSelections();
    if (selections.length && !selections[0].empty()) {
        editor.replaceSelection(text);
    } else {
        const cursor = editor.getCursor();
        editor.replaceRange(text, cursor);
        editor.setCursor({ line: cursor.line, ch: cursor.ch + text.length });
    }
    editor.focus();
}

function insertNewline(editor) {
    const cursor = editor.getCursor();
    editor.replaceRange('\n', cursor);
    editor.setCursor({ line: cursor.line + 1, ch: 0 });
    editor.focus();
}

function deleteSelectionOrLast(editor) {
    const selections = editor.listSelections();
    if (selections.length && !selections[0].empty()) {
        editor.replaceSelection('');
    } else {
        const cursor = editor.getCursor();
        if (cursor.ch > 0) {
            editor.replaceRange('', { line: cursor.line, ch: cursor.ch - 1 }, cursor);
        } else if (cursor.line > 0) {
            const prevLineLength = editor.getLine(cursor.line - 1).length;
            editor.replaceRange('', { line: cursor.line - 1, ch: prevLineLength }, { line: cursor.line, ch: 0 });
        }
    }
    editor.focus();
}

function copySelection(editor, onToast) {
    const selected = editor.getSelection();
    if (selected && navigator.clipboard) {
        navigator.clipboard.writeText(selected).then(() => onToast?.('📋 已复制'));
    } else if (selected) {
        onToast?.(`选中: ${selected.slice(0, 20)}`);
    } else {
        onToast?.('未选中文字');
    }
}

function cutSelection(editor, onToast) {
    const selected = editor.getSelection();
    if (selected && navigator.clipboard) {
        navigator.clipboard.writeText(selected).then(() => {
            editor.replaceSelection('');
            onToast?.('✂️ 已剪切');
        });
    } else {
        onToast?.('未选中内容');
    }
}

function undo(editor) {
    editor.undo();
}