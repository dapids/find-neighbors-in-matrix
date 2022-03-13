import { findNeighborsInMatrix } from '.'

describe('findNeighborsInMatrix', () => {
  it('left corner cell', () => {
    const matrix = [
      [1, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
    ]

    const cell = [0, 0]

    const expectedNeighbors = [
      [1, 0],
      [1, 1],
      [0, 1],
    ]

    const neighbors = findNeighborsInMatrix({ cell, matrix })

    expect(neighbors.length).toBe(expectedNeighbors.length)
    expect(neighbors.sort()).toEqual(expectedNeighbors.sort())
  })

  it('middle cell', () => {
    const matrix = [
      [1, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
    ]

    const cell = [1, 1]

    const expectedNeighbors = [
      [1, 0],
      [2, 0],
      [2, 1],
      [2, 2],
      [1, 2],
      [0, 2],
      [0, 1],
      [0, 0],
    ]

    const neighbors = findNeighborsInMatrix({ cell, matrix })

    expect(neighbors.length).toBe(expectedNeighbors.length)
    expect(neighbors.sort()).toEqual(expectedNeighbors.sort())
  })

  it('right corner cell', () => {
    const matrix = [
      [1, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
    ]

    const cell = [2, 2]

    const expectedNeighbors = [
      [2, 1],
      [1, 2],
      [1, 1],
    ]

    const neighbors = findNeighborsInMatrix({ cell, matrix })

    expect(neighbors.length).toBe(expectedNeighbors.length)
    expect(neighbors.sort()).toEqual(expectedNeighbors.sort())
  })

  it('asymmetric matrix', () => {
    const matrix = [
      [1, 0, 1],
      [1, 1, 1],
    ]

    const cell = [2, 1]

    const expectedNeighbors = [
      [2, 0],
      [1, 1],
      [1, 0],
    ]

    const neighbors = findNeighborsInMatrix({ cell, matrix })

    expect(neighbors.length).toBe(expectedNeighbors.length)
    expect(neighbors.sort()).toEqual(expectedNeighbors.sort())
  })

  it('irregular matrix', () => {
    const matrix = [
      [0, 1],
      [1, 1, 0],
      [0, 0, 0],
    ]
    const cell = [0, 0]

    expect(() => findNeighborsInMatrix({ cell, matrix })).toThrow(
      'Irregular matrix',
    )
  })
})
