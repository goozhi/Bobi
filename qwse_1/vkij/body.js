
    // ========== 初始化 CodeMirror 编辑器 ==========
    const textarea = document.getElementById('codeEditor');
    const editor = CodeMirror.fromTextArea(textarea, {
        lineNumbers: true,
        theme: "material",
        lineWrapping: true,
        inputStyle: "textarea",   // 关键：使用 textarea 底层
        // extraKeys: {
        //     "Insert": () => false, "Enter": () => false, "Space": () => false,
        //     "Tab": () => false, "Backspace": () => false, "Delete": () => false
        // }
    });

    // 获取 CodeMirror 内部的隐藏 textarea 元素
    const cmWrapper = editor.getWrapperElement();
    let hiddenTextarea = cmWrapper.querySelector('textarea');
    
    // ========== 动态禁用/启用系统键盘的核心逻辑 ==========
    let isKeyboardBlocked = true;   // 默认禁用系统键盘（锁定状态）
    const toggleBtn = document.getElementById('toggleBlockKeyboardBtn');
    
    // 应用系统键盘禁用/启用设置
    function applyKeyboardBlockState(blocked) {
        if (!hiddenTextarea) {
            hiddenTextarea = cmWrapper.querySelector('textarea');
        }
        if (hiddenTextarea) {
            if (blocked) {
                // 禁用系统键盘模式：inputmode=none + readonly + 不可见交互
                hiddenTextarea.setAttribute('inputmode', 'none');
                hiddenTextarea.setAttribute('readonly', 'readonly');
                hiddenTextarea.style.pointerEvents = 'none';
                // 设置原生属性
                hiddenTextarea.inputMode = 'none';
                hiddenTextarea.readOnly = true;
            } else {
                // 启用系统键盘模式：移除限制，恢复原生行为（注意：仍保留基本样式，但移动端会弹键盘）
                hiddenTextarea.removeAttribute('inputmode');
                hiddenTextarea.removeAttribute('readonly');
                hiddenTextarea.style.pointerEvents = 'auto';
                // CodeMirror 内部可能会干预，但移除这些属性后系统键盘会正常弹出
                if (hiddenTextarea.inputMode !== undefined) hiddenTextarea.inputMode = 'text';
                hiddenTextarea.readOnly = false;
            }
        }
        
        // 更新按钮文本和样式
        if (blocked) {
            toggleBtn.innerHTML = '🔒 禁用系统键盘';
            toggleBtn.classList.add('active');
            // 可选：改变状态灯的样式（增加视觉反馈）
            showToast('✅ 已禁用系统键盘，手机键盘不会弹出', 1500);
        } else {
            toggleBtn.innerHTML = '🔓 启用系统键盘';
            toggleBtn.classList.remove('active');
            showToast('⚠️ 已启用系统键盘，点击编辑区将弹出手机键盘', 1800);
        }
        
        // 重新聚焦编辑器确保设置生效
        editor.focus();
        // 由于焦点可能被改变，再加固一次（防止某些浏览器延迟）
        setTimeout(() => {
            if (hiddenTextarea && isKeyboardBlocked) {
                hiddenTextarea.setAttribute('inputmode', 'none');
                hiddenTextarea.inputMode = 'none';
            }
        }, 50);
    }
    
    // 切换禁用/启用模式
    function toggleKeyboardBlock() {
        isKeyboardBlocked = !isKeyboardBlocked;
        applyKeyboardBlockState(isKeyboardBlocked);
    }
    
    // 监听按钮事件
    toggleBtn.addEventListener('click', toggleKeyboardBlock);
    
    // 监听编辑器聚焦事件，确保每次聚焦都根据当前模式重新锁定或释放
    editor.on('focus', () => {
        const ta = cmWrapper.querySelector('textarea');
        if (ta) {
            if (isKeyboardBlocked) {
                ta.setAttribute('inputmode', 'none');
                ta.inputMode = 'none';
                ta.setAttribute('readonly', 'readonly');
                ta.readOnly = true;
                ta.style.pointerEvents = 'none';
            } else {
                // 如果用户启用了系统键盘，就应该完全放开
                ta.removeAttribute('inputmode');
                ta.removeAttribute('readonly');
                ta.style.pointerEvents = 'auto';
                if (ta.inputMode !== undefined) ta.inputMode = 'text';
                ta.readOnly = false;
            }
        }
    });
    
    // 初始应用默认禁用状态
    applyKeyboardBlockState(true);
    
    // ========== 选择模式状态（仿讯飞） ==========
    let selectMode = false;
    let floatingKeyboard = null;
    let isKeyboardVisible = false;
    
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
    
    function toggleSelectMode() {
        selectMode = !selectMode;
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
    
    function moveAndExtendSelection(direction) {
        if (!selectMode) {
            if (direction === 'left') moveCursorLeft();
            else moveCursorRight();
            return;
        }
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
        let newTo = { ...to };
        if (direction === 'left') {
            if (from.ch > 0) newFrom = { line: from.line, ch: from.ch - 1 };
            else if (from.line > 0) {
                const prevLen = editor.getLine(from.line - 1).length;
                newFrom = { line: from.line - 1, ch: prevLen };
            }
            editor.setSelection(newFrom, newTo);
        } else {
            const lineLen = editor.getLine(to.line).length;
            if (to.ch < lineLen) newTo = { line: to.line, ch: to.ch + 1 };
            else if (to.line < editor.lineCount() - 1) newTo = { line: to.line + 1, ch: 0 };
            editor.setSelection(newFrom, newTo);
        }
        editor.focus();
    }
    
    function moveCursorLeft() {
        const cursor = editor.getCursor();
        if (cursor.ch > 0) editor.setCursor({ line: cursor.line, ch: cursor.ch - 1 });
        else if (cursor.line > 0) {
            const prevLen = editor.getLine(cursor.line - 1).length;
            editor.setCursor({ line: cursor.line - 1, ch: prevLen });
        }
        editor.focus();
    }
    
    function moveCursorRight() {
        const cursor = editor.getCursor();
        const lineLen = editor.getLine(cursor.line).length;
        if (cursor.ch < lineLen) editor.setCursor({ line: cursor.line, ch: cursor.ch + 1 });
        else if (cursor.line < editor.lineCount() - 1) editor.setCursor({ line: cursor.line + 1, ch: 0 });
        editor.focus();
    }
    
    function moveToLineStart() {
        const cursor = editor.getCursor();
        if (selectMode) {
            const selections = editor.listSelections();
            if (selections.length) {
                const sel = selections[0];
                const anchor = sel.anchor, head = sel.head;
                if (anchor.line < head.line || (anchor.line === head.line && anchor.ch < head.ch))
                    editor.setSelection({ line: anchor.line, ch: 0 }, head);
                else editor.setSelection(anchor, { line: head.line, ch: 0 });
            }
        } else editor.setCursor({ line: cursor.line, ch: 0 });
        editor.focus();
    }
    
    function moveToLineEnd() {
        const cursor = editor.getCursor();
        const lineLen = editor.getLine(cursor.line).length;
        if (selectMode) {
            const selections = editor.listSelections();
            if (selections.length) {
                const sel = selections[0];
                const anchor = sel.anchor, head = sel.head;
                if (anchor.line < head.line || (anchor.line === head.line && anchor.ch < head.ch))
                    editor.setSelection(anchor, { line: head.line, ch: lineLen });
                else editor.setSelection({ line: anchor.line, ch: lineLen }, head);
            }
        } else editor.setCursor({ line: cursor.line, ch: lineLen });
        editor.focus();
    }
    
    function selectAll() { editor.execCommand('selectAll'); showToast('✅ 已全选'); }
    async function copySelection() {
        const selected = editor.getSelection();
        if (selected && navigator.clipboard) {
            await navigator.clipboard.writeText(selected);
            showToast('📋 已复制');
        } else if (selected) showToast('选中: ' + selected.slice(0,20));
        else showToast('未选中文字');
    }
    async function cutSelection() {
        const selected = editor.getSelection();
        if (selected && navigator.clipboard) {
            await navigator.clipboard.writeText(selected);
            editor.replaceSelection('');
            showToast('✂️ 已剪切');
        } else showToast('未选中内容');
    }
    function deleteSelection() {
        const selections = editor.listSelections();
        if (selections.length && !selections[0].empty()) editor.replaceSelection('');
        else {
            const cursor = editor.getCursor();
            if (cursor.ch > 0) editor.replaceRange('', { line: cursor.line, ch: cursor.ch - 1 }, cursor);
            else if (cursor.line > 0) {
                const prevLen = editor.getLine(cursor.line - 1).length;
                editor.replaceRange('', { line: cursor.line - 1, ch: prevLen }, { line: cursor.line, ch: 0 });
            }
        }
        editor.focus();
    }
    function undo() { editor.undo(); }
    function insertText(text) {
        const selections = editor.listSelections();
        if (selections.length && !selections[0].empty()) editor.replaceSelection(text);
        else {
            const cursor = editor.getCursor();
            editor.replaceRange(text, cursor);
            editor.setCursor({ line: cursor.line, ch: cursor.ch + text.length });
        }
        editor.focus();
    }
    function insertNewline() {
        const cursor = editor.getCursor();
        editor.replaceRange('\n', cursor);
        editor.setCursor({ line: cursor.line + 1, ch: 0 });
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
    
    // ========== 悬浮键盘创建与拖拽 ==========
    function createFloatingKeyboard() {
        if (floatingKeyboard) return floatingKeyboard;
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
    
    function bindFloatEvents(kb) {
        kb.querySelector('#floatSelectModeBtn')?.addEventListener('click', () => toggleSelectMode());
        kb.querySelector('#floatMoveLeft')?.addEventListener('click', () => moveAndExtendSelection('left'));
        kb.querySelector('#floatMoveRight')?.addEventListener('click', () => moveAndExtendSelection('right'));
        kb.querySelector('#floatMoveStart')?.addEventListener('click', moveToLineStart);
        kb.querySelector('#floatMoveEnd')?.addEventListener('click', moveToLineEnd);
        kb.querySelector('#floatSelectAll')?.addEventListener('click', selectAll);
        kb.querySelector('#floatCopy')?.addEventListener('click', copySelection);
        kb.querySelector('#floatCut')?.addEventListener('click', cutSelection);
        kb.querySelector('#floatDelete')?.addEventListener('click', deleteSelection);
        kb.querySelector('#floatUndo')?.addEventListener('click', undo);
        kb.querySelector('#floatDeleteChar')?.addEventListener('click', deleteSelection);
        kb.querySelector('#floatNewline')?.addEventListener('click', insertNewline);
        kb.querySelector('#closeFloatBtn')?.addEventListener('click', () => hideFloatingKeyboard());
        kb.querySelectorAll('[data-char]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const ch = btn.dataset.char;
                if (ch !== undefined) insertText(ch);
            });
        });
    }
    
    function enableDragging(kb) {
        const dragHandle = kb.querySelector('#dragHandle');
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
    
    function showFloatingKeyboardAtCursor() {
        let kb = createFloatingKeyboard();
        if (!kb.parentNode) document.body.appendChild(kb);
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
        if (!floatingKeyboard) {
            floatingKeyboard = kb;
            bindFloatEvents(kb);
            enableDragging(kb);
        }
        updateModeUIInKeyboard(kb);
        isKeyboardVisible = true;
    }
    
    function hideFloatingKeyboard() {
        if (floatingKeyboard) {
            floatingKeyboard.style.display = 'none';
            isKeyboardVisible = false;
        }
    }
    
    editor.on('focus', () => { if (!isKeyboardVisible) showFloatingKeyboardAtCursor(); });
    document.getElementById('showKeyboardBtn')?.addEventListener('click', () => {
        if (isKeyboardVisible) hideFloatingKeyboard();
        else showFloatingKeyboardAtCursor();
        editor.focus();
    });
    document.getElementById('addLineBtn')?.addEventListener('click', () => {
        const cur = editor.getValue();
        editor.setValue(cur + (cur ? '\n新增行' : '新增行'));
        moveToLineEnd();
    });
    document.getElementById('clearEditorBtn')?.addEventListener('click', () => { editor.setValue(''); showToast('已清空'); });
    setTimeout(() => { editor.focus(); showFloatingKeyboardAtCursor(); }, 500);
