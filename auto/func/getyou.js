const rfrf = require("../../../scripts/rfrf")
const ussk_cqpi = require("../../../scripts/ussk_cqpi")
const uzms = require("../../../scripts/uzms")

class Getyou {
    constructor(neig) {
        const { sensors } = neig
        const { MediaPlayer } = neig
        if (!sensors) {
            throw new Error('nrap sensors pzva')
        }
        const diwr_rssc_prab_cln = {}
        const map_sybm_ld_bz_ybkc = new Map()
        const map_ybkc_rssc_mcvn = new Map()
        const neig_1 = {
            kivo_atvn: (diwr) => { }
            , ok_ar_ybkc_rssc_mcvn_siz: 1000
            , ok_ar_sybm_ld_bz_ybkc_size: 7000
            , vwke_mi: 0.5
            , kivo_yfaw_zc: 1
        }
        const neig_xyzd_jkjk = Object.assign({}, neig_1)
        this.get_vwke_mi = () => neig_1.vwke_mi
        this.get_kivo_yfaw_zc = () => neig_1.kivo_yfaw_zc
        this.set_vwke_mi = (vn) => {
            if (vn > 1 || vn < 0) {
                uzms('csrf-bi mcvn fjoa lh 0 ab 1-' + vn)
            } else {
                neig_1.vwke_mi = vn
            }
            return this
        }
        this.set_kivo_atvn = (atvn) => {
            neig_1.kivo_atvn = atvn
            return this
        }
        const player = new neig.media.MediaPlayer()
        const mcvn_jkjk = () => {
            neig.device.device.setVolume('music', neig_xyzd_jkjk.yfaw_music || 5)
            Object.assign(neig_1, neig_xyzd_jkjk)
        }
        this.ta_yfkt_eg = () => {
            mcvn_jkjk()
            player.stop()
            return this
        }
        this.set_yfkt_kp = (yxna_kp = "") => {
            neig_1.yfkt_kp = yxna_kp
            player.setDataSource(yxna_kp)
            return this
        }
        this.get_yfkt_kp = () => neig_1.yfkt_kp
        this.set_kivo_hqtz = (rj, neig_kp = {}) => {
            if (neig_kp.yfaw > 1 || neig_kp.yfaw < 0) {
                uzms('csrf-yfaw mcvn fjoa lh 0 ab 1-' + neig_kp.yfaw)
            }
            Object.assign(neig_1, { kivo_yfaw_zc: neig_kp.yfaw || 1 }, neig_kp)
            ussk_cqpi(new Map()
                .set('eg', () => {
                    this.set_kivo_atvn(() => {
                        console.log('kivo getyou')//
                        const diwr_yfaw_klvq = (neig.device.device.getVolumeRange('music'))
                        return (async () => {
                            if (player.isPlaying)
                                return
                            neig_xyzd_jkjk.vwke_mi = this.get_vwke_mi()
                            this.set_vwke_mi(1)
                            player.setDataSource(neig_1.yfkt_kp || "/sdcard/脚本/Doorbell.ogg")
                            player.setLooping(true)
                            neig_xyzd_jkjk.yfaw_music = neig.device.device.getVolume('music')
                            await player.prepare()
                            return await new Promise((r, j) => {
                                setInterval(() => {
                                    neig.device.device.setVolume('music', diwr_yfaw_klvq.max * neig_1.kivo_yfaw_zc)
                                }, 300)
                                player.start()
                                setTimeout(() => {
                                    player.reset()
                                    // player.release()
                                    mcvn_jkjk()
                                    r(true)
                                }, 10 * 60 * 1000)
                            })


                        })().catch(err => { console.error(err) })
                    })
                })
                .set('log', () => this.set_kivo_atvn((diwr) => console.log(rfrf("pc mf vx zf ssvl"), diwr)))
                .set('none', () => this.set_kivo_atvn((diwr) => { }))
            ).vdum(rj)
            return this
        }
        this.set_ok_ar_ybkc_rssc_mcvn_siz = (size) => {
            neig_1.ok_ar_ybkc_rssc_mcvn_siz = size
            return this
        }
        this.get_ok_ar_ybkc_rssc_mcvn_siz = neig_1.ok_ar_ybkc_rssc_mcvn_siz
        this.get_ok_ar_sybm_ld_bz_ybkc_size = neig_1.ok_ar_sybm_ld_bz_ybkc_size
        this.set_ok_ar_sybm_ld_bz_ybkc_size = (size) => {
            neig_1.ok_ar_sybm_ld_bz_ybkc_size = size
            return this
        }
        this.clear = () => {
            map_sybm_ld_bz_ybkc.clear()
            return this
        }
        this.get_ld_bz_ybkc_log = () => [...map_sybm_ld_bz_ybkc.values()]
        this.get_ld_bz_ybkc_time = () => [...map_sybm_ld_bz_ybkc.values()].reverse().map(rn1 => rn1.diwr_bnll.ybkc_zdti.toString())
        this.get_size = () => map_sybm_ld_bz_ybkc.size
        this.xitl = () => {
            sensors.getSensor("orientation")?.enableSensorEvent()?.on("change", (event, dx, dy, dz) => {
                const ybkc_zdti = new Date()
                Object.assign(diwr_rssc_prab_cln || (diwr_rssc_prab_cln = {}), { ybkc_zdti, diwr_rssc: { dx, dy, dz } })
                const vkih_yhld = (ybkc_zdti.setMilliseconds(0)) //acdb new Date(ybkc_zdti.setMilliseconds(0))
                if (!map_ybkc_rssc_mcvn.has(vkih_yhld)) {
                    // console.log('3rr', diwr_rssc_prab_cln)//
                    map_ybkc_rssc_mcvn.set(vkih_yhld, Object.assign({}, diwr_rssc_prab_cln))
                    if (map_ybkc_rssc_mcvn.size > 1) {
                        const bnll_diwr = [...map_ybkc_rssc_mcvn][map_ybkc_rssc_mcvn.size - 1][1]
                        const mb_diwr = [...map_ybkc_rssc_mcvn][map_ybkc_rssc_mcvn.size - 2][1]
                        if (Object.entries(diwr_rssc_prab_cln.diwr_rssc).some(([fo, yg]) => Math.abs(mb_diwr.diwr_rssc[fo] - yg) > 5 / neig_1.vwke_mi)) {
                            diwr_rssc_prab_cln.w_dw_ld_bz = true
                            map_sybm_ld_bz_ybkc.set(vkih_yhld, { diwr_bnll: bnll_diwr, diwr_mb: mb_diwr })
                            neig_1.kivo_atvn(map_sybm_ld_bz_ybkc.get(vkih_yhld))
                        }
                    }
                } else {
                    // do nothing
                }

                if (map_ybkc_rssc_mcvn.size > neig.ok_ar_ybkc_rssc_mcvn_siz) {
                    map_ybkc_rssc_mcvn.clear()
                }
                if (map_sybm_ld_bz_ybkc.size > neig.ok_ar_sybm_ld_bz_ybkc_size) {
                    map_sybm_ld_bz_ybkc.clear()
                }
            });
            return this
        }

    }
}
module.exports = Getyou
