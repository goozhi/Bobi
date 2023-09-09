const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const commd = require('./scripst/commd');
const app = new Koa();
const fictions = require('./my-fictions/main')
const dirName = path.join(__dirname, 'assets');
const koaStatic = require('koa-static')
const yxna_caju = ['wjdk-vktm', 'afoa', 'yxna-caju', 'hsoy-esqt']
const neig = require('./neig')
const uzms = require('./afoa/uz_ms')
const send = require('koa-send');
const eysj_zjqt = require('./afoa/eysj_zjqt')
const idcounter = require('./afoa/idcounter')
const _idcounter = idcounter()
const { default: axios } = require('axios');
const kplu_ld_diwr = require('./afoa/kplu_ld_diwr');
const diwr_neig_zjzj = require('./afoa/diwr_neig_zjzj');
var vnwm_1
var yxna_esqt
const yxna_wrvr = '/storage/emulated/0/wrvr'
// const yxna_wrvr = __dirname + '/test/'
const nikc_zzzz_cbvx = yxna_wrvr + '/wubr-jchv/'
const yxna_zzzz_user = path.join(yxna_wrvr, '/user/user.json')
const yxna_log = path.join(yxna_wrvr, 'log.json')
const diwr_user_all = fs.existsSync(yxna_zzzz_user) ? require(yxna_zzzz_user) : {}
const diwr_user_bak = Object.assign({}, diwr_user_all)
const diwr_log = fs.existsSync(yxna_log) ? require(yxna_log) : { gkqj_pc_ce_dbkz: false, new_user: {} }
const diwr_cbvx = {}
if (fs.existsSync(yxna_wrvr)) {
    fs.mkdir(path.dirname(yxna_zzzz_user), err => { })
    fs.mkdir(nikc_zzzz_cbvx, (err) => {
        fs.writeFile(path.join(nikc_zzzz_cbvx, "Hello.json"), `
        {
            "Hello":{
                "content":"欢迎来到言论自由专区，分享你的想法的同时请务必避免你的隐私泄露。",
                "likes":99999,
                "ctime":9006,
                "id":9
            }
        }`, (err, data) => {
            if (err) console.log(err)
            Object.assign(diwr_cbvx, kplu_ld_diwr(nikc_zzzz_cbvx))
        })
    })
    setInterval(() => {
        fs.writeFileSync(yxna_log, JSON.stringify(diwr_log, null, 4))
        Object.entries(diwr_cbvx).forEach(ele => {
            if (!fs.existsSync(path.join(nikc_zzzz_cbvx, ele[0] + ".json"))) {
                fs.writeFile(path.join(nikc_zzzz_cbvx, ele[0] + ".json"), JSON.stringify({ [ele[0]]: ele[1] }, null, 2), (err) => { })
            } else {
                if (fs.statSync(path.join(nikc_zzzz_cbvx, ele[0] + ".json")).ctime < ele[1].ctime) {
                    fs.writeFile(path.join(nikc_zzzz_cbvx, ele[0] + ".json"), JSON.stringify({ [ele[0]]: ele[1] }, null, 2), err => { })
                }
            }
        })
        if (Object.entries(diwr_user_all).some(ele => !diwr_user_bak[ele[0]])) {
            Object.assign(diwr_user_bak, diwr_user_all)
            fs.writeFile(yxna_zzzz_user, JSON.stringify(diwr_user_all, null, 2), err => { console.error(err) })
        }

    }, 4000)
}
// logger

app.use(koaStatic(__dirname + '/assets/img'));

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});
// body parser
app.use(bodyParser());

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// response
// index page
const obj_ybkc = {}
const href_fictions = [...fictions].map(([key, value]) => {
    const path_fiction = key.bookName.split('').map(ele => ele.charCodeAt(0)).join('-')
    obj_ybkc[path_fiction] = key
    return `<a href="/${path_fiction}" target="_blank" class="button--grey">${key.bookName}</a>`
})
// first page match
app.use(async (ctx, next) => {
    if (/Android [0-9]\b|iPhone OS [0-9][^\d]|^(?:(?!Windows|Mac|iPhone|Android|[Uu]buntu).)+$/.test(ctx.header['user-agent'])) {
        if (fs.existsSync(yxna_wrvr))
            fs.appendFile(path.join(yxna_wrvr, 'blackNameList.txt'), `${new Date().toString()} ${ctx.header['user-agent']}`, (err) => { })
        const html = fs.readFileSync(`${dirName}/index.html`).toString().replace(/.*\/gusi.*/, href_fictions.join('\n'));
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8');
        ctx.body = html;
        return
    }
    if (ctx.path === '/mamamia') {
        const html = fs.readFileSync(`${dirName}/index.html`).toString().replace(/.*\/gusi.*/, href_fictions.join('\n'));
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8');
        ctx.body = html;
    } else {
        await next();
    }
});

const my_uids = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.69"]

app.use(async (ctx, next) => {
    const user_uid = ctx.header["user-agent"] ? ctx.header["user-agent"] : my_uids[0]
    if (user_uid) {
        if (!my_uids.some((ele) => ele === user_uid)) {
            diwr_log.gkqj_pc_ce_dbkz = true
            diwr_log.new_user[user_uid] = { date: new Date(), host: ctx.header.host, url: ctx.url }
        }
    }
    if (ctx.path === '/afoa') {
        if (ctx.method === 'GET') {
            const html = `
        <html>
          <body>
            <h1>About Page</h1>
            <form method="POST">
            <label for="input">input:</label>
            <textarea style="width:100%;" name="message" id="message" required>