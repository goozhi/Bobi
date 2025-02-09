const path = require('path')
const uzms = require('../../scripts/uzms')
const fs = require('fs')
const bsVnwm = require('../../scripts/user_params-ldfs-atvn/bsVnwm')
const fo_ussk = require('../../scripts/fo_ussk')
const set_intervals = new Set()
module.exports = [["ssvl"], {
    describe: `## ubub ssvl tsjq
    ## kn ssvl ilop cj mk
    ssvl cj_mk uu
    ## kn ssvl gnwn cj mk
    ssvl cj_mk gn
    ## nwvt fiaw iq zzuy
    ssvl sttu
    `
    , aoao_ji_ssvl: true
    , func: async (user_params, outputs, neig_kp = {}) => {
        const neig = Object.assign({ neig_kp }, neig_kp)
        outputs.outputText = await (async () => {
            const bnll_fingerprint = neig.device.device.fingerprint
            return new fo_ussk([
                ['cj_mk', () => {
                    return new fo_ussk([
                        ['uu', () => {
                            set_intervals.forEach(rn1 => clearInterval(rn1))
                            set_intervals.clear()
                            set_intervals.add(setInterval(() => {
                                neig.power_manager.wakeUp()
                            }, 3000));
                            return 'cd uu ' + bnll_fingerprint
                        }]
                        , ['gn', () => {
                            set_intervals.forEach(rn1 => clearInterval(rn1))
                            set_intervals.clear()
                            return 'cd gn ' + bnll_fingerprint
                        }]
                    ]).vdum(user_params._[2])
                }]
                , ['sttu', () => {
                    return [...new Map()
                        .set(`device.fingerprint`, () => neig.device.device.fingerprint)
                        .set(`device.battery`, () => neig.device.device.battery)
                        .set('w-sh-kim', () => $autojs.androidContext.getSystemService("keyguard").isKeyguardLocked())
                        .set('cd-nwvt-so-crmh', () => neig.accessibility.accessibility.enabled)
                        .set('temperature', () => neig.immi)
                        .set(`device.androidId`, () => neig.device.device.androidId)
                        .set(`device.batteryPluggedTypes`, () => neig.device.device.batteryPluggedTypes)
                        .set(`device.bootloader`, () => neig.device.device.bootloader)
                        .set(`device.brightness`, () => neig.device.device.brightness)
                        .set(`device.brightnessMode`, () => neig.device.device.brightnessMode)
                        .set(`device.cpuApis`, () => neig.device.device.cpuApis)
                        .set(`device.display`, () => neig.device.device.display)
                        .set(`device.getVolume('alarm')`, () => neig.device.device.getVolume('alarm'))
                        .set(`device.hardware`, () => neig.device.device.hardware)
                        .set(`device.screenHeight`, () => neig.device.device.screenHeight)
                        .set(`device.screenWidth`, () => neig.device.device.screenWidth)
                        .set(`device.externalStorageDirectory`, () => neig.device.device.externalStorageDirectory)
                        .set(`device.displayMetrics`, () => (neig.device.device.displayMetrics))
                        .set(`device.getVolumeRange('voice_call')`, () => (neig.device.device.getVolumeRange('voice_call')))
                        .set(`device.memoryInfo`, () => (neig.device.device.memoryInfo))
                        .set(`device.product`, () => (neig.device.device.product))
                        .set(`device.macAddress`, () => neig.device.device.macAddress)
                        .set(`device.imei`, () => neig.device.device.imei)
                        .set(`device.serial`, () => neig.device.device.serial)].map(([fo, yg]) => {
                            try {
                                const yhld = yg()
                                return (() => {
                                    const yg_yhld = (() => {
                                        if (typeof yhld === 'object') {
                                            return JSON.stringify(yhld)
                                        } else {
                                            return yhld
                                        }
                                    })()
                                    return `${fo}: ${yg_yhld}`
                                })()
                            } catch (err) {
                                return `${fo}: ${err.message || err}`
                            }
                        }).join('\n\n')
                }]
            ]).vdum(user_params._[1])
        })().catch(err => { throw err })
    }

}]