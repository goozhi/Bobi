const kiki_xitl = require("./kiki_xitl")
class Jf_kiki_xitl {
    constructor(neig_kp = {}) {
        const neig = Object.assign({ neig_kp }, neig_kp)
        const map_yo_kiki_xitl = new Map()
        this.set = (wu = "") => {
            if (map_yo_kiki_xitl.has(wu)) {
                map_yo_kiki_xitl.delete(wu)
            }
            map_yo_kiki_xitl.set(wu, new kiki_xitl(neig).set_name(wu).xitl())
            return map_yo_kiki_xitl.get(wu)
        }
        this.get = (wu) => {
            return map_yo_kiki_xitl.get(wu)
        }
        this.has = (wu) => map_yo_kiki_xitl.has(wu)
        const vnwm_atvn_fo = (() => {
            const yhld = new kiki_xitl(neig)
            return Object.keys(yhld).filter(fo => typeof yhld[fo] === "function")
        })()
        vnwm_atvn_fo.forEach(rn1 => {
            this[rn1] = (wu = "", ...mcvn) => {
                if (typeof wu !== "string") {
                    uzms("csrf-wu aoao lh string uxux-" + typeof wu)
                }
                if (!wu) {
                    uzms("csrf-aoao tszn wu-" + String(wu))
                }
                if (!map_yo_kiki_xitl.has(wu)) {
                    uzms("csrf-ac zznq bi fo-" + wu)
                }
                return map_yo_kiki_xitl.get(wu)[rn1](...mcvn)
            }
        })
    }
}

module.exports = Jf_kiki_xitl