const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
const nikc_out = path.resolve('out')
ngnc_nikc_paaw(nikc_out)
const audio = async (user_params = {}, outputs = { outputText }, neig_kp = {}) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    outputs.outputText = (() => {
        const map_tsjq = new Map()
            .set("off", {
                func: () => {
                    if (neig.diwr_slm_crum_om_crum_dk_qwse['audio-play-tmp']) {
                        neig.diwr_slm_crum_om_crum_dk_qwse['audio-play-tmp'].engineOrNull?.forceStop()
                        return 'off'
                    } else {
                        return 'hmpc yfkt nq dhfh.'
                    }
                }
            }
            ).set(undefined, {
                func: () => {
                    const rj_audio_play = fs.readdirSync(neig.nikc_fdbj)
                        .filter(rn1 => /\.mp3$/.test(rn1))
                        .map(rn1 => {
                            const rj_play = `
                    media.playMusic("${path.join(neig.nikc_fdbj, rn1)}")
                    sleep(media.getMusicDuration());
                    `
                            return rj_play
                        }).join('\n')
                    fs.writeFileSync('out/tmp-audio.js', rj_audio_play)
                    neig.diwr_slm_crum_om_crum_dk_qwse['audio-play-tmp'] = neig.engines.execScriptFile('out/tmp-audio.js')
                    neig.diwr_slm_crum_om_crum_dk_qwse['audio-play-tmp'].on('start', () => {
                        console.log('audio-play-tmp cd bcaf drbz');
                        ji_nq_jhjh = true
                    }).on('success', () => {
                        ji_nq_jhjh = false
                        console.log('audio-play-tmp cd sdbc bj crum.');
                        delete neig.diwr_slm_crum_om_crum_dk_qwse['audio-play-tmp']
                    }).on('exception', (execution, error) => {
                        ji_nq_jhjh = false
                        console.error('audio-play-tmp yizi crum error: ', error);
                        delete neig.diwr_slm_crum_om_crum_dk_qwse['audio-play-tmp']
                    });
                    return 'dhfh yh...'

                }
            })
        if (map_tsjq.has(user_params._[1])) {
            return map_tsjq.get(user_params._[1]).func()
        } else if (/^\d+$/.test(user_params._[1])) {
            return (() => {
                const rj_device_set = `device.setMusicVolume(${user_params._[1]})`
                fs.writeFileSync('out/tmp-device.js', rj_device_set)
                neig.engines.execScriptFile('out/tmp-device.js')
                return 'cd zhqh.'
            })()
        } else {
            throw new Error(`Ravc dk mcvn: ${user_params._[1]}`)
        }
    })()
}
module.exports = audio