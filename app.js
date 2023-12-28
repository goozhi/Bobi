const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const fictions = require('./my-fictions/main')
const dirName = path.join(__dirname, 'assets');
const koaStatic = require('koa-static')
const neig = require('./neig.json')
const uzms = require('./afoa/uz_ms')
const send = require('koa-send');
const idcounter = require('./afoa/idcounter')
const _idcounter = idcounter()
const { default: axios } = require('axios');
const kplu_ld_diwr = require('./afoa/kplu_ld_diwr');
const diwr_neig_zjzj = require('./afoa/diwr_neig_zjzj');
const fdbj_rjqt = require('./routes/fdbj-rjqt');
const fdbj = require('./routes/fdbj');
const wubr_jchv = require('./routes/wubr-jchv');
const afoa_wldg = require('./routes/afoa_wldg');
const eysj_zjqt = require('./routes/eysj-zjqt')
const yxna_caju = require('./routes/yxna-caju');
const rx_wuey_wlyc = require('./routes/rx-wuey-wlyc');
const hsoy_esqt = require('./routes/hsoy-esqt');
const dqab_esqt = require('./routes/dqab-esqt');
const wjdk_vktm = require('./routes/wjdk-vktm')
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
                "content":"欢迎来到心灵驿站，分享你的想法的同时请务必避免你的隐私泄露。",
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
    eysj_zjqt(ctx, next)
}
)

app.use(async (ctx, next) => {
    rx_wuey_wlyc(ctx, next)
});


app.use(async (ctx, next) => {
    afoa_wldg(ctx, next, { diwr_log })
});

app.use(async (ctx, next) => {
    if (ctx.path === '/') {
        const html = fs.readFileSync(`${dirName}/fiction-enter.html`).toString().replace(/.*\/gusi.*/, href_fictions.join('\n'));
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8');
        ctx.body = html;
    } else {
        await next();
    }
});
app.use(async (ctx, next) => {
    const gkjq_yj_ab = Object.entries(obj_ybkc).some(([key, value]) => {
        if ('/' + key === ctx.path) {
            const html = fs.readFileSync(`${dirName}/fiction.html`).toString().replace(/fiction-content/, [...fictions.get(value)].map(([key, value], index_1) => `第${index_1 + 1}章<h2>${value.title}</h2>` + value.content).join('\n\n')).replace(/\n/g, '<br>').replace(/fiction-title/, value.bookName);
            ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8');
            ctx.body = html;
            return true
        }
    })
    if (gkjq_yj_ab) {

    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    if ('/test' === ctx.path) {
        ctx.body = JSON.stringify(ctx, null, 2)
    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    wjdk_vktm(ctx, next, { dirName })
})
app.use(async (ctx, next) => {
    yxna_caju(ctx, next)
})
app.use(async (ctx, next) => {
    hsoy_esqt(ctx, next)
})

app.use(async (ctx, next) => {
    dqab_esqt(ctx, next)
})

app.use(async (ctx, next) => {
    fdbj(ctx, next)
})
app.use(async (ctx, next) => {
    fdbj_rjqt(ctx, next)
})

app.use(async (ctx, next) => {
    wubr_jchv(ctx, next)
})
app.listen(neig.izlp, () => {
    console.log(`app listening at http://localhost:${neig.izlp}`)
});