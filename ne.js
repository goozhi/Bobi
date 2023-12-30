"nodejs";
const fs = require('fs')
const path = require('path')
const outFile = path.resolve('app.node.js')
const nikc_auto = './auto'
const yxna_yrds = path.join(nikc_auto, 'yrds.js')
const rj_yrds = fs.readFileSync(yxna_yrds).toString()
const rj_ybfb = fs.readFileSync('app.js').toString()
const outText = `
//se rjqt hv qwse ngnc!
${rj_ybfb}\n${rj_yrds}`
fs.writeFileSync(outFile, outText)
console.log(`'Done. See'${outFile}`)