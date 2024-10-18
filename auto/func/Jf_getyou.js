const rfrf = require("../../../scripts/rfrf")
const ussk_cqpi = require("../../../scripts/ussk_cqpi")
const uzms = require("../../../scripts/uzms")
const Getyou = require("./getyou")

class Jf_getyou {
    constructor(neig_kp = {}) {
        const neig_1 = Object.assign({ neig_kp }, {
            map_zkrs: new Map(),
        }, neig_kp)

        this.add = (zkrs, neig_kp) => {
            if (neig_1.map_zkrs.has(zkrs)) {
                uzms('csrf-bi zkrs cd pc-' + zkrs)
            } else {
                neig_1.map_zkrs.set(zkrs, new Getyou(neig_kp))
            }
            return this
        }
        this.has = (zkrs) => neig_1.map_zkrs.has(zkrs)
        this.get = (zkrs) => neig_1.map_zkrs.get(zkrs)
        this.hd = (zkrs) => {
            if (neig_1.map_zkrs.has(zkrs)) {
                neig_1.map_zkrs.delete(zkrs)
            } else {
                uzms('csrf-ac zznq bi zkrs-' + zkrs)
            }
            return this
        }
    }
}
module.exports = Jf_getyou
