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
    if (/Android [0-9]\b|iPhone OS (?:[0-9][^\d]|1[0-1][^\d])|^(?:(?!Windows|Mac|iPhone|Android|[Uu]buntu).)+$/.test(ctx.header['user-agent']) && !/vivobrowser/ig.test(ctx.header)) {
        if (fs.existsSync(yxna_wrvr))
            fs.appendFile(path.join(yxna_wrvr, 'blackNameList.txt'), `${new Date().toString()} ${ctx.URL} ${ctx.header['user-agent']}\n`, (err) => { })
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
        <head>
        <style>
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
        </head>
          <body>
            <h1>About Page</h1>
            <form method="POST">
            <label for="input">input:</label>
            <textarea style="width:100%;" name="message" id="message" required></textarea>
            <br>
            <input type="submit" style="width:100%;" value="Submit">
            </form>
            <div id="test1"></div>
            <script>${Object.keys(diwr_log.new_user).length}?document.getElementById("test1").innerText=("恭喜，您有${Object.keys(diwr_log.new_user).length}个新用户:\\n${Object.entries(diwr_log.new_user).map(ele => ele[0] + "URL:" + ele[1].url + " host:" + ele[1].host + "时间:" + (ele[1].date ? ele[1].date.toString() : "")).join('-----')}"):""</script>
          </body>
        </html>
      `;
            ctx.body = html;
            if (diwr_log.gkqj_pc_ce_dbkz) {
                diwr_log.gkqj_pc_ce_dbkz = false
            }
        } else if (ctx.method === 'POST') {
            const message = ctx.request.body.message;
            if (!message) {
                throw new Error(`error`)
            }
            await commd(message).then(result => {
                outputText = result.outputText
                const html = `
        <html>
        <body>
          <h1>About Page</h1>
          <form method="POST">
          <label for="input">input:</label>
          <textarea style="width:100%;" rows=8 name="message" id="message" required>${message}</textarea>
          <br>
          <input type="submit"  style="width:100%;" value="Submit">
          </form>
          <label for="output">output:</label>
          <textarea style="width:100%;" rows=16 name="output" id="output" required>${outputText}</textarea>
          <br>
          <button onclick="copy()"  style="width:100%;">Copy</button>
          <script>
          function copy() {
            const output = document.getElementById("output");
            navigator.clipboard.writeText(output.value).then(() => {
              console.log('text copied to clipboard');
            });
          }
          </script>
        </body>
      </html>

    `;
                ctx.body = html;
            }).catch(err => ctx.body = err.stack || err)
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
        const html = fs.readFileSync(`${dirName}/fiction-enter.html`).toString().replace(/.*\/gusi.*/, href_fictions.join('\n'));
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8');
        ctx.body = html;
    } else {
        await next();
    }
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
            const username = ctx.request.body.username
            const password = ctx.request.body.password
            const content = ctx.request.body.content
            const theme = ctx.request.body.theme
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