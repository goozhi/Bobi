"nodejs";
const path = require('path')
const fs = require('fs')
const ne =require("./ne-1.js")
const outFile = path.resolve('app.node.js')
const outText=ne()
fs.writeFileSync(outFile, outText)
console.log(`'Done. See'${outFile}`)