function updateModeUIInKeyboard(keyboardDiv) {
    const selectBtn = keyboardDiv?.querySelector('#floatSelectModeBtn');
    const modeBadge = document.getElementById('modeStatus');
    if (selectBtn) {
        if (selectMode) {
            selectBtn.classList.add('active');
            selectBtn.innerHTML = '🔴 选择中';
            if (modeBadge) modeBadge.innerHTML = '📌 选择模式 ◀ 扩展选区 ▶';
        } else {
            selectBtn.classList.remove('active');
            selectBtn.innerHTML = '🔽 选择';
            if (modeBadge) modeBadge.innerHTML = '⌨️ 光标模式';
        }
    } else if (modeBadge) {
        if (selectMode) modeBadge.innerHTML = '📌 选择模式 ◀ 扩展选区 ▶';
        else modeBadge.innerHTML = '⌨️ 光标模式';
    }
}

// floatingKeyboard.js - 悬浮键盘 UI 创建与交互
function createFloatingKeyboard() {
    // 检查是否已存在
    if (document.getElementById('floatingKeyboard')) {
        return document.getElementById('floatingKeyboard');
    }

    const kb = document.createElement('div');
    kb.className = 'floating-keyboard';
    kb.id = 'floatingKeyboard';
    kb.innerHTML = `
        <button class="close-float-btn" id="closeFloatBtn">✖ 关闭</button>
        <div class="drag-handle" id="dragHandle"><div class="drag-icon"></div></div>
        <div class="keyboard-inner">
            <div class="selection-control-row">
                <button class="arrow-key" id="floatMoveLeft">◀ 左移</button>
                <button class="select-key" id="floatSelectModeBtn">🔽 选择</button>
                <button class="arrow-key" id="floatMoveRight">右移 ▶</button>
            </div>
            <div class="quick-locate-row">
                <button class="locate-key" id="floatMoveStart">⤒ 行首</button>
                <button class="locate-key" id="floatMoveEnd">⤓ 行尾</button>
                <button class="locate-key" id="floatSelectAll">✅ 全选</button>
            </div>
            <div class="edit-actions-row">
                <button class="edit-key" id="floatCopy">📋 复制</button>
                <button class="edit-key" id="floatCut">✂️ 剪切</button>
                <button class="edit-key danger-edit" id="floatDelete">🗑️ 删除</button>
                <button class="edit-key" id="floatUndo">↩️ 撤销</button>
            </div>
            <div class="key-row">${'q w e r t y u i o p'.split(' ').map(l => `<button class="letter-key" data-char="${l}">${l.toUpperCase()}</button>`).join('')}</div>
            <div class="key-row">${'a s d f g h j k l'.split(' ').map(l => `<button class="letter-key" data-char="${l}">${l.toUpperCase()}</button>`).join('')}</div>
            <div class="key-row">${'z x c v b n m'.split(' ').map(l => `<button class="letter-key" data-char="${l}">${l.toUpperCase()}</button>`).join('')}<button class="letter-key wide-key" data-char=",">,</button><button class="letter-key wide-key" data-char=".">.</button></div>
            <div class="key-row">${'1 2 3 4 5 6 7 8 9 0'.split(' ').map(n => `<button class="letter-key" data-char="${n}">${n}</button>`).join('')}</div>
            <div class="key-row"><button class="letter-key space-key" data-char=" ">空格</button><button class="letter-key wide-key" id="floatDeleteChar">⌫ 删除</button><button class="letter-key wide-key" id="floatNewline">↵ 换行</button></div>
        </div>
    `;
    document.body.appendChild(kb);
    return kb;
}
function toggleSelectMode_cqpi(selectMode) {
    if (floatingKeyboard) updateModeUIInKeyboard(floatingKeyboard);
    const modeBadge = document.getElementById('modeStatus');
    if (selectMode) {
        const selections = editor.listSelections();
        if (selections.length && selections[0].empty()) {
            const cursor = editor.getCursor();
            const line = editor.getLine(cursor.line);
            if (line.length > 0 && cursor.ch < line.length) {
                editor.setSelection(
                    { line: cursor.line, ch: cursor.ch },
                    { line: cursor.line, ch: Math.min(cursor.ch + 1, line.length) }
                );
            } else if (cursor.ch > 0) {
                editor.setSelection(
                    { line: cursor.line, ch: cursor.ch - 1 },
                    { line: cursor.line, ch: cursor.ch }
                );
            }
        }
        if (modeBadge) modeBadge.innerHTML = '📌 选择模式 ◀ 扩展选区 ▶';
        showToast('📌 选择模式已开启，按左右键扩展选区');
    } else {
        const selections = editor.listSelections();
        if (selections.length && !selections[0].empty()) {
            const anchor = selections[0].anchor;
            editor.setCursor(anchor);
        }
        if (modeBadge) modeBadge.innerHTML = '⌨️ 光标模式';
        showToast('⌨️ 已退出选择模式');
    }
    editor.focus();
}

function bindFloatEvents(kb, actions) {
    // actions: { toggleSelectMode, moveLeft, moveRight, moveStart, moveEnd, selectAll, copy, cut, deleteSel, undo, insertText, insertNewline, hideKeyboard }
    if (!kb) return;

    kb.querySelector('#floatSelectModeBtn')?.addEventListener('click', () => actions.toggleSelectMode?.());
    kb.querySelector('#floatMoveLeft')?.addEventListener('click', () => actions.moveLeft?.());
    kb.querySelector('#floatMoveRight')?.addEventListener('click', () => actions.moveRight?.());
    kb.querySelector('#floatMoveStart')?.addEventListener('click', () => actions.moveStart?.());
    kb.querySelector('#floatMoveEnd')?.addEventListener('click', () => actions.moveEnd?.());
    kb.querySelector('#floatSelectAll')?.addEventListener('click', () => actions.selectAll?.());
    kb.querySelector('#floatCopy')?.addEventListener('click', () => actions.copy?.());
    kb.querySelector('#floatCut')?.addEventListener('click', () => actions.cut?.());
    kb.querySelector('#floatDelete')?.addEventListener('click', () => actions.deleteSel?.());
    kb.querySelector('#floatUndo')?.addEventListener('click', () => actions.undo?.());
    kb.querySelector('#floatDeleteChar')?.addEventListener('click', () => actions.deleteSel?.());
    kb.querySelector('#floatNewline')?.addEventListener('click', () => actions.insertNewline?.());
    kb.querySelector('#closeFloatBtn')?.addEventListener('click', () => actions.hideKeyboard?.());

    kb.querySelectorAll('[data-char]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const ch = btn.dataset.char;
            if (ch !== undefined) actions.insertText?.(ch);
        });
    });
}

function enableDragging(kb) {
    const dragHandle = kb.querySelector('#dragHandle');
    if (!dragHandle) return;

    let startX, startY, startLeft, startTop, dragging = false;
    const onMove = (e) => {
        if (!dragging) return;
        e.preventDefault();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        let newLeft = startLeft + (clientX - startX);
        let newTop = startTop + (clientY - startY);
        newLeft = Math.max(0, Math.min(window.innerWidth - kb.offsetWidth, newLeft));
        newTop = Math.max(0, Math.min(window.innerHeight - kb.offsetHeight, newTop));
        kb.style.left = newLeft + 'px';
        kb.style.top = newTop + 'px';
        kb.style.right = 'auto';
        kb.style.bottom = 'auto';
    };
    const onStart = (e) => {
        e.preventDefault();
        dragging = true;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        startX = clientX;
        startY = clientY;
        const rect = kb.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', () => { dragging = false; document.removeEventListener('mousemove', onMove); });
        document.addEventListener('touchmove', onMove);
        document.addEventListener('touchend', () => { dragging = false; document.removeEventListener('touchmove', onMove); });
    };
    dragHandle.addEventListener('mousedown', onStart);
    dragHandle.addEventListener('touchstart', onStart);
}

function showFloatingKeyboardAtCursor(kb, editor, cmWrapper) {
    if (!kb) return;
    const cursor = editor.getCursor();
    const coords = editor.cursorCoords(cursor, 'local');
    const rect = cmWrapper.getBoundingClientRect();
    let top = rect.top + coords.bottom + 10;
    let left = rect.left + coords.left;
    const maxLeft = window.innerWidth - 330;
    const maxTop = window.innerHeight - 500;
    left = Math.min(maxLeft, Math.max(10, left));
    top = Math.min(maxTop, Math.max(50, top));
    kb.style.left = left + 'px';
    kb.style.top = top + 'px';
    kb.style.display = 'block';
}

function hideFloatingKeyboard(kb) {
    if (kb) kb.style.display = 'none';
}

function updateSelectModeUI(kb, selectMode) {
    const selectBtn = kb?.querySelector('#floatSelectModeBtn');
    if (selectBtn) {
        if (selectMode) {
            selectBtn.classList.add('active');
            selectBtn.innerHTML = '🔴 选择中';
        } else {
            selectBtn.classList.remove('active');
            selectBtn.innerHTML = '🔽 选择';
        }
    }
}