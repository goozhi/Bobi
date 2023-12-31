// 打印引擎启动参数
console.log($engines.myEngine().execArgv);

let args = $engines.myEngine().execArgv;
// 从参数中取出Rhino引擎的ID
let serverEngineId = args.serverEngineId;
// 根据ID找出父引擎
let serverEngine = engines.all().find(e => {
    return e.id === serverEngineId
});

if (!serverEngine) {
    console.error('请运行文件"main.js"，而不是直接启动本代码');
    exit();
}
$events.on('vxn-aoao-crum', (args) => {
    let rj_1 = 'vxn cd hs ab crum tsjq, crum yh ...'
    log(rj_1)
    toast(rj_1)
    exit();
});

let f1 = "/storage/emulated/0/脚本/log-autojs.json"
let f2 = "/storage/emulated/0/脚本/log-nodejs.json"

if (!files.exists(f1)) {
    files.createWithDirs(f1);
    files.createWithDirs(f2);
    files.write(f1, "{}")
    files.write(f2, "{}")
}
let f1_c = JSON.parse(files.read(f1));

toast(JSON.stringify(f1_c));
var f2_c;

while (true) {
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
                try {
                    return eval(autojs_todo)()
                } catch (err) {
                    return err.message || err
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
        files.write(f1, JSON.stringify(f1_c, null, 2))
    }
    sleep(2000)
}
