function get_cmWrapper() {
    // 获取 CodeMirror 内部的隐藏 textarea 元素
    return editor.getWrapperElement();
}
function getHiddenTextarea(editor) {
    // const cmWrapper = editor.getWrapperElement();
    return get_cmWrapper().querySelector('textarea');
}
// 应用系统键盘禁用/启用设置
function applyKeyboardBlockState(neig_kp = {}) {
    const neig = Object.assign({
        isKeyboardBlocked: true,
        blocked: true, toggleBtn: null, editor: null
        , isKeyboardBlocked: false
    }, neig_kp)
    let { blocked, toggleBtn, isKeyboardBlocked, editor } = neig
    if (!getHiddenTextarea(editor)) {
        getHiddenTextarea(editor) = get_cmWrapper().querySelector('textarea');
    }
    if (getHiddenTextarea(editor)) {
        if (blocked) {
            // 禁用系统键盘模式：inputmode=none + readonly + 不可见交互
            getHiddenTextarea(editor).setAttribute('inputmode', 'none');
            getHiddenTextarea(editor).setAttribute('readonly', 'readonly');
            getHiddenTextarea(editor).style.pointerEvents = 'none';
            // 设置原生属性
            getHiddenTextarea(editor).inputMode = 'none';
            getHiddenTextarea(editor).readOnly = true;
        } else {
            // 启用系统键盘模式：移除限制，恢复原生行为（注意：仍保留基本样式，但移动端会弹键盘）
            getHiddenTextarea(editor).removeAttribute('inputmode');
            getHiddenTextarea(editor).removeAttribute('readonly');
            getHiddenTextarea(editor).style.pointerEvents = 'auto';
            // CodeMirror 内部可能会干预，但移除这些属性后系统键盘会正常弹出
            if (getHiddenTextarea(editor).inputMode !== undefined) getHiddenTextarea(editor).inputMode = 'text';
            getHiddenTextarea(editor).readOnly = false;
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
        if (getHiddenTextarea(editor) && isKeyboardBlocked) {
            getHiddenTextarea(editor).setAttribute('inputmode', 'none');
            getHiddenTextarea(editor).inputMode = 'none';
        }
    }, 50);
}

