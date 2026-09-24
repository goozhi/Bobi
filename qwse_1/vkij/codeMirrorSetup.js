// codeMirrorSetup.js - CodeMirror 初始化与系统键盘禁用逻辑
function initCodeMirror(textareaId) {
    const textarea = document.getElementById(textareaId);
    const editor = CodeMirror.fromTextArea(textarea, {
        lineNumbers: true,
        theme: "material",
        lineWrapping: true,
        inputStyle: "textarea",   // ★ 关键配置
        // extraKeys: {
        //     "Insert": () => false, "Enter": () => false, "Space": () => false,
        //     "Tab": () => false, "Backspace": () => false, "Delete": () => false
        // }
    });

    return editor;
}

// function getHiddenTextarea(editor) {
//     const cmWrapper = editor.getWrapperElement();
//     return cmWrapper.querySelector('textarea');
// }