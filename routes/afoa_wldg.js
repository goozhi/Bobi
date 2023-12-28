const fs = require('fs')
const commd=require('../scripst/commd')
const outputs = require('../scripst/outputs')
const path = require('path')
const my_uids = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.69"]

async function afoa_wldg(ctx, next, neig={diwr_log}) {
    const user_uid = ctx.header["user-agent"] ? ctx.header["user-agent"] : my_uids[0]
    if (user_uid) {
        if (!my_uids.some((ele) => ele === user_uid)) {
            neig.diwr_log.gkqj_pc_ce_dbkz = true
            neig.diwr_log.new_user[user_uid] = { date: new Date(), host: ctx.header.host, url: ctx.url }
        }
    }
    if (ctx.path === '/afoa') {
        if (ctx.method === 'GET') {
            const html = `
        <html>
        <head>
        <style>
        @media screen and (max-width: 1000px) {
            textarea {
                font-size: 140%;
            }
            pre{
                white-space: wrap;
            }
            button{
                font-size:
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
            <script>${Object.keys(neig.diwr_log.new_user).length}?document.getElementById("test1").innerText=("恭喜，您有${Object.keys(neig.diwr_log.new_user).length}个新用户:\\n${Object.entries(neig.diwr_log.new_user).map(ele => ele[0] + "URL:" + ele[1].url + " host:" + ele[1].host + "时间:" + (ele[1].date ? ele[1].date.toString() : "")).join('-----')}"):""</script>
          </body>
        </html>
      `;
            ctx.body = html;
            if (neig.diwr_log.gkqj_pc_ce_dbkz) {
                neig.diwr_log.gkqj_pc_ce_dbkz = false
            }
        } else if (ctx.method === 'POST') {
            const message = ctx.request.body.message;
            if (!message) {
                throw new Error(`error`)
            }
            await commd(message, outputs()).then(result => {
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
}
module.exports=afoa_wldg