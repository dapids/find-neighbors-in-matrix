# Find-neighbors-in-matrix
Easy-to-use, typed, and tested utility to find the neighbors of a cell in a matrix.

![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat)
![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat)
![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat)
![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat)

## Install
```bash
yarn add -E find-neighbors-in-matrix # or npm install find-neighbors-in-matrix
```

## Use
```typescript
import { findNeighborsInMatrix } from 'find-neighbors-in-matrix'

const matrix = [
  [1, 0, 1],
  [1, 1, 1],
  [0, 0, 1],
]

const cell = [0, 0]

findNeighborsInMatrix({ cell, matrix }) // [[1, 0], [1, 1], [0, 1]]
```

## Contribute

This library leverages [TSDX](https://tsdx.io/) for easing the DX.

To run the library, use:

```bash
yarn start # or npm run start
```

This command builds to `/dist` and runs the project in watch mode, so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use:
```bash
yarn build # or npm run build
```

Jest tests are set up to run with:
```bash
yarn test # or npm run test
```

### Configuration

Code quality is set up with `prettier`, `husky`, and `lint-staged`.

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of the library with:
```bash
yarn size # or npm run size
```

### Rollup

The library uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings.

## Module Formats

CJS, ESModules, and UMD module formats are supported.
