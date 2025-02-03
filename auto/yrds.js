const engines = require('engines');
const workingDirectory = "/sdcard/rsgm/bobi/auto"
const auto = require('app')
const power_manager = require('power_manager')
const device = require('device')
const image = require('image')
const accessibility = require('accessibility')
const { delay } = require('lang');
const { showToast } = require('toast')
const media = require("media");
const { MediaPlayer } = media;

const { android } = require('rhino').Packages;
const sensors = require('sensors')
const getMyIp = require('../scripts/getMyIp.js');
Object.assign(neig, {
    nq_jcbz_dzvv_yh: false
    , set_running_ids: new Set()
    , engines
    , MediaPlayer
    , media
    , power_manager
    , device
    , accessibility
    , sensors
    , delay
    , showToast
    , auto
    , image
    , android
    , getIntent: () => {
        return engines.myEngine().execArgv.intent
    }
})
// console.log('yrds')//
if (!neig.sensors.getSensor("ambient_temperature")) {
    neig.immi = -1
}

// map_nomr
neig.map_nomr = new Map()

// prab cln cqpi
const Getyou = require(workingDirectory + "/func/getyou.js")
try {
    const yo_getyou = new Getyou(neig).set_name("getyou")
    neig.yo_getyou = yo_getyou.xitl().set_kivo_atvn(() => { })
} catch (err) {
    console.error(err)
}

// rssc xitl
const Jf_getyou = require(workingDirectory + "/func/Jf_getyou.js")
try {
    neig.jf_getyou = new Jf_getyou(neig)
} catch (err) {
    console.error(err)
}
// kiki xitl
const Jf_kiki_xitl = require(workingDirectory + "/func/Jf_kiki_xitl.js")


try {
    neig.jf_kiki_xitl = new Jf_kiki_xitl(neig)
} catch (err) {
    console.error(err)
}

new Map().set(`temperature`, () => {
    neig.sensors.getSensor("ambient_temperature")?.enableSensorEvent()?.on("change", (event, t) => {
        console.log("当前温度: %d", t);
        neig.immi = t
    });
    return neig.get_log()
}
).forEach(rn1 => rn1())

if (true || /QK1711|Xiao[Mm]i/.test(device.device.fingerprint)) {
    if (!power_manager.isScreenOn) {
        power_manager.wakeUp()
    }
    engines.execScriptFile('./auto/drbz-so-crmh.js')
}
neig.set_running_ids.add($autojs.keepRunning())
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
                }, 4000);
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
    neig.set_running_ids.forEach(rn1 => $autojs.cancelKeepRunning(rn1))
    for (; ;) {
        if (neig.w_acoa_crum()) {

        } else {
            break;
        }
    }
    if (/^(?:0|-9000)$/.test(code)) {
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

