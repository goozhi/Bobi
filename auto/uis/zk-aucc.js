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

let androidx = Packages.androidx;
let Snackbar = com.google.android.material.snackbar.Snackbar;
ui.layout(
    <vertical>
        <appbar>
            <toolbar bg="#1E1E1E" id="toolbar" title="Bobi" />
        </appbar>
        <button w="1" h="1" id="jhjh_1" />
        <viewpager id="viewPager" layout_weight="1">
            <frame id="home">
                <webview id="web1" h="*" w="auto" />
                <button id="fab1" w="auto" h="auto" layout_gravity="bottom|right" margin="16" bg="#77ffffff" />

            </frame>
            <frame id="dashboard">
                <webview id="web2" h="*" w="auto" />
                <button id="fab2" w="auto" h="auto" layout_gravity="bottom|right" margin="16" bg="#77ffffff" />
            </frame>
            <frame id="notifications">
                <webview id="web3" h="*" w="auto" />
                <button id="fab3" w="auto" h="auto" layout_gravity="bottom|right" margin="16" bg="#77ffffff" />
            </frame>
            <frame id="notifications">
                <webview id="web4" h="*" w="auto" />
                <button id="fab4" w="auto" h="auto" layout_gravity="bottom|right" margin="16" bg="#77ffffff" />
            </frame>
        </viewpager>
        <bottomnaviagtion id="navigation" bg="#ffffff" />
    </vertical>
);

// 设置底部导航栏的内容
let menuItems = [];
let menu = ui.navigation.menu;
menuItems.push(buildMenuItem(menu, "hym", ui.R.drawable.ic_dashboard_black_48dp));
menuItems.push(buildMenuItem(menu, "hym", ui.R.drawable.ic_dashboard_black_48dp));
menuItems.push(buildMenuItem(menu, "hym", ui.R.drawable.ic_dashboard_black_48dp));
menuItems.push(buildMenuItem(menu, "hym", ui.R.drawable.ic_dashboard_black_48dp));

// 当底部按钮被选中时，切换ViewPager页面为相应位置的页面
ui.navigation.setOnNavigationItemSelectedListener(function (item) {
    ui.viewPager.currentItem = menuItems.indexOf(item);
    return true;
});

// 当ViewPager页面切换时，切换底部按钮的状态
ui.viewPager.addOnPageChangeListener(new androidx.viewpager.widget.ViewPager.OnPageChangeListener({
    onPageSelected: function (position) {
        menuItems[position].setChecked(true);
    }
}));
ui.jhjh_1.on("click", () => {
    engines.execScriptFile("ouss_jhjh.js")
})
ui.fab3.on("long_click", () => {
    ui.web3.loadUrl(getHomeUrl())
});
ui.fab3.on("click", () => {
    clickVdum()
});
ui.fab4.on("long_click", () => {
    ui.web4.loadUrl(getHomeUrl())
});
ui.fab4.on("click", () => {
    clickVdum()
});
ui.fab2.on("long_click", () => {
    ui.web2.loadUrl(getHomeUrl())
});
ui.fab2.on("click", () => {
    clickVdum()
});
ui.fab1.on("long_click", () => {
    ui.web1.loadUrl(getHomeUrl())
});
ui.fab1.on("click", () => {
    clickVdum()
});
function clickVdum() {
threads.start(function(){
      text("hym").exists()&&text("vdum").exists()&&text("vdum").findOne().click()
});
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

function buildMenuItem(menu, title, icon) {
    let menuItem = menu.add(title);
    menuItem.setIcon(icon);
    return menuItem;
}

ui.web1.getSettings().setJavaScriptEnabled(true);
setTimeout(() => { ui.web1.loadUrl("http://localhost:" + config.port + "/") }, 3000)

ui.web2.getSettings().setJavaScriptEnabled(true);
setTimeout(() => { ui.web2.loadUrl("http://localhost:" + config.port + "/") }, 3000)

ui.web3.getSettings().setJavaScriptEnabled(true);
setTimeout(() => { ui.web3.loadUrl("http://localhost:" + config.port + "/") }, 3000)

ui.web4.getSettings().setJavaScriptEnabled(true);
setTimeout(() => { ui.web4.loadUrl("http://localhost:" + config.port + "/") }, 3000)

let ah_drbz_jhjh = true
let vnwm_afdh = []
vnwm_afdh.push(XITL_AFDH("jhjh_uu", function (context, intent, data) {
    if (ah_drbz_jhjh) {
        ah_drbz_jhjh = false
        try {
            engines.execScriptFile(workingDirectory + '/uis/ouss_jhjh.js')
        } catch (error) {
            toast(error)
        }
        setTimeout(() => {
            ah_drbz_jhjh = true
        }, 1000)
    }

}))

vnwm_afdh.push(XITL_AFDH("uis", function (context, intent, data) {
    try {
        engines.execScriptFile(workingDirectory + '/uis/uis.js')
    } catch (err) {
        toast(err)
        console.error(err)
    }
}))

vnwm_afdh.push(XITL_AFDH("zk_aucc_crum", function () {
    ui.finish()
}))
events.on('exit', () => {
    destroy(vnwm_afdh)
})