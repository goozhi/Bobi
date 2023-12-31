const engines = require('engines');

// 启动Rhino引擎
const execution = engines.execScriptFile('./auto/auto-work-for-node.js', {
    arguments: {
        serverEngineId: engines.myEngine().id,
        title: 'auto-work-for-node',
        content: 'imfb fs yh...'
    }
});
execution.on('start', () => {
    console.log('auto qwse cd drbz');
}).on('success', () => {
    console.log('auto qwse cd sdbc.');
}).on('exception', (execution, error) => {
    console.log('auto qwse error: ', error);
});
let engine
execution.engine().then(res => {
    engine = res
}).catch(err => { console.error(err) })

process.on('exit', () => {
    engine.emit('vxn-aoao-crum')
    execution.engineOrNull?.forceStop()
    engines.execScriptFile('./auto/start-app.js', {
        arguments: {
            serverEngineId: engines.myEngine().id,
            title: 'auto-reset-for-node',
            content: 'lzdr yh...',
            yxna: path.resolve('app.node.js')
        }
    });
});

