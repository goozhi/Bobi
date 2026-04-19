function bz_2() {

    // 获取画布和绘图上下文
    const canvas = document.getElementById('bz_fr_2');
    const ctx = canvas.getContext('2d');

    // 设置中心点
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // 方块大小
    const size = 4;

    // 旋转半径
    const radius = 10;

    // 动画开始啦！
    function animate() {
        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 计算时间相关的角度（让它们动起来）
        const angle = Date.now() * 0.005; // 随着时间变化的角度

        // 第一个方块的位置（顺时针转）
        const x1 = centerX + radius * Math.cos(angle);
        const y1 = centerY + radius * Math.sin(angle);

        // 第二个方块的位置（逆时针转，所以用-angle）x
        const x2 = centerX + 4 + radius * Math.cos(angle);
        const y2 = centerY + 4 + radius * Math.sin(angle);

        // 绘制第一个绿色方块
        ctx.fillStyle = '#4CAF50'; // 绿色
        ctx.fillRect(x1 - size / 2, y1 - size / 2, size, size);

        // 给第一个方块加个边框更清楚
        ctx.strokeStyle = '#2E7D32';
        ctx.strokeRect(x1 - size / 2, y1 - size / 2, size, size);

        // 绘制第二个绿色方块
        ctx.fillStyle = '#8BC34A'; // 另一种绿色，有点区别
        ctx.fillRect(x2 - size / 2, y2 - size / 2, size, size);

        // 边框
        ctx.strokeStyle = '#558B2F';
        ctx.strokeRect(x2 - size / 2, y2 - size / 2, size, size);

        // 继续动画循环
        requestAnimationFrame(animate);
    }

    // 开始动画！
    animate();
}
bz_2()