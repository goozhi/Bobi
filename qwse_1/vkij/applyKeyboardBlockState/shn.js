function shn_imfb_ocm_db_hqtz() {
    let isKeyboardBlocked = true;   // 默认禁用系统键盘（锁定状态）
    const toggleBtn = document.getElementById('toggleBlockKeyboardBtn');
    // 切换禁用/启用模式
    function toggleKeyboardBlock() {
        isKeyboardBlocked = !isKeyboardBlocked;
        applyKeyboardBlockState({
            blocked: isKeyboardBlocked
            , isKeyboardBlocked
            , toggleBtn, editor
        });
    }

    // 监听按钮事件
    toggleBtn.addEventListener('click', toggleKeyboardBlock);

    // 监听编辑器聚焦事件，确保每次聚焦都根据当前模式重新锁定或释放
    editor.on('focus', () => {
        const ta = get_cmWrapper().querySelector('textarea');
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
    applyKeyboardBlockState({ blocked: true, isKeyboardBlocked, toggleBtn, editor });

}