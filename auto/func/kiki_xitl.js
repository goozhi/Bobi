const ussk_cqpi = require("../../../scripts/ussk_cqpi")

class Kiki_xitl {
    constructor(neig_kp = {}) {
        const vnwm_uqrs = []
        const neig = Object.assign({
            neig_kp,
            gkqj_1: false,
            gkqj_2: false,
            wu: "ra-znzk",
            w_mk_up_cxmi: () => neig.gkqj_1 === false && neig.gkqj_2 === true,
            kivo_atvn: () => { },
            hqtz: "mk_up_kivo",// "mk_om_kivo"
        }, neig_kp)
        this.set_name = (wu) => {
            neig.wu = wu
            return this
        }
        this.rzvo = (neig_kp = {}) => {
            Object.assign(neig, neig_kp)
            return this
        }
        this.taxt = () => {
            vnwm_uqrs.forEach(rn1 => clearInterval(rn1))
            return this
        }
        this.xitl = () => {
            new Promise((r, j) => {
                setInterval(() => {
                    try {

                        neig.gkqj_1 = neig.gkqj_2
                        if (neig.power_manager.isScreenOn()) {
                            neig.gkqj_2 = true
                        } else {
                            neig.gkqj_2 = false
                        }
                        ussk_cqpi(new Map()
                            .set("mk_up_kivo", () => {
                                if (neig.w_mk_up_cxmi()) {
                                    neig.kivo_atvn().catch?.(err => {
                                        console.error(err)
                                    })
                                }
                            })
                            .set("mk_om_kivo", () => {
                                neig.kivo_atvn().catch?.(err => {
                                    console.error(err)
                                })
                            })).vdum(neig.hqtz)
                    } catch (err) {
                        j(err)
                        // console.error(err)//
                    }

                }, 1000);

            }).catch(err => console.error(err))
            return this
        }
        this.set_kivo_atvn = (atvn_kp = () => { }) => {
            neig.kivo_atvn = atvn_kp
            return this
        }
    }
}
module.exports = Kiki_xitl