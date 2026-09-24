// main.js - 整合所有模块
// import { initCodeMirror, applyKeyboardBlockState, getHiddenTextarea } from './codeMirrorSetup.js';
// import { createFloatingKeyboard, bindFloatEvents, enableDragging, showFloatingKeyboardAtCursor, hideFloatingKeyboard, updateSelectModeUI } from './floatingKeyboard.js';
// import { 
//     moveCursorLeft, moveCursorRight, extendSelectionLeft, extendSelectionRight,
//     moveToLineStart, moveToLineEnd, selectAll, insertText, insertNewline,
//     deleteSelectionOrLast, copySelection, cutSelection, undo
// } from './textEditorUtils.js';

// 初始化编辑器
const editor = initCodeMirror('codeEditor');
shn_imfb_ocm_db_hqtz()

const cmWrapper = editor.getWrapperElement();

// 创建悬浮键盘
const floatingKeyboard = createFloatingKeyboard();
enableDragging(floatingKeyboard);

// 全局状态
let selectMode = false;
let isKeyboardVisible = false;
// 封装操作函数（注入 editor）
const actions = {
    toggleSelectMode: () => {
        alert(323)
    selectMode = !selectMode;
        toggleSelectMode_cqpi(selectMode)
    },
    moveLeft: () => selectMode ? extendSelectionLeft(editor) : moveCursorLeft(editor),
    moveRight: () => selectMode ? extendSelectionRight(editor) : moveCursorRight(editor),
    moveStart: () => moveToLineStart(editor, selectMode),
    moveEnd: () => moveToLineEnd(editor, selectMode),
    selectAll: () => selectAll(editor),
    copy: () => copySelection(editor, showToast),
    cut: () => cutSelection(editor, showToast),
    deleteSel: () => deleteSelectionOrLast(editor),
    undo: () => undo(editor),
    insertText: (ch) => insertText(editor, ch),
    insertNewline: () => insertNewline(editor),
    hideKeyboard: () => { hideFloatingKeyboard(floatingKeyboard); isKeyboardVisible = false; }
};

// 显示键盘
editor.on('focus', () => {
    if (!isKeyboardVisible) {
        showFloatingKeyboardAtCursor(floatingKeyboard, editor, cmWrapper);
        isKeyboardVisible = true;
    }
});