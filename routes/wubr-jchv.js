const fs = require('fs')
const path = require('path')

async function wubr_jchv(ctx, next) {
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
}
module.exports = wubr_jchv