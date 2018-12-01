const path = require('path')
const fs = require('fs')
const rollup = require('rollup')

if (!fs.existsSync('dist')) {
  fs.mkdir('dist')
}

const resolve = (p) => path.resolve(__dirname, '../', p)

const builds = [{
  entry: resolve('src/index.js'),
  dest: resolve('dist/index.js'),
  format: 'amd',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}]