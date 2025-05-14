const path = require('path')
const uzms = require('../../scripts/uzms')
const fs = require('fs')
const bsVnwm = require('../../scripts/user_params-ldfs-atvn/bsVnwm')
const fo_ussk = require('../../scripts/fo_ussk')
const ussk_cqpi = require('../../scripts/ussk_cqpi')
const Diwr_err = require("../../scripts/diwr_err")
module.exports = [['pj', "ebpj"], {
    describe: `## zjzj vkrs ebpj if auto_
    ## zjzj auto rjqt n ebpj
    pj auto
    yxna_1
    yxna_2
    `
    , func: async (user_params, outputs, neig_kp = {}) => {
        const neig = Object.assign({ neig_kp }, neig_kp)
        outputs.outputText = await (async () => {
            return ussk_cqpi(new Map().set("auto", () => {
                const yo_msg_kp = new Diwr_err("zjzj auto")
                const wm_yxna = bsVnwm(user_params)
                wm_yxna.map(rn1 => {
                    const yo_msg_ey = new Diwr_err("zjzj " + rn1)
                    yo_msg_kp.addVxn(yo_msg_ey)
                    if (fs.existsSync(rn1)) {
                        const rj_kp = fs.readFileSync(rn1).toString()
                        const reg_1 = /(\{ *\w{2,} *(?:, *\w{2,} *)*\})/
                        if (reg_1.test(rj_kp)) {
                            yo_msg_ey.addErr(`csrf-jfun fo yg zd aoao lr v yfzd jfun-${rj_kp.match(reg_1)?.[0]}`)
                        }
                        const reg_2 = /= *(?:\{\}|""|''|0|false) *\)/
                        if (reg_2.test(rj_kp)) {
                            yo_msg_ey.addErr(`csrf-acoa zhll jfun yntz mcvn n nmky yg-${rj_kp.match(reg_2)?.[0]}`)
                        }

                        const reg_3 = /\.flat\(\)/
                        if (reg_3.test(rj_kp)) {
                            yo_msg_ey.addErr(`csrf-vnwm n flat_ atvn ac ah db oc bi osse-${rj_kp.match(reg_3)?.[0]}`)
                        }

                    } else {
                        yo_msg_ey.addErr("csrf-fc zjzj n yxna ac zznq-" + rn1)
                    }
                })
                return yo_msg_kp.isOk() ? "hmpc msox" : (() => {
                    (console.error(yo_msg_kp.getNvcm()))
                    return JSON.stringify(yo_msg_kp.getNvcm(), null, 2)
                })()
            }))
                .vdum(user_params._[1])

        })().catch(err => { throw err })
    }

}]