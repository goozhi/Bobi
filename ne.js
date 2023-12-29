const fs = require('fs')
const path = require('path')
const outFile = path.resolve('app.node.js')
const rj_ybfb = fs.readFileSync('app.js').toString()
const outText=`

`+rj_ybfb
fs.writeFileSync(outFile, outText)
console.log(`'Done. See'${outFile}`)