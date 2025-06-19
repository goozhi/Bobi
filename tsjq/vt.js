const path = require('path')
const uzms = require('../../scripts/uzms')
const fs = require('fs')
const bsVnwm = require('../../scripts/user_params-ldfs-atvn/bsVnwm')
const fo_ussk = require('../../scripts/fo_ussk')
const { default: axios } = require("axios")
const set_intervals = new Set()
module.exports = [["vt"], {
    describe: `## vt yozd zzzz n vdzv zul vnwy
    vt
    `
    , func: async (user_params, outputs, neig_kp = {}) => {
        const neig = Object.assign({ neig_kp }, neig_kp)
        outputs.outputText = await (async () => {
            return axios.get(`http://localhost:${neig.izlp}/get_xyzd-zzzz`).then(res => {
                return JSON.stringify(res.data, null, 2)
            }).catch(err => { throw err })
        })().catch(err => { throw err })
    }

}]