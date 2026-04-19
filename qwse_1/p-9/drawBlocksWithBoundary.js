function drawBlocksWithBoundary(ctx, result, spacing) {

  const { blocks, blockLayout, originalLayout } = result;

  const { blockRows, blockCols } = blockLayout;



  // 先绘制点

  drawBlocks(ctx, result, spacing);



  // 绘制块边界

  ctx.strokeStyle = '#FF0000';

  ctx.lineWidth = 2;



  for (let br = 0; br < blockRows; br++) {

    for (let bc = 0; bc < blockCols; bc++) {

      const blockIndex = br * blockCols + bc;

      const block = blocks[blockIndex];

      if (block.length === 0) continue;



      // 计算块的边界矩形

      const firstPoint = block[0][0];

      const lastRow = block[block.length - 1];

      const lastPoint = lastRow[lastRow.length - 1];



      ctx.strokeRect(

        firstPoint.x - spacing / 2,

        firstPoint.y - spacing / 2,

        lastPoint.x - firstPoint.x + spacing,

        lastPoint.y - firstPoint.y + spacing

      );

    }

  }

}


function drawBlocks(ctx, result, spacing) {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
    '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7B731'];

  result.blocks.forEach((block, idx) => {
    ctx.fillStyle = colors[idx % colors.length];
    block.forEach(row => {
      row.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, spacing * 0.15, 0, Math.PI * 2);
        ctx.fill();
        // 可选：添加边框
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    });
  });
}

// // 使用
// const result = selectGridPointsAsABlocks(800, 600, 50, 3, 4);
// drawBlocks(ctx, result, 50);