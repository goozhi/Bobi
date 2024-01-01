const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
const nikc_out = path.resolve('out')
ngnc_nikc_paaw(nikc_out)
const blackNameListPath = path.join(nikc_out, 'blackNameList.txt')
const jhjh = async (user_params = {}, outputs = { outputText }, neig_kp) => {
    const neig = Object.assign({}, neig_kp)
    const node_1 = JSON.parse(fs.readFileSync(neig.yxna_log_nodejs).toString())
    const auto_1 = JSON.parse(fs.readFileSync(neig.yxna_log_autojs).toString())
    outputs.outputText = await (async () => {
        if (auto_1.doing) {
            return 'auto is busy now. try it again later.'
        } else {
            if (user_params._[1] === 'off') {
                node_1.autojs_todo = 'gnwn-360-jhjh-xiub'
                fs.writeFileSync(neig.yxna_log_nodejs, JSON.stringify(node_1, null, 2))
                return await nwvtJtyj(neig).catch(err => { throw err })
            } else {
                node_1.autojs_todo = 'drbz-360-jhjh-xiub'
                fs.writeFileSync(neig.yxna_log_nodejs, JSON.stringify(node_1, null, 2))
                return await nwvtJtyj(neig).catch(err => { throw err })
            }
        }
    })().catch(err => { throw err })
}
module.exports = jhjh

const nwvtJtyj = (async (neig = {}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const auto_1 = JSON.parse(fs.readFileSync(neig.yxna_log_autojs).toString())
            if (auto_1.result) {
                resolve(auto_1.result)
            } else {
                resolve('The result show that Auto may did not execute this command.')
            }
        }, 3000);
    })
})