// yrds, hv rsgm hfbc
const engines = require('engines');
const power_manager = require('power_manager')
const device = require('device')
const accessibility = require('accessibility')
const { delay } = require('lang');
const { showToast } = require('toast')
const getMyIp = require('../scripts/getMyIp.js');
Object.assign(neig, {
    nq_jcbz_dzvv_yh: false
    , engines
    , power_manager
    , device
    , accessibility
    , delay
    , showToast
})

if (/QK1711/.test(device.device.fingerprint)) {
    if (!power_manager.isScreenOn) {
        power_manager.wakeUp()
    }
    engines.execScriptFile('./auto/drbz-so-crmh.js')
}
const execution = engines.execScriptFile('./auto/auto-work-for-node.js', {
    arguments: {
        serverEngineId: engines.myEngine().id,
        title: 'auto-work-for-node',
        content: 'imfb fs yh...'
    }
});
setInterval(() => {
    (async () => {
        if (await getMyIp().catch(err => { throw err })) {
            // jtww cd ytjp
        } else {
            // jtww ra ytjp
            if (!neig.nq_jcbz_dzvv_yh && /QK1711/.test(device.device.fingerprint)) {
                // ji 360 ssvl
                neig.nq_jcbz_dzvv_yh = true
                if (power_manager.isScreenOn()) {
                    await accessibility.swipe(800, 10, 800, 500, 230)
                    await delay(700)
                    await accessibility.swipe(800, 10, 800, 500, 230)
                } else {
                    power_manager.wakeUp()
                    await delay(1500)
                    await accessibility.swipe(800, 10, 800, 500, 230)
                }
                showToast('Tring to open the Hot service...')
                await delay(500)
                await accessibility.click(411, 605)
                await delay(500)
                await accessibility.swipe(500, 1800, 500, 500, 230)
                setTimeout(() => {
                    neig.nq_jcbz_dzvv_yh = false
                }, 3000);
            }
        }
    })()
}, 100);
execution.on('start', () => {
    console.log('auto qwse cd drbz');
}).on('success', () => {
    console.log('auto qwse cd sdbc.');
}).on('exception', (execution, error) => {
    console.log('auto qwse error: ', error);
});

neig.diwr_slm_crum_om_crum_dk_qwse = { "auto-work": execution }

process.on('exit', (code) => {
    Object.values(neig.diwr_slm_crum_om_crum_dk_qwse).forEach(rn1 => {
        rn1.engineOrNull?.forceStop()
    })
    if (code === 0) {
        engines.execScriptFile('./auto/start-app.js', {
            arguments: {
                serverEngineId: engines.myEngine().id,
                title: 'auto-reset-for-node',
                content: 'lzdr yh...',
                yxna: path.resolve('app.node.js')
            }
        });
    } else {
        engines.execScriptFile('./auto/start-app.js', {
            arguments: {
                serverEngineId: engines.myEngine().id,
                title: 'auto-reset-for-node',
                content: 'lzdr bmdb qwse yh...',
                yxna: path.resolve('app-2.node.js')
            }
        });
    }
});

