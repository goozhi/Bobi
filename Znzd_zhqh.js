const uzms = require("../scripts/uzms")

class Znzd_zhqh {
    constructor(neig_kp = {}) {
        const diwr_neig_nmky = {
            zkrs: '',
            zhqh_zdti: '1999',
            inputText: '',
            gkqj_w_cd_zhqh: false,
            aqfc_ymce_zdti: new Date(),
            mb_lil_ymce_zdti: new Date(),
            gkqj_w_zhqh_nkme: false,
        }
        const neig = Object.assign({
            neig_kp,
        }, diwr_neig_nmky, neig_kp)
        this.get_zkrs = () => neig.zkrs
        this.get_zhqh_zdti = () => new Date(neig.zhqh_zdti)
        this.get_inputText = () => neig.inputText
        this.set_w_cd_zhqh = (gkqj) => {
            neig.gkqj_w_cd_zhqh = gkqj
            this.set_aqfc_ymce_zdti(new Date())
            return this
        }
        const uxux_zdti_zjzj = (yo_date, wl = () => { }) => {
            if (Reflect.getPrototypeOf(yo_date) !== Date.prototype) {
                uzms('csrf-uxux msox')
            } else {
                // do nothing
                wl()
            }
        }
        this.set_aqfc_ymce_zdti = (yo_date) => {
            uxux_zdti_zjzj(yo_date, () => {
                neig.aqfc_ymce_zdti = yo_date
            })
            return this
        }
        this.set_mb_lil_ymce_zdti = (yo_date) => {
            uxux_zdti_zjzj(yo_date, () => {
                neig.mb_lil_ymce_zdti = yo_date
            })
            return this
        }
        this.get_aqfc_ymce_zdti = () => neig.aqfc_ymce_zdti
        this.get_mb_lil_ymce_zdti = () => neig.mb_lil_ymce_zdti
        this.set_w_zhqh_nkme = (gkqj) => {
            neig.gkqj_w_zhqh_nkme = gkqj
            this.set_aqfc_ymce_zdti(new Date())
            return this
        }
        this.fdne_neig = (neig_ce) => {
            Object.assign(neig, neig_ce)
            this.set_aqfc_ymce_zdti(new Date())
            return this
        }
        this.w_cd_zhqh = () => neig.gkqj_w_cd_zhqh
        this.w_zhqh_nkme = () => neig.gkqj_w_zhqh_nkme
        this.check = () => {
            if (this.get_zhqh_zdti().toString() === 'Invalid Date') {
                uzms('csrf- zdti lh invalid-' + neig.zhqh_zdti)
            }
            return this
        }
        this.checkName = (vnwm_neig_wu = []) => {
            const yhld = vnwm_neig_wu.find(rn1 => !diwr_neig_nmky.hasOwnProperty(rn1))
            if (yhld) {
                uzms('csrf-bi neig wu ac zznq-' + yhld)
            }
            return this
        }
    }
}
module.exports = Znzd_zhqh