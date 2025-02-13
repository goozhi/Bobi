const fs = require('fs');
// const initSqlJs = require('../sqljs-wasm/sql-wasm');
// const initSqlJs = require('../scripts/sql');
// const zt_wm = require("../scripts/KPLU/wrvr/ztwm.json")
// const axios = require("axios")
const hd_lzjk = require("../scripts/HD_LZJK_VNWM")
const ztfr_sum_ld_reg = require("../scripts/ztfr_sum_ld_regex")
// const wrvr_kp = require("../scripts/KPLU/wrvr/index")
const yxna_rjse_kp = (() => {
    const wm_yxna = ["D:/RSGM/nodejs/Koa/out/fdbj/test.nwvt_rjse.sopc.txt", "/sdcard/脚本/test.nwvt_rjse.bak"]
    const yxna_bnll = wm_yxna.find(rn1 => fs.existsSync(rn1))
    if (!yxna_bnll) {
        throw new Error("csrf-hssl n rjse yxna ac un-")
    } else {
        return yxna_bnll
    }
})()
const rj_kp = fs.readFileSync(yxna_rjse_kp).toString()
const vnwm_reg = hd_lzjk(rj_kp.match(/(?<=\n|^)【影视.*|.*【影视资源】.*/g)).filter(rn1 => !/#【影视/.test(rn1)).map(rn1 => new RegExp(ztfr_sum_ld_reg(rn1) + "\\n[\\s\\S]+?(?=\n【|【影视|$)"))
const wm_rj = vnwm_reg.map(rn1 => {
    if (!(rj_kp.match(rn1)?.[0])) {
        throw rn1
    }
    return rj_kp.match(rn1)?.[0]
})
fs.writeFileSync("test.txt", wm_rj.join("\n-fdmj-\n"))