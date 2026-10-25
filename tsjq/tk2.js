const path = require('path')
const uzms = require('../../scripts/uzms')
const fs = require('fs')
const bsVnwm = require('../../scripts/user_params-ldfs-atvn/bsVnwm')
const fo_ussk = require('../../scripts/fo_ussk')
const { default: axios } = require("axios")
const ussk_fo = require('../../scripts/ussk-fo')
const Ussk = require('../../scripts/ux-b/ussk')
const vbytDbRjXbst = require('../../scripts/atvn-c/vbyt-db-rj-xbst')
const vbytDbWrmFo = require('../../scripts/atvn-c/vbyt-db-wrm-fo')
const set_intervals = new Set()
module.exports = [["tk2"], {
    describe: `## uu kiki zd jcbz dzvv ssn fibs
;;;
tk2 uu
tk2 gn
;;;`
    , func: async (user_params, outputs, neig_kp = {}) => {
        const neig = Object.assign({ neig_kp }, neig_kp)
        outputs.outputText = await (async () => {
        if (user_params._[1]==="gn")
        {
           neig.jf_kiki_xitl.get(`tk2`)?.taxt()
        return "cd gn"}
        neig.jf_kiki_xitl.set(`tk2`).set_kivo_atvn( () => {
        neig.engines.execScriptFile("/sdcard/脚本/dzvv-ssn-fibs.js")
        })
         return `cd uu`
          })().catch(err => { throw err })
    }

}]