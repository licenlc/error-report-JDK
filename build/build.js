import json from 'rollup-plugin-json'

export default {
  input : 'src/index.js',
  output: {
    file: 'dist/catcherror.js',
    format: 'cjs'
  },
  plugin: [
    json()
  ]
}