const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
const diwr_neig_zjzj = require('../../scripts/diwr_neig_zjzj')
const nikc_out = path.resolve('out')
ngnc_nikc_paaw(nikc_out)
let ji_nq_jhjh = false
const jhjh = async (user_params = {}, outputs = { outputText }, neig_kp) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    diwr_neig_zjzj(neig, ["nikc_jhjh_tbys"])
    outputs.outputText = await (async () => {
        if (user_params._[1] === "off") {
            if (neig.neig_kp.jcbz_jhjh_szas) {
                clearTimeout(neig.neig_kp.jcbz_jhjh_szas)
                setTimeout(() => {
                    delete (neig.neig_kp.jcbz_jhjh_szas)
                }, 500);
                neig.auto.launch('com.wrvr.uuvo_ouss')
                return 'cd taxt.'
            } else {
                return `hmpc nq jhjh.`
            }
        } else {
            if (user_params._[1] === "yf") {
                neig.neig_kp.dzvv_yf = true
                return `ja dzvv gbow yf...`
            }
            if (neig.neig_kp.jcbz_jhjh_szas) {
                return 'cqpi nkme, cd nq jhjh yh.'
            } else {
                if (!/1711/.test(neig.device.device.fingerprint)) {
                    return 'Bi qwse (jhjh-xiub) aoao jyqh nq 360 ssvl mb.'
                } else {
                    if (neig.power_manager.isScreenOn()) {

                    } else {
                        neig.power_manager.wakeUp();
                        await neig.delay(1000).catch(err => { throw err })
                        await neig.accessibility.swipe(500, 1800, 500, 500, 230).catch(err => { throw err })
                    }
                    neig.neig_kp.jhjh_uufb_zdti = new Date().getTime()
                    neig.neig_kp.jcbz_jhjh_szas = setInterval(async () => {
                        if (neig.neig_kp.jhjh_dzvv_yh) {

                        } else {
                            neig.neig_kp.jhjh_dzvv_yh = true
                            if (neig.neig_kp.nq_jcbz_dzvv_yh) {
                                console.log('pc yndf qwse nq zhqh dzvv yh, ja ac lbm jhjh.')
                                if (neig.neig_kp.dzvv_ssn_fi_bsm) {
                                    await neig.accessibility.click(97, 13)
                                    await neig.delay(700)
                                    if (neig.neig_kp.ji_jhjh_tk_uu) {
                                        neig.neig_kp.ji_jhjh_tk_uu = false
                                        await neig.accessibility.click(54 + 3, 362 + 3)
                                    } else {
                                        await neig.accessibility.click(54 + 3, 470 + 3)
                                        neig.neig_kp.ji_jhjh_tk_uu = true
                                    }
                                    neig.neig_kp.dzvv_ssn_fi_bsm = false
                                }
                            } else {
                                if (neig.neig_kp.dzvv_yf) {
                                    await neig.accessibility.click(367 + 3, 13 + 3)
                                    await neig.delay(500)
                                    await neig.accessibility.click(164 + 3, 384 + 3)
                                    neig.neig_kp.dzvv_yf = false
                                }
                                await jhjh_mr_wdbu().catch(err => { throw err })
                            }
                            neig.neig_kp.jhjh_dzvv_yh = false
                            await neig.delay(500).catch(err => { throw err })
                        }
                    }, 2000)
                    return 'cd zhqh.'
                }
            }

            async function jhjh_mr_wdbu() {
                neig.auto.launch("com.android.camera")
                const clickableObj = await neig.accessibility.select({
                    packageName: /com\.android\.camera$/,
                    className: /android\.widget\.ImageView$/,
                    desc: "快门按钮",
                    clickable: true
                }).findFirst({ timeout: 20000, maxRetries: 100 }).catch(err => {
                    throw err
                });
                if (clickableObj) {
                    await neig.accessibility.click(544, 1753).catch(err => { console.error(err) })
                    await neig.delay(1000)
                    tbys_wdbu_atvn()
                } else {
                    console.error('yj ac ab ubqt.')
                }
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
                const data = fs.readFileSync(yxna_kp)
                fs.writeFileSync(path.join(neig.neig_kp.nikc_jhjh_tbys, rn1.name), data)
                fs.unlinkSync(yxna_kp)
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
    }
}
module.exports = jhjh