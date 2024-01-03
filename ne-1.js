const fs = require('fs')
const path = require('path')
const nikc_auto = './auto'
const yxna_yrds = path.join(nikc_auto, 'yrds.js')
function ne(){
const rj_yrds = fs.readFileSync(yxna_yrds).toString()
const rj_ybfb = fs.readFileSync('app.js').toString()
const outText = `
//se rjqt hv qwse ngnc!
${rj_ybfb}\n${rj_yrds}`

return outText
}
module.exports=ne