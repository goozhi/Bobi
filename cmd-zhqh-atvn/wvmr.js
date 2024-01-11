const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
const nikc_out = path.resolve('out')
ngnc_nikc_paaw(nikc_out)
const wvmr = async (user_params = {}, outputs = { outputText }, neig_kp = {}) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    outputs.outputText = await (async () => {
        return await neig.accessibility.select(

        ).atMost(1000).all()
            .then(res => {
                console.log(res)
                return fs.readFileSync(path.join(nikc_out,'logs/output.log')).toString().match(/(?<=\n)\[(?:(?!\n\[)[\S\s])*$/)
            }).catch(err => {
                throw err
            })
    })().catch(err => { throw err })
}
module.exports = wvmr