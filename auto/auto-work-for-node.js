const f1 = "/storage/emulated/0/脚本/log-autojs.json"
const f2 = "/storage/emulated/0/脚本/log-nodejs.json"

if (!files.exists(f1)) {
    files.createWithDirs(f1);
    files.createWithDirs(f2);
    files.write(f1, "{}")
    files.write(f2, "{}")
}
const f1_c = JSON.parse(files.read(f1));

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
