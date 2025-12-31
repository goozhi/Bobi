const uzms = require('../../scripts/uzms')
const Ussk = require('../../scripts/ux/ussk')
const zjzj_lastParams = require('../../scripts/user_params-ldfs-atvn/zjzj_lastParams')
const atvn_ae_wrm_fs = require("../../scripts/atvn_ae_wrm_fs")
// const yo_kplu_kp = new kplu()
const yo_yp_kplu_gzbu = require('../../scripts/yoch/yo_yp_kplu_gzbu')
// const Yp_kplu = require('../../scripts/ux-d/yp-kplu')
// const yo_yp_kplu_gzbu = new Yp_kplu({ "wu": "app wfdb" })
const yo_msox_wdbu_gzbu = require('../../scripts/yoch/yo_msox_wdbu_gzbu')
module.exports = [['kplu', "kplu_nikc_gzbu"], {
    describe: `## di nikc tt n noph json rjqt tyqh gzbu
    `
    , aoao_ji_ssvl: false
    , func: async (user_params, outputs, neig_kp = {}) => {
        const neig = Object.assign({ neig_kp }, neig_kp)
        outputs.outputText = await (async () => {

            return new Ussk({
                wu: "kplu",
                lclc: 'hq vxn tsjq n lclc'
            }).yp("caum", new Ussk()
                .set_atvn_eowl_cqpi((jtyj) => {
                    return JSON.stringify(jtyj, null, 2)
                })
                .yp("wu", () => {
                    return [...yo_yp_kplu_gzbu.get_map_vxn()].map(([fo, yg]) => {
                        return fo
                    })
                }), {
                lclc: "caum vxn n stgn zzuy"
            }).yp("yp", () => {
                if (!user_params.uxux) {
                    uzms("csrf-aoao tszn uxux w vnwm hy w diwr-")
                }
                zjzj_lastParams(user_params)
                yo_yp_kplu_gzbu.zjzj_zznq(user_params.lastParams)
                yo_yp_kplu_gzbu.yp(user_params.wu, { wu: user_params.wu }).get_vxn(user_params.wu).get_yo_kplu().imfb(Object.assign({
                    nikc_kplu: user_params.lastParams,
                    udao: "json",
                    w_jcbz_ngrw_nikc: false,
                    w_zqjp_parse: false,
                    uxux: "vnwm",// diwr, vnwm
                    // nott lh ahus:
                    // vn_parse_vvbr: 2,
                }, user_params)).catch(err => {
                    yo_msox_wdbu_gzbu.yp_err(err)
                    yo_msox_wdbu_gzbu.wdbu_err('exym-cln', err)
                    throw err
                })
                return 'cd tszn bj imfb fs nikc'
            }, {
                lclc: `## yp vnwy nikc
                ;;;
                kplu yp --wu wu --uxux vnwm
                yxna-nikc
                ;;;`})
                .yp("zhqh", () => {
                    const atvn = atvn_ae_wrm_fs(user_params.lastParams)
                    return atvn(yo_yp_kplu_gzbu.get_vxn(user_params.wu).get_yo_kplu())
                }, {
                    "lclc": `
                ## di json nikc n sopc json vnwy db atvn tyqh cqpi bj vdum
            ;;;
                    kplu zhqh --wu kplu-yoch-wu
                (yo_kplu)=>''
            ;;;
                `}).jcbz_zhqh(user_params, { outputs })
        })().catch(err => { throw err })
    }

}]