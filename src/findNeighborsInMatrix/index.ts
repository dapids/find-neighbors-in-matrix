import { isMatrixRegular } from '../isMatrixRegular'

export const findNeighborsInMatrix = ({
  cell,
  matrix,
}: {
  cell: number[]
  matrix: number[][]
}) => {
  const matrixIsRegular = isMatrixRegular(matrix)

  if (!matrixIsRegular) {
    throw new Error('Irregular matrix')
  }

  const steps = [
    [0, 1],
    [1, 0],
    [1, 1],
    [0, -1],
    [-1, 0],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ]

  const minBoundinX = 0
  const minBoundInY = 0
  const maxBoundInX = matrix[0].length - 1
  const maxBoundinY = matrix.length - 1

  const possibleNeighbors = steps.map(([x, y]) => [cell[0] + x, cell[1] + y])

  const neighbors = possibleNeighbors.filter(
    ([x, y]) =>
      x >= minBoundinX &&
      x <= maxBoundInX &&
      y >= minBoundInY &&
      y <= maxBoundinY,
  )

  return neighbors
}
