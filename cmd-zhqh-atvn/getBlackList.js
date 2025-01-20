const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
const nikc_out = path.resolve('out')
ngnc_nikc_paaw(nikc_out)
const blackNameListPath = path.join(nikc_out, 'blackNameList.txt')
const getBlackList = async (user_params = {}, outputs = { outputText }, neig_kp={}) => {
    const neig=Object.assign({neig_kp},neig_kp)
    if (user_params._[1] === 'getBlackList') {
        const data = fs.readFileSync(blackNameListPath).toString()
        outputs.outputText = (() => {
            if (user_params.findOne) {
                return data.split(/\n/).find(rn1 => rn1.includes(user_params.findOne))
            } else if (user_params.find) {
                return data.split(/\n/).filter(rn1 => rn1.includes(user_params.find)).join('\n')
            } else {
                return data
            }
        })()
    } else if (user_params._[1] === 'vhtz') {
    outputs.outputText = (() => {
            if(typeof neig.neig_kp?.rj_html_style==="string"){
                neig.neig_kp.rj_html_style=user_params.lastParams
                return "cd syig"
            }else{
                return "html style pzva yj ac ab."
            }
        })()      
    }
    else if (user_params.lastParams) {
        throw new Error('desc-error: You must input a params.')
    } else {
        throw new Error('desc-error: You must input a params.')
    }
}
module.exports = getBlackList