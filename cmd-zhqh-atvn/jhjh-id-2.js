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
    outputs.outputText = await (async () => {
        if (user_params._[1] === 'off') {
            if (ji_nq_jhjh) {
                neig.diwr_slm_crum_om_crum_dk_qwse['360-jhjh-xiub'].engineOrNull?.forceStop()
                delete neig.diwr_slm_crum_om_crum_dk_qwse['360-jhjh-xiub']
                if (neig.neig_kp.tbys_wdbu_szas && neig.neig_kp.tbys_wdbu_szas.ref) {
                    clearInterval(neig.neig_kp.tbys_wdbu_szas)
                } else {
                    throw new Error('tbys wdbu szas (interval) hmpc kxux.')
                }
                ji_nq_jhjh = false
                neig.engines.execScriptFile('auto/open-app-ui.js')
                return 'cd gnwn'
            } else {
                return 'sopj gnwn. szlh cd gnwn.'
            }
        } else {

            if (!neig.diwr_slm_crum_om_crum_dk_qwse['360-jhjh-xiub']) {
                neig.diwr_slm_crum_om_crum_dk_qwse['360-jhjh-xiub'] = neig.engines.execScriptFile('auto/360-jhjh-xiub.js',
                    {
                        arguments: {
                            serverEngineId: neig.engines.myEngine().id,
                            title: 'jhjh-xiub',
                            content: 'drbz jhjh'
                        }
                    })
                ji_nq_jhjh = true
                neig.neig_kp.jhjh_uufb_zdti = new Date().getTime()
                neig.neig_kp.tbys_wdbu_szas = setInterval(() => {
                    if (ji_nq_jhjh) {
                        tbys_wdbu_atvn()
                    } else {
                        ji_nq_jhjh = false
                        clearInterval(neig.neig_kp.tbys_wdbu_szas)
                        console.error('hmpc nq jhjh, rt gb gnwn jhjh-xiub.')
                    }
                }, 3000);
                neig.diwr_slm_crum_om_crum_dk_qwse['360-jhjh-xiub'].on('start', () => {
                    console.log('jhjh-xiub cd bcaf drbz');
                    ji_nq_jhjh = true
                }).on('success', () => {
                    ji_nq_jhjh = false
                    console.log('jhjh-xiub cd sdbc bj crum.');
                }).on('exception', (execution, error) => {
                    ji_nq_jhjh = false
                    console.error('jhjh-xiub yizi crum error: ', error);
                });
                return 'hs ab bj drbz jhjh-xiub.'
            } else {
                ji_nq_jhjh = true
                return 'sopj drbz, zvll cd zhqh bj ra jtco.'
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
                setTimeout(() => {
                    const data = fs.readFileSync(yxna_kp)
                    fs.writeFileSync(path.join(neig.neig_kp.nikc_jhjh_tbys, rn1.name), data)
                    fs.unlinkSync(yxna_kp)
                    // fs.copyFileSync(yxna_kp, path.join(neig.neig_kp.nikc_jhjh_tbys, rn1.name))
                }, 1500);
            }
        })
        const vnwm_cd_jhjh_tbys = fs.readdirSync(neig.nikc_jhjh_tbys).sort()
        let mb_rjqt_arag_1 = 0
        vnwm_cd_jhjh_tbys.forEach(rn1 => {
            const bnll_rjqt_arag = fs.statSync(path.join(neig.nikc_jhjh_tbys, rn1)).size
            if (Math.abs(bnll_rjqt_arag / 1024 - mb_rjqt_arag_1 / 1024) < 100) {
                fs.unlinkSync(path.join(neig.nikc_jhjh_tbys, rn1))
            }
            mb_rjqt_arag_1 = bnll_rjqt_arag
        })

        console.log('tbys wdbu...')
    }
}
module.exports = jhjh