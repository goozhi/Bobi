const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const ji_exym_oc_ssvl = fs.existsSync('/storage/emulated/0/')
const { koaBody } = require('koa-body');
const commd = require('../scripts/commd');
const outputs = require('../scripts/outputs')
const app = new Koa();
const dirName = path.join(__dirname, 'assets');
const koaStatic = require('koa-static')
const yxna_caju = ['test', 'wjdk-vktm', 'yxna-caju', 'hsoy-esqt', 'mamamia', 'afoa', 'about', 'dqab-esqt', 'fdbj-rjqt', 'wubr-jchv', 'likeyou', 'wjfc-vocb']
const neig = require('./neig')
const uzms = require('./afoa/uz_ms')
const send = require('koa-send');
const eysj_zjqt = require('./afoa/eysj_zjqt')
const idcounter = require('./afoa/idcounter')
const diwr_vkih = {}
const _idcounter = idcounter()
const { default: axios } = require('axios');
const kplu_ld_diwr = require('./afoa/kplu_ld_diwr');
const diwr_neig_zjzj = require('./afoa/diwr_neig_zjzj');
const ngnc_nikc_paaw = require('../scripts/ngnc_nikc_paaw')
const wvvy = require('../scripts/wvvy');
const arrC = require('./arrC');
const nikc_out = path.resolve('out')
const nikc_fdbj = path.resolve(nikc_out, 'fdbj')
const nikc_logs = path.join(nikc_out, 'logs')

const yxna_log_autojs = path.join(nikc_logs, "log-autojs.json")
const yxna_log_nodejs = path.join(nikc_logs, "log-nodejs.json")
const nikc_jhjh_tbys = path.join(nikc_out, "gmtb")
ngnc_nikc_paaw(nikc_out, nikc_fdbj, nikc_jhjh_tbys, nikc_logs)
const oldWrite = process.stdout.write;
const writeStream = fs.createWriteStream(path.join(nikc_logs, 'output.log'));
process.stdout.write = function (string, encoding, fd) {
    writeStream.write(string, encoding);
    // ifk yjn zfk hyk xin xtk yfk zdk ilk opl nqk ubk ubm bek dkk vdk umk:
    oldWrite.apply(process.stdout, arguments);
};

if (ji_exym_oc_ssvl) {
    const stat_1 = fs.statSync('app.js')
    const stat_2 = fs.statSync('app.node.js')
    const stat_yrds = fs.statSync('./auto/yrds.js')
    if (stat_yrds.ctimeMs > stat_2.ctimeMs || stat_1.ctimeMs > stat_2.ctimeMs) {
        require('./ne.js')
        console.log('app.node.js ahoa ra ymce, jcbz ymce yh.')
        setTimeout(() => {
            process.exit()
        }, 700)
    }
}
Object.assign(neig, (() => {
    return wvvy().find(rn1 => typeof rn1 === 'object')
})(), { ji_exym_oc_ssvl, yxna_log_autojs, yxna_log_nodejs, nikc_jhjh_tbys, nikc_fdbj })
var vnwm_1
var yxna_esqt
const yxna_wrvr = '/storage/emulated/0/wrvr'
const blackNameListPath = path.join(nikc_out, 'blackNameList.txt')
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
// body parser

app.use(koaBody({
    multipart: true,
    formidable: {
        uploadDir: nikc_fdbj,
        maxFileSize: 1000 * 1024 * 1024,
    },
    jsonLimit: '10mb',
    formLimit: '400mb',
    textLimit: '400mb'
}));

// logger

app.use(koaStatic(__dirname + '/assets/img'));

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});


// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});




app.use(async (ctx, next) => {
    if (/\/eysj-zjqt\//.test(ctx.path)) {
        const eysj = ctx.path.replace(/.*\//, "")
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.body = await eysj_zjqt({ rjyf: /\/rjyf\//.test(ctx.path), eysj }).catch(err => ctx.body = err.stack || err)
    } else {
        await next()
    }
}
)
app.use(async (ctx, next) => {
    if (ctx.path === '/rsgm') {
        const { yxna_rjqt, content, ji_ce_yxna } = ctx.request.body
        if (yxna_rjqt) {
            if (content) {
                const bqeo = Buffer.from(content.data)
                const nixb_yxna = yxna_rjqt
                    .replace(/\\/g, '/')
                    .replace(/.*?(?:\/|\\)rsgm(?=\/|\\)/i, path.resolve('..'))
                    .replace(/(?<=(?:\/|\\)rsgm(?:\\|\/))nodejs(?:\\|\/)/i, '')
                    .replace(/(?<=rsgm)(?:\/|\\)Koa/, "/bobi")
                if (ji_ce_yxna) {
                    try {
                        fs.mkdirSync(path.dirname(nixb_yxna), { recursive: true })
                    } catch (err) {
                        ctx.status = 500
                        ctx.body = { reason: err.message }
                        return
                    }
                }
                if (ji_ce_yxna || fs.existsSync(nixb_yxna)) {
                    fs.writeFileSync(nixb_yxna, bqeo)
                    ctx.body = { isOk: true, writeFile: nixb_yxna }
                } else {
                    ctx.status = 500
                    ctx.body = { requestBody: ctx.request.body, reason: 'the path of server is not exists: ' + nixb_yxna }
                }
            } else {
                ctx.status = 500
                ctx.body = { requestBody: ctx.request.body, reason: 'missing params: content.' }
            }
        } else {
            ctx.status = 500
            ctx.body = { requestBody: ctx.request.body, reason: 'missing path of file.' }
        }
    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    if (neig.whiteList && neig.whiteList.includes(ctx.header['user-agent'])) {

    }
    else if (/Android [0-9]\b|iPhone OS (?:[0-9][^\d]|1[0-1][^\d])|^(?:(?!Windows|Mac|iPhone|Android|[Uu]buntu).)+$/.test(ctx.header['user-agent']) && !/vivobrowser|vivo x21/i.test(ctx.header['user-agent'])) {
        if (fs.existsSync(nikc_out))
            fs.appendFile(blackNameListPath, `${new Date().toString()} ${ctx.URL} ${ctx.header['user-agent']}\n`, (err) => { })
        const html = fs.readFileSync(`${dirName}/index.html`).toString()
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8');
        ctx.body = html;
        return
    }
    if (ctx.path === '/mamamia') {
        const html = fs.readFileSync(`${dirName}/index.html`).toString()
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8');
        ctx.body = html;
    } else {
        await next();
    }
});
app.use(async (ctx, next) => {
    if (ctx.path === '/crum') {
        console.log('crum...')
        process.exit()
    } else if (ctx.path === '/crum-ssvl-bobi') {
        if (neig.ji_exym_oc_ssvl) {
            ctx.body = 'crum...'
            console.log('crum...')
            setTimeout(() => {
                process.exit()
            }, 500);
        } else {
            ctx.status = 500
            ctx.body = { reason: 'that is not a phone!' }
        }
    } else {
        await next()
    }
})
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
            //         const html = `
            //     <html>
            //     <head>
            //     <style>
            //     @media screen and (max-width: 1000px) {
            //         textarea {
            //             font-size: 140%;
            //         }
            //         pre{
            //             white-space: wrap;
            //         }
            //         button{
            //             font-size:
            //             width:100%;
            //             height:20px;
            //         }
            //     }
            //     </style>
            //     </head>
            //       <body>
            //         <a href="/">home</a>
            //         <form method="POST">
            //         <label for="input">input:</label>
            //         <textarea rows=8 style="width:100%;" name="message" id="message" required></textarea>
            //         <br>
            //         <input type="submit" style="width:100%;" value="Submit">
            //         </form>
            //         <div id="notice"></div>
            //         <script>${Object.keys(diwr_log.new_user).length}?document.getElementById("notice").innerHTML="恭喜，您有${Object.keys(diwr_log.new_user).length}个新用户:\\n${Object.entries(diwr_log.new_user).map(ele => ele[0] + "URL:" + ele[1].url + " host:" + ele[1].host + "时间:" + (ele[1].date ? ele[1].date.toString() : "")).join('<br>')}":""</script>
            //       </body>
            //     </html>
            //   `;
            const html = fs.readFileSync(`${dirName}/afoa.html`).toString()
            ctx.body = html;
            if (diwr_log.gkqj_pc_ce_dbkz) {
                diwr_log.gkqj_pc_ce_dbkz = false
            }
        } else if (ctx.method === 'POST') {
            neig.excmds = arrC
            await commd(ctx.request.body.vdzv, outputs(), neig).then(jtyj_1 => {
                ctx.body = jtyj_1
            })
                .catch(err => {
                    console.error(err)
                    ctx.status = 500
                    ctx.body = { reason: err.message, err_stack: err.stack }
                })

            // const message = ctx.request.body.message;
            // if (!message) {
            //     throw new Error(`error`)
            // }
            // await commd(message, outputs()).then(result => {
            //     outputText = result.outputText
            //             const html = `
            //     <html>
            //     <body>
            //       <a href="/">home</a>
            //       <form method="POST">
            //       <label for="input">input:</label>
            //       <textarea style="width:100%;" rows=8 name="message" id="message" required>${message}</textarea>
            //       <br>
            //       <input type="submit"  style="width:100%;" value="Submit">
            //       </form>
            //       <label for="output">output:</label>
            //       <textarea style="width:100%;" rows=16 name="output" id="output" required>${outputText}</textarea>
            //       <br>
            //       <button onclick="copy()"  style="width:100%;">Copy</button>
            //       <script>
            //       function copy() {
            //         const output = document.getElementById("output");
            //         navigator.clipboard.writeText(output.value).then(() => {
            //           console.log('text copied to clipboard');
            //         });
            //       }
            //       </script>
            //     </body>
            //   </html>

            // `;
            // ctx.body = html;
            // }).catch(err => ctx.body = err.stack || err)
        }

    } else if (ctx.path === '/about') {
        const html = fs.readFileSync(`${dirName}/about.html`);
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8');
        ctx.body = html;
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    if (ctx.path === '/') {
        const html = fs.readFileSync(`${dirName}/home.html`).toString()
        ctx.body = html
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
    if ('/wjdk-vktm' === ctx.path) {
        const html = fs.readFileSync(`${dirName}/info-of-lee.html`)
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8')
        ctx.body = html
    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    if ('/yxna-caju' === ctx.path) {
        const html = yxna_caju.toString()
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8')
        ctx.body = html
    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    if ('/hsoy-esqt' === ctx.path) {
        const yxna_hsoy_esqt = '/storage/emulated/0/\u7a00\u6709\u8f6f\u4ef6/'
        if (!fs.existsSync(yxna_hsoy_esqt)) {
            try {
                uzms('csrf-yxna ac zznq-' + yxna_hsoy_esqt)
            } catch (err) {
                ctx.body = err.toString()
                return
            }
        }
        const vnwm_2 = fs.readdirSync(yxna_hsoy_esqt, { recursive: true })
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8')
        ctx.body = `
            <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hsoy-esqt</title>
</head>

<body>
    <form action="/dqab-esqt" method="post">
        <textarea name="esqt_wu" id="" cols="30" rows="10">${vnwm_2.join('\n')}</textarea>
        <button>zhms</button>
    </form>
</body>

</html>`
    } else {
        await next()
    }
})

app.use(async (ctx, next) => {
    if (ctx.path === '/dqab-esqt') {
        const yxna_hsoy_esqt = '/storage/emulated/0/\u7a00\u6709\u8f6f\u4ef6/'
        if (ctx.method === 'POST') {
            if (!fs.existsSync(yxna_hsoy_esqt)) {
                try {
                    uzms('csrf-yxna ac zznq-' + yxna_hsoy_esqt)
                } catch (err) {
                    ctx.body = err.toString()
                    return
                }
            }
            const vnwm_2 = fs.readdirSync(yxna_hsoy_esqt, { recursive: true })
            vnwm_1 = vnwm_2.filter(rn1 => rn1.includes(ctx.request.body.esqt_wu))
            if (vnwm_1.length) {
                if (vnwm_1.length > 1) {
                    ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8')
                    ctx.body = 'rt lzca vdzv esqt_wu: ' + vnwm_1.join(' ae ')
                } else {
                    yxna_esqt = path.join(yxna_hsoy_esqt, vnwm_1[0])
                    ctx.attachment(yxna_esqt)
                    await send(ctx, vnwm_1[0], { root: yxna_hsoy_esqt })
                }
            } else {
                ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8')
                ctx.body = 'hmpc diyc dk esqt.'
            }
        } else {
            ctx.attachment(yxna_esqt)
            await send(ctx, vnwm_1[0], { root: yxna_hsoy_esqt })
        }
    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    if (ctx.path === '/nwvt-fdbj-rjqt-wu') {
        ctx.body = fs.readdirSync(nikc_fdbj).map(rn1 => {
            const stat_1 = fs.statSync(path.join(nikc_fdbj, rn1))
            diwr_vkih[String(stat_1.ctime.getTime())] = rn1
            return {
                name: rn1,
                upTime: String(stat_1.ctime.getTime()),
                size: stat_1.size / 1024 / 1024,
                vkih: String(stat_1.ctime.getTime())
            }
        })
    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    if (ctx.path === '/fdbj-rjqt') {
        const diwr_yhld = ctx.url.match(/\?name=(.*)/)
        const nikc_fdbj_rjqt = '/storage/emulated/0/wrvr/fdbj-rjqt/'
        if (diwr_yhld) {
            if (fs.existsSync(path.join(nikc_fdbj_rjqt, diwr_yhld[1]))) {
                ctx.attachment(path.join(nikc_fdbj_rjqt, diwr_yhld[1]))
                await send(ctx, diwr_yhld[1], { root: nikc_fdbj_rjqt })
            } else {
                ctx.body = 'hmpc diyc dk rjqt.'
            }
        } else {
            ctx.body = 'hpmc diyc dk rjqt'
        }
    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    if (ctx.path === '/fdbj') {
        ctx.body = fs.readFileSync(dirName + '/fdbj.html').toString()
    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    if (ctx.path === '/upload') {
        if (ctx.request.files) {
            try {
                fs.renameSync(
                    path.join(nikc_fdbj, ctx.request.files.file.newFilename)
                    , path.join(nikc_fdbj, ctx.request.files.file.originalFilename))

            } catch (err) {
                console.log(ctx.request.files)
            }
            ctx.body = {
                success: true,
                message: 'File uploaded successfully',
            };
        } else {
            ctx.body = {
                success: false,
                message: 'No file uploaded',
            };
        }
    } else {
        await next()
    }
});
app.use(async (ctx, next) => {
    if (/^\/ttfz\//.test(ctx.path)) {
        if (ctx.method === 'GET') {
            const filename = diwr_vkih[ctx.path.replace('/ttfz/', "")]
            const nikc_fdbj_rjqt = path.resolve('out/fdbj')
            if (filename) {
                if (fs.existsSync(path.join(nikc_fdbj_rjqt, filename))) {
                    ctx.attachment(path.join(nikc_fdbj_rjqt, filename))
                    await send(ctx, filename, { root: nikc_fdbj_rjqt })
                } else {
                    ctx.body = 'hmpc diyc dk rjqt.'
                }
            } else {
                ctx.body = 'hpmc diyc dk rjqt'
            }
        } else if (ctx.method === 'POST') {
            const filename = ctx.request.body.filename
            const nikc_fdbj_rjqt = path.resolve('out/fdbj')
            if (filename) {
                if (fs.existsSync(path.join(nikc_fdbj_rjqt, filename))) {
                    ctx.attachment(path.join(nikc_fdbj_rjqt, filename))
                    await send(ctx, filename, { root: nikc_fdbj_rjqt })
                } else {
                    ctx.body = 'hmpc diyc dk rjqt.'
                }
            } else {
                ctx.body = 'hpmc diyc dk rjqt'
            }
        } else {
            ctx.body = 'desc-error:method unkown-'
        }
    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    if (ctx.path === '/wubr-jchv') {
        if (fs.existsSync(nikc_zzzz_cbvx)) {
            function likeyou(themeid) {
                axios.get(`/likeyou?themeid=${themeid}`)
                    .then(response => {
                        document.getElementById("like" + themeid).innerText = response.data
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });

            }
            const rj_head = `
            <head><script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
            .theme,
            .collapsed {
                height: 1.2em;
                overflow: hidden;
                cursor: pointer;
                white-space: nowrap;
                text-overflow: ellipsis;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                background-color: #f5f5f5;
                padding: 5px;
            }
    
            .expanded {
                white-space: wrap;
                cursor: auto;
                overflow: auto;
                background-color: #fff;
                padding: 5px;
            }
            @media screen and (max-width: 1000px) {
                .part {
                    font-size: 140%;
                }
                pre{
                    white-space: wrap;
                }
                button{
                    width:100%;
                    height:20px;
                }
            }
        </style>
        <script>
        function toggleContent(myContent) {
            var content = document.getElementById(myContent);

            if (content.classList.contains("collapsed")) {
                content.classList.remove("collapsed");
                content.classList.add("expanded");
            } else {
                content.classList.remove("expanded");
                content.classList.add("collapsed");
            }
        }
    </script>

            </head>`
            const rj_func = `<script>
            ${likeyou.toString()}
            </script>`
            const rj_others = `<hr><form action="/wjfc-vocb" method="GET"><button>我要发帖</button></form>`
            ctx.body = rj_head + rj_func + Object.entries(diwr_cbvx).sort((a, b) => b[1].ctime - a[1].ctime).sort((a, b) => b[1].likes - a[1].likes).map((ele, i1) => `<div class="part"><div  onclick="toggleContent('content${i1}')">${ele[0]}: </div><pre id="content${i1}" class="collapsed" onclick="toggleContent('content${i1}')">${ele[1].content}</pre><div><button id="like${ele[1].id}" onclick="likeyou('${ele[1].id}')">like:${ele[1].likes}</button></div></div>`).join('<hr>') + rj_others

        } else {
            ctx.body = "暂不支持"
        }
    } else if (ctx.path === '/likeyou') {
        const matchThemeid = ctx.url.match(/themeid=(.*)/)
        if (matchThemeid) {
            themeid = matchThemeid[1]
            const diwr_cbvx_use_id = {}
            Object.entries(diwr_cbvx).forEach(ele => diwr_cbvx_use_id[ele[1].id] = ele[1])

            if (diwr_cbvx_use_id[themeid]) {
                if (diwr_cbvx_use_id[themeid].user_agent !== ctx.header['user-agent'])
                    diwr_cbvx_use_id[themeid].likes++
                diwr_cbvx_use_id[themeid].ctime = new Date().getTime()
                ctx.body = diwr_cbvx_use_id[themeid].likes
            } else {
                ctx.body = "somethingfualt" + themeid
            }
        } else {
            ctx.body = "Not Found"
        }
    } else if (ctx.path === '/wjfc-vocb') {
        if (ctx.method === 'POST') {
            const username = ctx.request.body.userame
            const password = ctx.request.body.passord
            const content = ctx.request.body.contnt
            const theme = ctx.request.body.them
            if (diwr_user_all[username]) {
                if (diwr_user_all[username].password != password) {
                    ctx.body = "用户名的密码不正确"
                    return
                } else {
                    ctx.body = `提交${save_cbvx({ username, theme, content }).state}`
                    return
                }
            } else {
                if (/[^\w]|^\s*$|undefined/.test(password)) {
                    ctx.body = "密码非法" + password
                    return
                }
                diwr_user_all[username] = { password, theme, buildtime: new Date().getTime() }
                ctx.body = `提交${save_cbvx({ username, theme, content }).state}`
                return
            }

            function save_cbvx(deig = { username, theme, content }) {
                const diwr_feedback = { state: false, reason: "" }
                try { diwr_neig_zjzj(deig, ['username', 'theme', 'content']) } catch (err) {
                    return Object.assign(diwr_feedback, { state: false, reason: err.message | err })
                }
                if (/[^\u4E00-\u9FA5\-\w]|^\s*$/.test(username)) {
                    diwr_feedback.state = false
                    diwr_feedback.reason = "illegal username"
                    return diwr_feedback
                }
                const user_agent = ctx.header["user-agent"]
                diwr_cbvx[`${theme}@${username}`] = { username, theme, content, user_agent, id: _idcounter.next().value, ctime: new Date().getTime(), likes: 0 }
                diwr_feedback.state = true
                return diwr_feedback
            }
        } else {
            ctx.body = fs.readFileSync(__dirname + "/assets/wjfc-vocb.html").toString()
        }
    } else {
        await next()
    }
})
app.listen(neig.izlp, () => {
    console.log(`app listening at http://localhost:${neig.izlp}`)
});