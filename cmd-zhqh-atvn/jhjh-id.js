const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
const diwr_neig_zjzj = require('../../scripts/diwr_neig_zjzj')
const nikc_out = path.resolve('out')
ngnc_nikc_paaw(nikc_out)
let ji_nq_jhjh = false
const jhjh = async (user_params = {}, outputs = { outputText }, neig_kp) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    diwr_neig_zjzj(neig, ["yxna_log_nodejs", "yxna_log_autojs", "nikc_jhjh_tbys"])
    const node_1 = JSON.parse(fs.readFileSync(neig.yxna_log_nodejs).toString())
    const auto_1 = JSON.parse(fs.readFileSync(neig.yxna_log_autojs).toString())
    outputs.outputText = await (async () => {
        if (auto_1.doing) {
            return 'auto is busy now. try it again later.'
        } else {
            if (user_params._[1] === 'off') {
                node_1.autojs_todo = 'gnwn-360-jhjh-xiub'
                fs.writeFileSync(neig.yxna_log_nodejs, JSON.stringify(node_1, null, 2))
                const rj_off_tsjq_jtyj = await nwvtJtyj(neig).catch(err => { throw err })
                if (/cd gnwn/.test(rj_off_tsjq_jtyj)) {
                    ji_nq_jhjh = false
                    if (neig.neig_kp.tbys_wdbu_szas && neig.neig_kp.tbys_wdbu_szas.ref) {
                        clearInterval(neig.neig_kp.tbys_wdbu_szas)
                    } else {
                        throw new Error('tbys wdbu szas (interval) hmpc kxux.')
                    }
                }
                return rj_off_tsjq_jtyj
            } else {
                node_1.autojs_todo = 'drbz-360-jhjh-xiub'
                fs.writeFileSync(neig.yxna_log_nodejs, JSON.stringify(node_1, null, 2))
                const rj_tsjq_jtyj = await nwvtJtyj(neig).catch(err => { throw err })
                if (/vxn cd hs ab 360-jhjh-xiub tsjq, ja drbz jhjh-xiub qwse/.test(rj_tsjq_jtyj)
                ) {
                    ji_nq_jhjh = true
                    neig.neig_kp.jhjh_uufb_zdti = new Date().getTime()
                    neig.neig_kp.tbys_wdbu_szas = setInterval(() => {
                        if (ji_nq_jhjh) {
                            tbys_wdbu_atvn()
                        }
                    }, 3000);

                } else if (/zvll cd zhqh jhjh xiub, acoa jd zhqh/.test(rj_tsjq_jtyj)) {
                    ji_nq_jhjh = true
                } else {
                    // ji_nq_jhjh = false
                }
                return rj_tsjq_jtyj
            }
        }
    })().catch(err => { throw err })
    function tbys_wdbu_atvn() {
        const nikc_360_camera_nikc = '/storage/emulated/0/DCIM/Camera/'
        const files = fs.readdirSync(nikc_360_camera_nikc, { withFileTypes: true })
        files.filter(rn1 => rn1.isFile && /\.jpg$/.test(rn1.name)).forEach(rn1 => {
            const yxna_kp = path.join(nikc_360_camera_nikc, rn1.name)
            const stat_1 = fs.statSync(yxna_kp)
            if (stat_1.ctimeMs > neig.neig_kp.jhjh_uufb_zdti) {
                fs.copyFileSync(yxna_kp, path.join(neig.neig_kp.nikc_jhjh_tbys, rn1.name))
            }
        })
        console.log('tbys wdbu...')
    }
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

