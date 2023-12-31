// 打印引擎启动参数
console.log($engines.myEngine().execArgv);

let args = $engines.myEngine().execArgv;
// 从参数中取出Rhino引擎的ID
let serverEngineId = args.serverEngineId;
// 根据ID找出父引擎
let serverEngine = engines.all().find(e => {
    return e.id === serverEngineId
});

let ji_cd_zhqh_jhjh_xiub
$events.on('command', zhqh_jhjh);

let f1 = "/storage/emulated/0/脚本/log-autojs.json"
let f2 = "/storage/emulated/0/脚本/log-nodejs.json"

if (!files.exists(f1)) {
    files.createWithDirs(f1);
    files.createWithDirs(f2);
    files.write(f1, "{}")
    files.write(f2, "{}")
}
var f2_c;
let vn_1 = 0;
let startTime = new Date().getTime()
toastLog('start:' + startTime)
while (true) {
    let f1_c = JSON.parse(files.read(f1));
    try {
        f2_c = JSON.parse(files.read(f2))
        if (f2_c.autojs_todo) {
            f1_c.doing = true
            autojs_todo = f2_c.autojs_todo
            log("todo: " + f2_c.autojs_todo)
            f2_c.autojs_todo = false
            files.write(f1, JSON.stringify(f1_c, null, 2))
            files.write(f2, JSON.stringify(f2_c, null, 2))
            f1_c.result = (() => {
                if (autojs_todo === 'drbz-360-jhjh-xiub') {
                    zhqh_jhjh({ message: 'drbz-360-jhjh-xiub' })
                } else if (autojs_todo === 'gnwn-360-jhjh-xiub') {
                    gnwn_jhjh()
                    ji_cd_zhqh_jhjh_xiub = false
                } else {
                    try {
                        return eval(autojs_todo)()
                    } catch (err) {
                        return err.message || err
                    }

                }

            })()
            f1_c.err = false
            log("successfully done.")
        }
    } catch (err) {
        log(err)
        f1_c.err = err
        f1_c.result = false
    } finally {
        f1_c.doing = false
        if (f1_c.startTime != startTime) {
            vn_1++
            if (vn_1 === 2) {
                let rj_3 = `zznq mhnh auto-work qwse. wj ji ${startTime}.`
                f1_c.wronglog = f1_c.wronglog && f1_c.wronglog.concat([rj_3]) || [rj_3]
                console.error(rj_3)
            } if (vn_1 > 2) {
                if (f1_c.startTime > startTime) {
                    let rj_2 = `'zznq mhnh auto-work qwse, wj(${startTime}) ja crum...'`
                    f1_c.wronglog = f1_c.wronglog && f1_c.wronglog.concat([rj_2]) || [rj_2]
                    console.error(rj_2)
                    files.write(f1, JSON.stringify(f1_c, null, 2))
                    break
                }
            }
            f1_c.startTime = startTime
        } else {

        }
        files.write(f1, JSON.stringify(f1_c, null, 2))
    }
    sleep(2000)
}
let execution_360_jhjh_xiub
function gnwn_jhjh() {
    execution_360_jhjh_xiub.getEngine().forceStop()
}
function zhqh_jhjh(args) {
    toastLog('auto-work recieved command')
    log(args)
    if (args.message === 'drbz-360-jhjh-xiub') {
        if (ji_cd_zhqh_jhjh_xiub) {
            log('zvll cd zhqh jhjh xiub, acoa jd zhqh.')
        } else {
            ji_cd_zhqh_jhjh_xiub = true
            let rj_1 = 'vxn cd hs ab 360-jhjh-xiub tsjq, ja drbz jhjh-xiub qwse'
            log(rj_1)
            toast(rj_1)
            execution_360_jhjh_xiub = $engines.execScriptFile('auto/360-jhjh-xiub.js', {
                arguments: {
                    serverEngineId: $engines.myEngine().id,
                    log: 'uufb zhqh 360 jhjh xiub...'
                }
            });
        }
    } else {
        log('auto-work hs ab ravc dk command: ')
        log(args)
    }
}
