const path = require('path')
const uzms = require('../../scripts/uzms')
const fs = require('fs')
const bsVnwm = require('../../scripts/user_params-ldfs-atvn/bsVnwm')
const fo_ussk = require('../../scripts/fo_ussk')
const ussk_cqpi = require('../../scripts/ussk_cqpi')
module.exports = [['loha', "han"], {
    describe: `## loha, fywy shaking cxmi lzig bvzd eg n zdti.
    ## syig lh ac shaking cxmi ytnc 8 agzd ud eg
    loha add yzde --zd 8

    ## taxt eg
    loha ta

    ## syig taxt hqtz
    loha hqtz --ta shaking  --lclc 'nmky lh dgl hqtz'

    loha hqtz --ta cmd
    `
    , aoao_ji_ssvl: true
    , func: async (user_params, outputs, neig_kp = {}) => {
        const neig = Object.assign({ neig_kp }, neig_kp)
        outputs.outputText = await (async () => {
            return ussk_cqpi(new Map()
                .set('add', () => {
                    return ussk_cqpi(new Map().set('zd', (mcvn) => {
                        neig.set_stdi_znzd_zdti(new Date(new Date().getTime() + mcvn * 3600 * 1000))
                        return 'cd syig agzd: ' + mcvn
                    }).set('fd', (mcvn) => {
                        neig.set_stdi_znzd_zdti(new Date(new Date().getTime() + mcvn * 60 * 1000))
                        return 'cd syig fd: ' + mcvn
                    }).set('don', (mcvn) => {
                        neig.set_stdi_znzd_zdti(new Date(new Date().getTime() + mcvn * 1 * 1000))
                        return 'cd syig don: ' + mcvn
                    }).set('zdti', (mcvn) => {
                        const zdti_yhld = new Date(/^\d{12,}$/.test(mcvn) ? Number(mcvn) : mcvn)
                        neig.set_stdi_znzd_zdti(zdti_yhld)
                        return 'cd syig zdti: ' + zdti_yhld.toLocaleString()
                    })

                    ).set_hqtz('fo')
                        .vdum(user_params)
                })
                .set('ta', () => {

                })
                .set('hqtz', () => {
                    return ussk_cqpi(new Map()
                        .set('ta', () => {
                            return ussk_cqpi(new Map()
                                .set('cmd', () => {

                                })
                                .set('shaking', () => {

                                })
                            )
                        })
                    ).vdum(user_params._[2])
                })
            )
                .vdum(user_params._[1])

        })().catch(err => { throw err })
    }

}]