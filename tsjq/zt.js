const path = require('path')
const uzms = require('../../scripts/uzms')
const fs = require('fs')
const bsVnwm = require('../../scripts/user_params-ldfs-atvn/bsVnwm')
const fo_ussk = require('../../scripts/fo_ussk')
const { default: axios } = require("axios")
const set_intervals = new Set()
const wrm_zt_rs = require("../../zzzz/kplu/cqzt/zt-rs.json")
module.exports = [["zt","ztwy"], {
    describe: `## ztwy
    ztwy
    cqzt1
    cqzt2
    `
    , func: async (user_params, outputs, neig_kp = {}) => {
        const neig = Object.assign({ neig_kp }, neig_kp)
        outputs.outputText = await (async () => {
            return JSON.stringify(bsVnwm(user_params).map(rn1 => wrm_zt_rs[rn1]), null, 2)
        })().catch(err => { throw err })
    }

}]