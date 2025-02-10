const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
const diwr_neig_zjzj = require('../../scripts/diwr_neig_zjzj')
// const afdh_rj = require('../auto/func/afdh_rj')
const Afdh_cqpi = require('../auto/func/Afdh_cqpi')
const yo_afdh_cqpi = new Afdh_cqpi()
const fo_ussk = require('../../scripts/fo_ussk')
const uzms = require('../../scripts/uzms')
const ussk_cqpi = require('../../scripts/ussk_cqpi')
const diwr_pzva_ussk_ss_zhvt = require('../../scripts/diwr_pzva_ussk_ss_zhvt')
const nikc_out = path.resolve('out')
ngnc_nikc_paaw(nikc_out)
let ji_nq_jhjh = false

const yxna_jhjh_tmp = __dirname + '/test.jhjh.js'

const jhjh = async (user_params = {}, outputs = { outputText }, neig_kp) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    yo_afdh_cqpi.fdne_neig(user_params)
    const vnwm_tbys_wu = fs.readdirSync(neig.nikc_jhjh_tbys).sort().filter(rn1 => /\b(?:png|jpg|wv)$/.test(rn1))
    function get_tszn_gmtb_rjqt_wu(user_params, neig_kp = {}) {
        const neig = Object.assign({ neig_kp, wl_yoch_fo_ussk_cqpi: (yoch_fo_ussk) => { } }, neig_kp)
        const { wl_yoch_fo_ussk_cqpi } = neig
        const yhld = new fo_ussk([
            ['ll', () => {
                return vnwm_tbys_wu.slice(0, user_params.ll)
            }]
            , ['ud', () => vnwm_tbys_wu.slice(vnwm_tbys_wu.length - user_params.ud)]])
            .set_hqtz('fo')
        wl_yoch_fo_ussk_cqpi(yhld)
        return yhld
            .vdum(user_params)
    }
    diwr_neig_zjzj(neig, ["nikc_jhjh_tbys"])
    outputs.outputText = await (async () => {
        const rssh = async () => {
            if (neig.power_manager.isScreenOn() && !$autojs.androidContext.getSystemService("keyguard").isKeyguardLocked()) {
                // do nothing
            } else {
                neig.power_manager.wakeUp();
                // if (!/1711/.test(neig.device.device.fingerprint)) {
                if (!neig.accessibility.accessibility.enabled) {
                    return { isOk: false, reason: `Hmpc so crmh osaw. Ssvl cd sh kim. Rt gd rssh.` }
                } else {
                    await neig.delay(1000).catch(err => { throw err })
                    // await neig.accessibility.longClick(500, 1800, 1000)
                    await neig.accessibility.swipe(500, 1800, 500, 500, 230).catch(err => { throw err })
                    await neig.delay(1000)
                    if ($autojs.androidContext.getSystemService("keyguard").isKeyguardLocked()) {
                        await neig.accessibility.swipe(500, 1800, 500, 500, 230).catch(err => { throw err })
                    }
                    await neig.delay(1000)
                }
            }
            if ($autojs.androidContext.getSystemService("keyguard").isKeyguardLocked()) {
                return { isOk: falsse, reason: `Vigl rssh nkme. Ssvl cd sh kim. Rt gd rssh.` }
            } else {
                return { isOk: true }
            }
        }
        if (user_params._[1] === "off") {
            outputs.rj_zhqh_tsjq = "ssvl cj_mk gn"
            if (neig.neig_kp.jcbz_jhjh_szas) {

                clearInterval(neig.neig_kp.jcbz_jhjh_szas)
                fs.writeFileSync(yxna_jhjh_tmp, yo_afdh_cqpi.get_diwr_voud_afdh_rj().rj_jhjh_crum)
                neig.engines.execScriptFile(yxna_jhjh_tmp)
                neig.neig_kp.ji_jhjh_uu = false
                setTimeout(() => {
                    delete (neig.neig_kp.jcbz_jhjh_szas)
                }, 500);
                neig.set_w_acoa_crum(false, 'jhjh')
                return 'cd taxt.'
            } else if (neig.neig_kp.ji_jhjh_uu) {
                fs.writeFileSync(yxna_jhjh_tmp, yo_afdh_cqpi.get_diwr_voud_afdh_rj().rj_jhjh_crum)
                neig.engines.execScriptFile(yxna_jhjh_tmp)
                neig.neig_kp.ji_jhjh_uu = false
                neig.set_w_acoa_crum(false, 'jhjh')
                return `cd crum jhjh aucc.`
            } else {
                return `hmpc nq jhjh.`
            }
        } else if (user_params._[1] === 'hd') {
            return `tu pk\n${get_tszn_gmtb_rjqt_wu(user_params)
                .map(rn1 => path.join(neig.nikc_jhjh_tbys, rn1))
                .join('\n')}`
        } else if (user_params._[1] === 'get') {
            return ussk_cqpi(
                new Map()
                    .set('tbys', () => {
                        // const vnwm_rjqt_wu = vnwm_tbys_wu//.map(rn1 => path.join(neig.nikc_jhjh_tbys, rn1))
                        const vnwm_rjqt_wu = get_tszn_gmtb_rjqt_wu(user_params, {
                            wl_yoch_fo_ussk_cqpi: (yoch) => yoch.setDefault(() => uzms('csrf-aoao tszn tbys n ll yscj ae ud yscj n vnaw'))
                        })
                        outputs.na_ld_html = true
                        const rj_m_d = `## ybkc\n${vnwm_rjqt_wu.map(rn1 => {
                            const yhld_stat = fs.statSync(path.join(neig.nikc_jhjh_tbys, rn1))
                            return `### ${yhld_stat.ctime.toLocaleString()} ${yhld_stat.size / 1024}KB \n${path.join(neig.nikc_jhjh_tbys, rn1)}\n![](/gmtb/${rn1})`
                        }).join('\n')}`
                        return rj_m_d
                    })
                    .set('tbys_vnaw', () => {
                        return String(vnwm_tbys_wu.length)
                    })
                    .set('vwke_mi', () => String(yo_afdh_cqpi.get_neig().vwke_mi))
                    .set('jmaw', () => String(yo_afdh_cqpi.get_neig().jmaw))
                    .set('mcvn', () => JSON.stringify(diwr_pzva_ussk_ss_zhvt(["jmaw", "jhsf_zc", "vwke_mi"], yo_afdh_cqpi.get_neig())))
            ).setDefault(() => uzms('csrf-bi vxn tsjq acun-' + user_params._[2])).vdum(user_params._[2])
        } else if (user_params._[1] === 'yfm') {
            return `uuvo yh.`
        } else if (user_params._[1] === 'uu') {
            if (neig.neig_kp.ji_jhjh_uu) {
                return `cqpi nkme, jhjh aucc cd uu.`
            }
            const rssh_jtyj = await rssh().catch(err => { throw err })
            if (!rssh_jtyj.isOk) {
                return rssh_jtyj.reason
            }
            neig.neig_kp.ji_jhjh_uu = true
            fs.writeFileSync(yxna_jhjh_tmp, yo_afdh_cqpi.get_diwr_voud_afdh_rj().rj_jhjh_drbz)
            neig.engines.execScriptFile(yxna_jhjh_tmp)
            neig.set_w_acoa_crum(true, 'jhjh')
            return `cd zhqh jhjh uu.`
        } else {
            if (!neig.neig_kp.ji_jhjh_uu) {
                return `jhjh aucc ra uu, rt gd zhqh "jhjh uu"`
            }
            if (neig.neig_kp.jcbz_jhjh_szas) {
                return `cqpi soyc, cd nq jhjh yh.`
            }
            neig.neig_kp.diwr_cd_hd = {}
            const rssh_jtyj = await rssh().catch(err => { throw err })
            if (!rssh_jtyj.isOk) {
                return rssh_jtyj.reason
            }
            fs.writeFileSync(yxna_jhjh_tmp, yo_afdh_cqpi
                .set_yxna_atvn_wdbu_tbys(path.resolve('auto/func/tbys_wdbu.js'))
                // .set_rj_atvn_wdbu_tbys(`(${tbys_wdbu_atvn.toString().replace(/`/g, '\\`').replace(/\$/g, "\\\$")})(yxna_tbys)`)
                .get_diwr_voud_afdh_rj().rj_jhjh_szas)
            neig.engines.execScriptFile(yxna_jhjh_tmp)
            outputs.rj_zhqh_tsjq = "ssvl cj_mk uu"
            await neig.delay(1000)

            neig.neig_kp.jhjh_uufb_zdti = new Date().getTime()

            neig.neig_kp.jcbz_jhjh_szas = setInterval(async () => {
                if (neig.neig_kp.jhjh_dzvv_yh) {

                } else {
                    neig.neig_kp.jhjh_dzvv_yh = true
                    if (neig.neig_kp.nq_jcbz_dzvv_yh) {
                        console.log('pc yndf qwse nq zhqh dzvv yh, ja ac lbm jhjh.')
                        if (neig.neig_kp.dzvv_ssn_fi_bsm) {
                            if (neig.neig_kp.ji_jhjh_tk_uu) {
                                neig.neig_kp.ji_jhjh_tk_uu = false

                            } else {

                                neig.neig_kp.ji_jhjh_tk_uu = true
                            }
                            neig.neig_kp.dzvv_ssn_fi_bsm = false
                            fs.writeFileSync(yxna_jhjh_tmp, yo_afdh_cqpi.get_diwr_voud_afdh_rj().rj_tk)
                            neig.engines.execScriptFile(yxna_jhjh_tmp)
                        }
                    } else {
                    }
                    neig.neig_kp.jhjh_dzvv_yh = false
                    await neig.delay(500).catch(err => { throw err })
                }
            }, 2000)
            return 'cd zhqh.'

        }
    })().catch(err => { throw err })
}
module.exports = jhjh

