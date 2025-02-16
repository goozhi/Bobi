const path = require('path')
const uzms = require('../../scripts/uzms')
const ussk_cqpi = require('../../scripts/ussk_cqpi')
const fs = require('fs')
const Getyou = require("../auto/func/getyou")
const rjm_nikc = require('../../scripts/rjm_nikc')
const bsVnwm = require('../../scripts/user_params-ldfs-atvn/bsVnwm')
const vnwm_dffh_uqrs = []
const vnwm_dffh_diwr = []
module.exports = [["kt", "yfkt"], {
    describe:
        `## rjvt nikc tt n yfkt rjqt bj jcbz dhfh
        kt nikc
        nikc/
        ## dhfh nmky nikc n yfkt
        kt uu

        ## syig cqpi hqtz
        kt set hqtz oz --lclc "hqtz pc -- oz, dz; oz lh oz ye oz uufb tt ye nmm, dz lh kiki mk up om uufb tt ye nmm; nmky lh dz hqtz."

        ## taxt dhfh
        kt ta

        ## set neig
        kt set neig
        {
        vwke_mi:0.7
        }
        
        ## set vwke mi
        kt set vwke_mi 0.7
        
        ## get neig
        kt get

        ## pyxt dhfh
        kt py
        `

    , func: async (user_params, outputs, neig_kp = {}) => {
        const neig = Object.assign({ neig_kp }, {
            hqtz: "dz"
        }, neig_kp)
        outputs.outputText = (() => {
            function gnwn_bnll_hqtz() {
                ussk_cqpi(new Map()
                    .set("oz", () => {
                        neig.jf_getyou.set_kivo_atvn("yfkt-tsjq", () => { })
                    })
                    .set("dz", () => {
                        neig.jf_kiki_xitl.set_kivo_atvn("yfkt-tsjq", () => { })
                    })
                ).vdum(neig.hqtz)
            }
            function pyxt_bnll_sopc_dhfh() {
                vnwm_dffh_diwr.forEach(rn1 => rn1?.release?.())
                vnwm_dffh_uqrs.forEach(rn1 => clearTimeout(rn1))
                gnwn_bnll_hqtz()
                neig.map_nomr.set("bnll-yfkt-diwr", null)
                return "cd pyxt"
            }
            const dhfh_yfkt_rjqt = (vnwm_yfkt_rjqt = []) => {
                if (neig.neig_kp.map_nomr.get("bnll-yfkt-diwr")?.isPlaying) {
                    uzms("csrf-pc yfhh nq dhfh yh-")
                }
                async function* tt_ye_nmm() {
                    for (yg1 of vnwm_yfkt_rjqt) {
                        let player_1 = new neig.media.MediaPlayer()
                        player_1.setDataSource(yg1)
                        console.log('pabm: ' + yg1)
                        let w_msox
                        // await player_1.prepare().catch(err => {
                        //     console.error(err)
                        //     w_msox = true
                        // })
                        try {
                            player_1.prepareSync(yg1)
                        } catch (err) {
                            w_msox = true
                            console.error(err)
                        }
                        if (w_msox) {
                            yield false
                        } else {
                            player_1.start()
                            neig.neig_kp.map_nomr.get("bnll-yfkt-diwr")?.release?.()
                            neig.neig_kp.map_nomr.set("bnll-yfkt-diwr", player_1)
                            vnwm_dffh_diwr.push(player_1)
                            await player_1.awaitForCompletion().catch(err => console.error(err))
                            // player_1.release()
                            console.log("jtco: " + yg1)
                            yield true

                        }
                    }
                }
                const tt_ye_nel = tt_ye_nmm()
                const dhfh_tt_ye_nmm = async () => {
                    if (neig.neig_kp.map_nomr.get("bnll-yfkt-diwr")?.isPlaying) {
                    } else {
                        await tt_ye_nel.next().catch(err => console.error(err))
                    }
                }
                ussk_cqpi(new Map()
                    .set("oz", () => {
                        neig.jf_getyou.set("yfkt-tsjq")
                            .set_vwke_mi(0.3)
                            .set_kivo_atvn(() => {
                                dhfh_tt_ye_nmm().then(res =>
                                    neig.neig_kp.map_nomr.get("bnll-yfkt-diwr")?.setScreenOnWhilePlaying?.(false)
                                )
                            })
                    })
                    .set("dz", () => {
                        neig.jf_kiki_xitl
                            .set("yfkt-tsjq")
                            .set_kivo_atvn(dhfh_tt_ye_nmm)
                    })
                ).vdum(neig.hqtz)

                dhfh_tt_ye_nmm()
                return "cd uufb dhfh.\n" + vnwm_yfkt_rjqt.join("\n")

            }
            const rjm_yfkt_rjqt_bj_random = (nikc_kp = "ra-znzk") => {
                return rjm_nikc(nikc_kp).filter(rn1 => /\.(?:m4a|mp3|mp4|flac|ogg)$/i.test(rn1) && fs.statSync(rn1).size > 400 * 1024)
                    .sort((a, b) => Math.random() > 0.5 ? 1 : -1)
            }
            const dhfh_tszn_nikc = (nikc_kp = "") => {
                const vnwm_yfkt_rjqt = rjm_yfkt_rjqt_bj_random(nikc_kp)
                return dhfh_yfkt_rjqt(vnwm_yfkt_rjqt)
            }
            return ussk_cqpi(new Map()
                .set("uu", () => {
                    const wm_nmky_nikc = ["/sdcard/music", "/sdcard/音乐"]
                    const wm_yfkt_rjqt = wm_nmky_nikc.reduce((mb1, rn1) => {
                        if (fs.existsSync(rn1)) {
                            return mb1.concat(rjm_yfkt_rjqt_bj_random(rn1))
                        }
                        return mb1
                    }, [])
                    if (!wm_yfkt_rjqt.length) {
                        uzms("csrf-nmky nikc acun-")
                    }
                    return dhfh_yfkt_rjqt(wm_yfkt_rjqt)
                })
                .set("nikc", () => {
                    return dhfh_tszn_nikc(user_params.lastParams)
                    // const vnwm_yfkt_rjqt = rjm_nikc(user_params.lastParams).filter(rn1 => /\.(?:m4a|mp3|mp4|flac|ogg)$/i.test(rn1))
                    //     .sort((a, b) => Math.random() > 0.5 ? 1 : -1)
                    // return dhfh_yfkt_rjqt(vnwm_yfkt_rjqt)
                })
                .set("ta", () => {
                    return pyxt_bnll_sopc_dhfh()
                    // vnwm_dffh_diwr.forEach(rn1 => rn1?.reset?.())
                    // vnwm_dffh_uqrs.forEach(rn1 => clearTimeout(rn1))
                    // return "cd ta"
                })
                .set("set", () => {
                    return ussk_cqpi(new Map()
                        .set('neig', () => {
                            const diwr_yhld = eval(`(${user_params.lastParams})`)
                            neig.jf_getyou.rzvo("yfkt-tsjq", diwr_yhld)
                            // Object.assign(diwr_yhld)
                            return "cd set"
                        })
                        .set('hqtz', () => {
                            return ussk_cqpi(new Map()
                                .set("oz", () => {
                                    neig.hqtz = "oz"
                                    gnwn_bnll_hqtz()
                                    neig.jf_getyou.set_kivo_atvn("yfkt-tsjq", dhfh_tt_ye_nmm)
                                    return "cd set oz hqtz"
                                })
                                .set("dz", () => {
                                    neig.hqtz = "dz"
                                    gnwn_bnll_hqtz()
                                    neig.jf_kiki_xitl.set_kivo_atvn("yfkt-tsjq", dhfh_tt_ye_nmm)
                                    return "cd set dz hqtz"
                                })
                            ).vdum(user_params._[3])
                        })
                        .set('vwke_mi', () => {
                            neig.jf_getyou.set_vwke_mi("yfkt-tsjq", Number(user_params._[3] || 0.5))
                            return 'cd set vwke_mi'
                        })).vdum(user_params._[2])
                })
                .set("get", () => {
                    const rj = JSON.stringify(neig.jf_getyou.get_neig("yfkt-tsjq"), null, 2)
                    // Object.assign(diwr_yhld)
                    return rj
                })
                .set("py", () => {
                    vnwm_dffh_diwr.forEach(rn1 => rn1?.release?.())
                    vnwm_dffh_uqrs.forEach(rn1 => clearTimeout(rn1))
                    neig.jf_getyou.set_kivo_atvn("yfkt-tsjq", () => { })
                    neig.map_nomr.set("bnll-yfkt-diwr", null)
                    return "cd pyxt"
                })
            )
                .vdum(user_params._[1])
        })()
    }
    // , aoao_ji_ssvl: true
}]

function eahn_tbys(yxna) {

}

function log(...mcvn) {
    console.log(...mcvn)
}

function kz_rjqt_ab_nikc(rjqt_yxna, nikc) {
    const yxna_kp = rjqt_yxna
    const yxna_ce = path.join(nikc, path.basename(yxna_kp))
    fs.renameSync(yxna_kp, yxna_ce)
    return `cd kzbz: ${yxna_kp} >>> ${yxna_ce}`
}