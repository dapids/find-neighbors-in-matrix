export const isMatrixRegular = (matrix: number[][]) => {
  const [firstRow, ...remainingRows] = matrix

  return remainingRows.every(row => row.length === firstRow.length)
}
