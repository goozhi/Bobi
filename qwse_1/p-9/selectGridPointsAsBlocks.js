function selectGridPointsAsBlocks(canvasWidth, canvasHeight, spacing, blockCols, blockRows) {
  // 先计算总列数和总行数
  const cols = Math.floor(canvasWidth / spacing);
  const rows = Math.floor(canvasHeight / spacing);
  
  // 计算每个块包含多少列和行
  const groupCols = Math.ceil(cols / blockCols);
  const groupRows = Math.ceil(rows / blockRows);
  
  const groups = [];
  
  for (let gy = 0; gy < blockRows; gy++) {
    for (let gx = 0; gx < blockCols; gx++) {
      const blockPoints = [];
      const startCol = gy * groupCols;
      const endCol = Math.min(startCol + groupCols, cols);
      const startRow = gx * groupRows;
      const endRow = Math.min(startRow + groupRows, rows);
      
      for (let i = startCol; i < endCol; i++) {
        for (let j = startRow; j < endRow; j++) {
          blockPoints.push({
            x: spacing / 2 + j * spacing,
            y: spacing / 2 + i * spacing
          });
        }
      }
      groups.push(blockPoints);
    }
  }
  
  return {
    groups: groups,
    layout: { blockCols, blockRows, groupCols, groupRows }
  };
}

// 使用：分成 3x2 个块（每块包含若干点）
// const result = selectGridPointsAsBlocks(800, 600, 50, 3, 2);