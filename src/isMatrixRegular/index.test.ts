import { isMatrixRegular } from '.'

describe('isMatrixRegular', () => {
  it('regular matrix', () => {
    const matrix = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ]

    expect(isMatrixRegular(matrix)).toBe(true)
  })

  it('irregular matrix with missing elements in X', () => {
    const matrix = [
      [0, 1],
      [1, 1, 0],
      [0, 0, 0],
    ]

    expect(isMatrixRegular(matrix)).toBe(false)
  })

  it('irregular matrix with exceeding elements in X', () => {
    const matrix = [
      [0, 1, 0, 1],
      [1, 1, 0],
      [0, 0, 0],
    ]

    expect(isMatrixRegular(matrix)).toBe(false)
  })
})
