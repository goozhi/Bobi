function bz_xfdb_1(neig_kp) {
    const neig = Object.assign({
        uj_1_angle_tiqe: 0.005,
        uj_2_angle_tiqe: 0.005,
        brm_vkih: 'bz_fr_3',
        uj_1_yhmw_x_nokz: 0,
        uj_1_yhmw_y_nokz: 0,
        uj_2_yhmw_x_nokz: 0,
        uj_2_yhmw_y_nokz: 0,
        uj_1_ldsc: 1,
        uj_2_ldsc: 1,
        uj_1_radius: 10,
        uj_2_radius: 10,
    }, neig_kp)

    // 获取画布和绘图上下文
    const canvas = document.getElementById(neig.brm_vkih);
    if (canvas === null) {
        throw new Error("brm vkih acun-" + neig.brm_vkih)
    }
    const ctx = canvas.getContext('2d');

    // 设置中心点
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // 方块大小
    const size = 4;

    // 旋转半径
    // const radius = 10;

    // 动画开始啦！
    function animate() {
        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 计算时间相关的角度（让它们动起来）
        const angle1 = Date.now() * neig.uj_1_angle_tiqe * neig.uj_1_ldsc // 随着时间变化的角度
        const angle2 = Date.now() * neig.uj_2_angle_tiqe * neig.uj_2_ldsc // 随着时间变化的角度

        // 第一个方块的位置（顺时针转）
        const x1 = centerX + neig.uj_1_yhmw_x_nokz + neig.uj_1_radius * Math.cos(angle1);
        const y1 = centerY + neig.uj_1_yhmw_y_nokz + neig.uj_1_radius * Math.sin(angle1);

        // 第二个方块的位置（逆时针转，所以用-angle1）x
        const x2 = centerX + neig.uj_2_yhmw_x_nokz + neig.uj_2_radius * Math.cos(angle2);
        const y2 = centerY + neig.uj_2_yhmw_y_nokz + neig.uj_2_radius * Math.sin(angle2);

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