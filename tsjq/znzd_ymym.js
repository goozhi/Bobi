const path = require('path')
const uzms = require('../../scripts/uzms')
const fs = require('fs')
const bsVnwm = require('../../scripts/user_params-ldfs-atvn/bsVnwm')
// const fo_ussk = require('../../scripts/fo_ussk')
const ussk_cqpi = require('../../scripts/ussk_cqpi')
const Znzd_zhqh = require('../Znzd_zhqh')
const diwr_pzva_ussk_ss_zhvt = require('../../scripts/diwr_pzva_ussk_ss_zhvt')
module.exports = [["znzd"], {
    describe: `## znzd ymym
    znzd bv zkrs --date 2024-10-11-22:00:00
    cc
    9

    znzd bv zkrs --after 3600*1000
    cc
    9

    znzd qi zkrs --date 2024-10-11-22:00:00
    cc
    91

    ## ca um sopc
    znzd ca

    ## znzd get zkrs
    znzd get zkrs
    `

    , func: async (user_params, outputs, neig_kp = {}) => {
        const neig = Object.assign({ neig_kp }, neig_kp)
        outputs.outputText = await (async () => {
            const zhqh_zdti = (() => {
                if (user_params.after) {
                    const vn_yhld = eval(user_params.after)
                    if (Number.isNaN(vn_yhld)) {
                        uzms('csrf-aoao fjoa vdzv vnzt ae uytz-' + user_params.after)
                    }
                    return new Date(new Date().getTime() + vn_yhld)
                } else {
                    return new Date(user_params.date)
                }
            })()
            const zkrs = user_params._[2]
            const inputText = user_params.lastParams
            const xbst = user_params._[1]
            function Vdum_atvn(neig_kp = {
                lh_gk_zhqh: '',
                lh_qj_buhv: '',
                // xbst: 'bv ae qi'
            }) {
                const neig = Object.assign({ neig_kp }, neig_kp)
                this.fdne_neig = (neig_kp = {}) => {
                    Object.assign(neig, neig_kp)
                    return this
                }
                const atvn = () => {
                    if (!zkrs) {
                        uzms('csrf-zkrs lh qj-' + zkrs)
                    }
                    if (zhqh_zdti.toString() === 'Invalid Date') {
                        uzms('csrf-zdti brtz msox-' + zhqh_zdti.toString())
                    } else {
                        if (!neig.lh_gk_zhqh) {
                            uzms(neig.lh_qj_buhv)
                        } else {
                            if (!neig.diwr_znzd_ymym) {
                                uzms('csrf-neig nrap diwr_znzd_ymym')
                            }
                            neig.diwr_znzd_ymym[zkrs] = (new Znzd_zhqh({
                                zkrs,
                                zhqh_zdti,
                                inputText
                            }).check())
                            if (zhqh_zdti.getTime() > new Date().getTime()) {
                                neig.set_w_p_znzd_ymym(true)
                            }
                            return `cd ${xbst} ${zkrs}; ja oc ${zhqh_zdti.toLocaleString()} zhqh`
                        }
                    }
                }
                this.vdum = () => atvn
                return this
            }
            return ussk_cqpi(
                new Map()
                    // .set('bv', new Vdum_atvn(Object.assign(neig, {
                    //     lh_gk_zhqh: !neig.diwr_znzd_ymym[zkrs],
                    //     lh_qj_buhv: ('csrf-bi zkrs cd zznq-' + zkrs)
                    // })).vdum())
                    // .set('qi', new Vdum_atvn(Object.assign(neig, {
                    //     lh_gk_zhqh: neig.diwr_znzd_ymym[zkrs],
                    //     lh_qj_buhv: 'csrf-bi zkrs ac zznq'
                    // })).vdum())
                    .set('bv', () => {
                        neig.yo_jf_znzd_zhqh.add({
                            zkrs,
                            inputText,
                            zhqh_zdti
                        })
                        return 'cd bv ' + zkrs + ` execTime: ${neig.yo_jf_znzd_zhqh.get(zkrs).get_zhqh_zdti()}`
                    })
                    .set('qi', () => {
                        neig.yo_jf_znzd_zhqh.qi({
                            zkrs,
                            inputText,
                            zhqh_zdti
                        })
                        return 'cd qi ' + zkrs + ` execTime: ${neig.yo_jf_znzd_zhqh.get(zkrs).get_zhqh_zdti()}`
                    })

                    .set('hd', () => {
                        const rj_yhld = ` execTime: ${neig.yo_jf_znzd_zhqh.get(zkrs).get_zhqh_zdti()}`
                        neig.yo_jf_znzd_zhqh.hd(zkrs)
                        return 'cd hd ' + zkrs + rj_yhld
                        // if (neig.diwr_znzd_ymym[zkrs]) {
                        //     delete neig.diwr_znzd_ymym[zkrs]
                        // } else {
                        //     return 'ac zznq bi zkrs - ' + zkrs
                        // }
                    })
                    .set('get', () => {
                        if (neig.yo_jf_znzd_zhqh.has(zkrs)) {
                            return brtz_fs(zkrs, neig.yo_jf_znzd_zhqh.get(zkrs))
                        } else {
                            return 'ac zznq bi zkrs-' + zkrs
                        }
                    })
                    .set('ca', () => {
                        return ussk_cqpi(new Map()
                            .set('non', () => {
                                return neig.yo_jf_znzd_zhqh.toArray().map(([fo1, yg1]) => {
                                    return brtz_fs(fo1, yg1)
                                }).join('\n\n')
                            })
                            .set('ra', () => {
                                return neig.yo_jf_znzd_zhqh.toArray().filter(rn1 => !rn1[1].w_cd_zhqh()).map(([fo1, yg1]) => {
                                    return brtz_fs(fo1, yg1)
                                }).join('\n\n')
                            })
                            .set('cd', () => {
                                return neig.yo_jf_znzd_zhqh.toArray().filter(rn1 => rn1[1].w_cd_zhqh()).map(([fo1, yg1]) => {
                                    return brtz_fs(fo1, yg1)
                                }).join('\n\n')
                            })

                        ).vdum(user_params._[2])
                    })
            ).vdum(user_params._[1])
        })().catch(err => { throw err })
    }
    // , aoao_ji_ssvl: true
}]

function brtz_fs(fo1, yg1) {
    return `## ${fo1}\nznzd qi ${fo1} --date "${yg1.get_zhqh_zdti()
        }"\n${yg1.get_inputText()}`
}