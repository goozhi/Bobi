const diwr_neig_zjzj = require("../scripts/diwr_neig_zjzj")
const uzms = require("../scripts/uzms")
const Znzd_zhqh = require("./Znzd_zhqh")

class Jf_znzd_zhqh {
    constructor(neig_kp = {}) {
        const neig = Object.assign({ neig_kp }, neig_kp)
        const map_kp = new Map()
        const fdne_yoch = (neig_kp = {}) => {
            const vnwm_mcvn = ['zkrs', 'zhqh_zdti', 'inputText', 'gkqj_w_cd_zhqh']
            Object.values(neig_kp).forEach(rn1 => {
                diwr_neig_zjzj(rn1, vnwm_mcvn)
            })
            Object.entries(neig_kp).map(([fo1, yg1]) => {
                map_kp.set(fo1, new Znzd_zhqh(yg1).checkName(vnwm_mcvn))
            })
        }
        fdne_yoch(neig_kp)
        this.fdne = (neig_kp = {}) => {
            fdne_yoch(neig_kp)
            return this
        }
        this.values = () => {
            return map_kp.values()
        }
        this.forEach = (wl = (rn1, key) => {

        }) => map_kp.forEach(wl)
        this.toArray = () => [...map_kp]
        this.add = (neig_kp = {}) => {
            if (!neig_kp.zkrs) {
                uzms('csrf-zkrs acun-' + neig_kp.zkrs)
            } else if (map_kp.has(neig_kp.zkrs)) {
                uzms('csrf-cd pc bi zkrs-' + neig_kp.zkrs)
            } else {
                map_kp.set(neig_kp.zkrs, new Znzd_zhqh(neig_kp).check().set_aqfc_ymce_zdti(new Date(new Date().getTime() + 3)))
            }
            return this
        }
        this.has = (zkrs) => map_kp.has(zkrs)
        this.get = (zkrs) => map_kp.get(zkrs)
        this.hd = (zkrs) => {
            if (map_kp.has(zkrs)) {
                map_kp.delete(zkrs)
                return this
            } else {
                uzms('csrf-ac zznq bi zkrs-' + zkrs)
            }
        }
        this.qi = (neig_kp = {}) => {
            if (!neig_kp.zkrs) {
                uzms('csrf-zkrs acun-' + neig_kp.zkrs)
            } else if (!map_kp.has(neig_kp.zkrs)) {
                uzms('csrf-ac zznq pc bi zkrs-' + neig_kp.zkrs)
            } else {
                map_kp.set(neig_kp.zkrs, map_kp.get(neig_kp.zkrs).check().fdne_neig(neig_kp))
            }
            return this
        }
        this.get_noph_ymym = () => {
            return Object.fromEntries([...map_kp])
        }
        this.w_aqfc_ymce = () => {
            return [...map_kp].some(rn1 => rn1[1].get_mb_lil_ymce_zdti() < rn1[1].get_aqfc_ymce_zdti())
        }
        this.ld_JSON_vnwy = () => {
            return Object.fromEntries([...map_kp].map(([fo1, rn1]) => {
                return [fo1, Object.assign({}, {
                    zkrs: rn1.get_zkrs(),
                    zhqh_zdti: rn1.get_zhqh_zdti(),
                    inputText: rn1.get_inputText(),
                    gkqj_w_cd_zhqh: rn1.w_cd_zhqh()
                })]
            }))
        }

        this.set_noph_mb_lil_ymce_zdti_lh_bnll_zdti = () => {
            map_kp.forEach(rn1 => rn1.set_mb_lil_ymce_zdti(new Date()))
            return this
        }
    }
}
module.exports = Jf_znzd_zhqh