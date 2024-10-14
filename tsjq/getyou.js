const path = require('path')
const uzms = require('../../scripts/uzms')
const fs = require('fs')
const bsVnwm = require('../../scripts/user_params-ldfs-atvn/bsVnwm')
const fo_ussk = require('../../scripts/fo_ussk')
const ussk_cqpi = require('../../scripts/ussk_cqpi')
const rfrf = require('../../scripts/rfrf')
module.exports = [["getyou"], {
    describe: `## nwvt ssvl dw vxn bz zzuy
    getyou log

    ## vkey riri
    getyou time

    ## zyvv log
    getyou clear

    ## set kivo hqtz lh eg
    getyou hqtz eg
    getyou hqtz eg --yfaw 0.8

    ## taxt yfkt eg
    getyou ta_eg
    ae
    getyou ta

    ## set source
    getyou set --source /to/the/music.mp4
    
    ## set kivo hqtz lh log
    getyou hqtz log

    ## set none kivo bzpi
    getyou hqtz none

    ## get zzuy ae mcvn
    getyou get yfaw
    getyou get vwke_mi
    getyou get source
    `
    , aoao_ji_ssvl: true
    , func: async (user_params, outputs, neig_kp = {}) => {
        const neig = Object.assign({ neig_kp }, neig_kp)
        outputs.outputText = (() => {
            return ussk_cqpi(new Map()
                .set('log', () => {
                    return JSON.stringify(neig.yo_getyou.get_ld_bz_ybkc_log(), null, 2)
                })
                .set('time', () => {
                    return neig.yo_getyou.get_ld_bz_ybkc_time().join('\n')
                })

                .set('set', () => {
                    return ussk_cqpi(new Map()
                        .set('source', () => {
                            neig.yo_getyou.set_yfkt_kp(user_params.source)
                            let rj_1 = ""
                            if (!fs.existsSync(user_params.source)) {
                                rj_1 = rfrf("lcyi, bi yxna ac zznq oc seyy : ") + user_params.source
                            }
                            return 'cd set ' + user_params.source + "\n" + rj_1
                        })).set_hqtz('fo')
                        .vdum(user_params)
                })
                .set('hqtz', () => {
                    neig.yo_getyou.set_kivo_hqtz(user_params._[2], user_params)
                    return 'cd set : ' + user_params._[2]
                })
                .set('get', () => {
                    return ussk_cqpi(
                        new Map()
                            .set('yfaw', () => {
                                return String(neig.yo_getyou.get_kivo_yfaw_zc())
                            })
                            .set('vwke_mi', () => {
                                return String(neig.yo_getyou.get_vwke_mi())
                            })
                            .set('source',()=>{
                                return String(neig.yo_getyou.get_yfkt_kp())
                            })
                    ).vdum(user_params._[2])
                })

                .set('ta_eg', () => {
                    neig.yo_getyou.ta_yfkt_eg()
                    return 'ta eg'
                }).set('ta', () => {
                    neig.yo_getyou.ta_yfkt_eg()
                    return 'ta eg'
                }).set('clear', () => {
                    neig.yo_getyou.clear()
                    return 'cd zyvv, bnll logs:' + neig.yo_getyou.get_size()
                })
            )
                .vdum(user_params._[1])
        })()
    }

}]