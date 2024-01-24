"ui";


ui.statusBarColor("#1E1E1E");
const workingDirectory = '/sdcard/rsgm/bobi/auto'
let destroy = require(workingDirectory + "/func/destroy");
let XITL_AFDH = require(workingDirectory + "/func/XITL_AFDH.js")
var config = { port: 4009 }
let diwr_zzzz
if (files.exists("/sdcard/脚本/存储/对象/uuvo_ouss/diwr_zzzz.json")) {
    try {
        diwr_zzzz = require("/sdcard/脚本/存储/对象/uuvo_ouss/diwr_zzzz.json");
    } catch (err) {
        toastLog(err)
    }
    if (diwr_zzzz.port) { config.port = diwr_zzzz.port }
}

let neig = {
    web1Visibility: 'visible',
    web2Visibility: 'visible',
    web3Visibility: 'visible',
    web4Visibility: 'visible'
}
ui.layout(
    <vertical>
        <appbar>
            <toolbar bg="#1E1E1E" id="toolbar" title="Bobi" />
        </appbar>
        <button w="1" h="1" id="jhjh_1" />
        <button w="100" h="50" id="goback_1" text="back"/>
        <button w="100" h="50" id="goforward_1" text="gofor"/>
        
        <frame h="700">
            <webview id="web1" visibility="visible" h="300" w="auto" />
            <webview id="web2" visibility="visible" h="200" w="auto" />
            <webview id="web3" visibility="visible" h="200" w="auto" />
        </frame>
        <bottomnaviagtion id="navigation" bg="#ffffff" />
    </vertical>
);
ui.goback_1.on("click",function(v){
if(ui.web1.canGoBack()){
ui.run(()=>{
ui.web1.goBack();
})
}else{
toast(ui.web1.canGoBack())
}
})
ui.goforward_1.on("click",function(v){
if(ui.web1.canGoForward()){
ui.run(()=>{
ui.web1.goForward();
})
}else{
toast(ui.web1.canGoForward())
}
})
// 设置底部导航栏的内容
let menuItems = [];
let menu = ui.navigation.menu;
menuItems.push(buildMenuItem(menu, "hym", ui.R.drawable.ic_dashboard_black_48dp));
menuItems.push(buildMenuItem(menu, "hym", ui.R.drawable.ic_dashboard_black_48dp));
menuItems.push(buildMenuItem(menu, "hym", ui.R.drawable.ic_dashboard_black_48dp));

// 当底部按钮被选中时，切换ViewPager页面为相应位置的页面
let vn_ybkc = 0
let t1 = new Date().getTime()
ui.navigation.setOnNavigationItemSelectedListener(function (item) {
    let t2 = new Date().getTime()
    let do_1 = t2 - t1
    t1 = t2
    if (do_1 < 500) {
        vn_ybkc++
    } else {
        vn_ybkc = 0
    }
    if (vn_ybkc > 3) {
        let webVkih = menuItems.indexOf(item) + 1
        ui["web" + (webVkih)].loadUrl(getHomeUrl())
        let rj_fo_nixb = `web${webVkih}Visibility`
        neig[rj_fo_nixb] = 'visible'
        for (key in neig) {
            if (/visibility/i.test(key) && rj_fo_nixb != key) {
                neig[key] = 'invisible'
            }
        }
        ui.web1.hidden = neig.web1Visibility === 'visible' ? false : true
        ui.web2.hidden = neig.web2Visibility === 'visible' ? false : true
        ui.web3.hidden = neig.web3Visibility === 'visible' ? false : true
        ui.web4.hidden = neig.web4Visibility === 'visible' ? false : true
        //yhti_1(ui.web1)
        //yhti_1(ui.web2)
        //yhti_1(ui.web3)
        //yhti_1(ui.web4)
    }
    return true;
});

function yhti_1(ubqt) {
    if (ubqt.hidden) {
        ubqt.setScaleY(0.1)
        // ubqt.setVisibility(4)
    } else {
        ubqt.setScaleY(1)
        // ubqt.setVisibility(0)
    }
}

function getHomeUrl() {
    if (files.exists("/sdcard/脚本/存储/对象/uuvo_ouss/diwr_zzzz.json")) {
        var diwr_zzzz = require("/sdcard/脚本/存储/对象/uuvo_ouss/diwr_zzzz.json");
        if (diwr_zzzz.port) { config.port = diwr_zzzz.port }
    }
    return "http://localhost:" + config.port + "/"
}
ui.emitter.on("create_options_menu", menu => {
    menu.add("设置");
    menu.add("日志");
    menu.add("goback")
    menu.add("goforward")
    menu.add("Uyzj Ed");
    menu.add("服务器启动")
});
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "设置":
            app.startActivity("settings");
            break;
        case "重启main-ui":
            toast('crum bj lzdr...')
            // engines.execScriptFile(workingDirectory + "/uis/main.js")
            exit()
            break;
           case "goback":
           goback();
           case "goforward":
           goforward();
        case "重启服务器":
            engines.stopAll();
            break;
        case "服务器启动":
            try {
                engines.execScriptFile(diwr_zzzz.yxna_exym || "/sdcard/rsgm/bobi/app.node.js")
                toast("服务器启动需要几秒钟的时间")
            } catch (err) {
                toastLog(err)
            }
            break;
        case "日志":
            app.startActivity("console");
            break;
        case "ToolKit1":
            var execution2 = engines.execScriptFile("/sdcard/脚本/ToolKit.js", {
                path: "/sdcard/脚本/"
            })
            break;
        case "ToolKit":
            var script_2 = "require('/sdcard/脚本/ToolKit.js')"
            var execution3 = engines.execScript("Toolkit2", script_2,
                {
                    path: "/sdcard/脚本/"
                })
            break
        case "Uyzj Ed":
            var script_2 = "require('/sdcard/脚本/UyzjEd.js')"
            var execution3 = engines.execScript("Uyzj Ed", script_2,
                {
                    path: "/sdcard/脚本/"
                })

    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

let lastPressedTime = 0;
ui.emitter.on("back_pressed", (e) => {
    let time = Date.now();
    if (time - lastPressedTime < 500) {
        return;
    }
    toast("再按一次退出程序");
    e.consumed = true;
    lastPressedTime = time;
});
function goback(){
ui.goback_1.click()
}
function goforward(){
ui.goforward_1.click()
}
function buildMenuItem(menu, title, icon) {
    let menuItem = menu.add(title);
    menuItem.setIcon(icon);
    return menuItem;
}

ui.web1.getSettings().setJavaScriptEnabled(true);
setTimeout(() => { ui.web1.loadUrl("http://localhost:" + config.port + "/") }, 100)
ui.web2.getSettings().setJavaScriptEnabled(true);
setTimeout(() => { ui.web2.loadUrl("http://localhost:" + config.port + "/") }, 100)
ui.web3.getSettings().setJavaScriptEnabled(true);
setTimeout(() => { ui.web3.loadUrl("http://localhost:" + config.port + "/") }, 100)