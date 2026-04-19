function drawGrid(neig_kp = {}) {
  const neig = Object.assign({
    ctx: null,
    cell: 100
    , size: 100
    , points: []
  }, neig_kp)
  this.draw = () => {
    // neig.ctx.clearRect(0, 0, neig.size, neig.size);

    // 画背景格子
    neig.ctx.strokeStyle = '#e0e0e0';
    neig.ctx.lineWidth = 2;
    for (let i = 1; i < 3; i++) {
      neig.ctx.beginPath();
      neig.ctx.moveTo(i * neig.cell, 0);
      neig.ctx.lineTo(i * neig.cell, neig.size);
      neig.ctx.stroke();

      neig.ctx.beginPath();
      neig.ctx.moveTo(0, i * neig.cell);
      neig.ctx.lineTo(neig.size, i * neig.cell);
      neig.ctx.stroke();
    }

    // 画圆点
    neig.points.forEach(p => {
      neig.ctx.fillStyle = '#aaa';
      neig.ctx.beginPath();
      neig.ctx.arc(p.x, p.y, neig.cell * 0.15, 0, Math.PI * 2);
      neig.ctx.fill();
    });
  }
}

