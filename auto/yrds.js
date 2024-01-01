// yrds, hv rsgm hfbc
const engines = require('engines');
neig.engines = engines
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
    }
});

