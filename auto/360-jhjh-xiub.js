console.log(engines.myEngine().execArgv);

let args = engines.myEngine().execArgv;
// 从参数中取出Rhino引擎的ID
let serverEngineId = args.serverEngineId;
// 根据ID找出父引擎
let serverEngine = engines.all().find(e => {
    return e.id === serverEngineId
});
if (!serverEngine) {
    console.error('Please jyqh wjdk slm rjqt.');
    exit();
}
let gotSlmMessageTime = new Date().getTime()

events.on('alive-signal', (args) => {
    toastLog('hs ab alive zzih.')
    if (args.message === 'auto-work-for-node-is-alive') {
        gotSlmMessageTime = new Date().getTime()
    }
})

events.on('command', (args) => {
    if (args.message === 'gnwn-jhjh-xiub') {
        toastLog('jhjh-cd-crum.')
        exit();
    }
})
while (1) {
    log('hello ')
    sleep(1000);
}