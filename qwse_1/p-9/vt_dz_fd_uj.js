function vt_dz_fd_uj(canvasWidth, canvasHeight, spacing, a, b) {

  // 计算总行数和总列数

  const cols = Math.floor(canvasWidth / spacing);

  const rows = Math.floor(canvasHeight / spacing);



  // 计算可以分成多少个完整块

  const blockCols = Math.ceil(cols / b);  // 水平方向块数

  const blockRows = Math.ceil(rows / a);  // 垂直方向块数



  const blocks = [];



  for (let blockRow = 0; blockRow < blockRows; blockRow++) {

    for (let blockCol = 0; blockCol < blockCols; blockCol++) {

      const block = [];

      const startRow = blockRow * a;

      const endRow = Math.min(startRow + a, rows);

      const startCol = blockCol * b;

      const endCol = Math.min(startCol + b, cols);



      // 提取当前 a×b 块中的点

      for (let i = startRow; i < endRow; i++) {

        const rowPoints = [];

        for (let j = startCol; j < endCol; j++) {

          rowPoints.push({

            x: spacing / 2 + j * spacing,

            y: spacing / 2 + i * spacing,

            row: i,

            col: j,

            blockId: blockRow * blockCols + blockCol

          });

        }

        block.push(rowPoints);

      }

      blocks.push(block);

    }

  }



  return {

    blocks: blocks,

    totalBlocks: blocks.length,

    blockLayout: { blockRows, blockCols },

    originalLayout: { rows, cols }

  };

}