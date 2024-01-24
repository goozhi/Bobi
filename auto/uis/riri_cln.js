
//破解，源码出售，定制担保。诚信合作微信:zxkj6898 或zx033245   或QQ168196007 
"ui";
let vnwm_web
ui.statusBarColor("#1E1E1E");
ui.layout(
    <vertical>
        <frame margin="-5" id="scfo">
            <horizontal>
            <button layout_gravity="left" id="search_but" w="auto" hint="进入"/>
            <input layout_gravity="right" id="input" hint="请输入网址" maxLines="1" inputType="textUri" />
            </horizontal>
        </frame>
        <frame>
            <text id="text" w="*" gravity="center" maxLines="1" ellipsize="end"/>
            <progressbar id="progress" w="*" h="auto" indeterminate="true" layout_gravity="top" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal"/>
        </frame>
        <frame layout_weight="1">
            <webview id="web_1" w="*" h="*"/>
            <webview id="web_2" w="*" h="*"/>
            <webview id="web_3" w="*" h="*"/>
            <webview id="web_4" w="*" h="*"/>
            <list id="list" w="90dp" h="*" bg="#346489" layout_gravity="right">
                <text w="*" h="50" text="{{txt}}" textSize="16sp" bg="#dddddd" margin="5" gravity="center"/>
            </list>
        </frame>
        <frame w="*">
            <button id="rz_web" w="150" text="web_2" layout_gravity="left"/>
            <button id="center" w="auto" text="[web_1]" layout_gravity="center"/>
            <button id="sb_web" w="auto" text="web_3" layout_gravity="right"/>
        </frame>
    </vertical>
);

ui.list.setVisibility(8);
ui.scfo.setVisibility(8);
var listArray = [
    {
        txt: "Bobi",
        url: "http://localhost:9000"
    },
    {
        txt: "mb",
        ac_tnoy: "http://localhost:9000",
        func:()=>{
        get_pcdb_web().goBack();
        }
    },
    {
        txt: "tt",
        ac_tnoy: "http://localhost:9000",
        func:()=>{
        get_pcdb_web().goForward();
        }
    },
    {
        txt: "Bobi/afoa",
        url: "http://localhost:9000/afoa"
    },
    {
        txt: "Bobi/afoa-net",
        url: "http://localhost:9000/afoa-net"
    },
    {
        txt: "web_1",
        func:()=>{
        enable(0)
        }
    },
    {
        txt: "web_2",
        func:()=>{
        enable(1)
        }
    },
    {
        txt: "web_3",
        func:()=>{
        enable(2)
        }
    },
    {
        txt: "web_4",
        func:()=>{
        enable(3)
        }
    },
        {
        
        txt: "scfo",
        func:()=>{
        ui.scfo.setVisibility(0)
        }
    },
    {
        
        txt: "scfo-hs",
        func:()=>{
        ui.scfo.setVisibility(8)
        }
    },

        {
        txt: "日志",
        func
        : ()=>{
        app.startActivity("console");
        }
    },

    {
        func: ()=>{
                    var script_2 = "require('/sdcard/脚本/UyzjEd.js')"
            var execution3 = engines.execScript("Uyzj Ed", script_2,
                {
                    path: "/sdcard/脚本/"
                })
                },
        txt: "工具箱"
    },
    {
        url: "http://www.runoob.com/jsref/jsref-obj-number.html",
        txt: "number"
    },
    {
        url: "http://www.runoob.com/jsref/jsref-obj-regexp.html",
        txt: "regexp"
    },
    {
        url: "http://www.runoob.com/jsref/jsref-obj-string.html",
        txt: "string"
    }

];

ui.list.setDataSource(listArray);
vnwm_web=[ui.web_1,ui.web_2,ui.web_3, ui.web_4]
function get_pcdb_web(){
return vnwm_web.find(rn1=>rn1.getVisibility()===0)
}
function enable(num){
num=num||0
vnwm_web.forEach(rn1=>{
rn1.setVisibility(8)
})
vnwm_web[num].setVisibility(0)
vnwm_web[num].requestFocusFromTouch()
let nixb_gtfs_rjse=`[web_${(num+1)}]`
ui.center.setText(nixb_gtfs_rjse)

}

var url = "http://localhost:9000";
//var url = "file:///storage/emulated/0/网页/试.html";
ui.web_1.loadUrl(url);
ui.web_2.loadUrl(url);
ui.web_3.loadUrl(url);
ui.web_4.loadUrl(url);
ui.web_2.setVisibility(8)
ui.web_3.setVisibility(8)
ui.web_4.setVisibility(8)
ui.input.setText(url)
setInterval(() => {
    var P = get_pcdb_web().getProgress();
    var T = get_pcdb_web().getTitle();
    if (P == 100) {
        ui.run(() => {
            ui.progress.setVisibility(8);
        });
    } else {
        ui.run(() => {
            ui.progress.setVisibility(0);
        });
    };
    ui.run(() => {
        ui.text.setText(String(T));
    });
}, 100);


var isCanFinish = false;
var isCanFinishTimeout;
ui.emitter.on("back_pressed", e => {
    if (get_pcdb_web().canGoBack()) {
        if (!isCanFinish) {
            isCanFinish = true;
            isCanFinishTimeout = setTimeout(() => {
                toastLog("双击退出");
                isCanFinish = false;
            }, 400);
            ui.run(() => {
                get_pcdb_web().goBack();
            });
            e.consumed = true;
        } else {
            clearTimeout(isCanFinishTimeout);
            e.consumed = false;
        };
    } else {
        isCanFinishTimeout&&clearTimeout(isCanFinishTimeout);
        e.consumed = false;
    };
});



ui.list.on("item_click", function(item, i) {
if(item.func){
item.func()
if(item.ac_tnoy){
}else{
    ui.list.setVisibility(8);
}
}else{
    ui.run(() => {
    get_pcdb_web().loadUrl(String(item.url));
    });
    ui.list.setVisibility(8);
}

});

ui.search_but.click(function(v) {
    var T = String(ui.input.getText()).trim();
    if (T) {
        ui.run(() => {
            get_pcdb_web().loadUrl(String(T));
        });
    };
});

ui.text.click(function(v) {
    var T = String(get_pcdb_web().getUrl());
    threads.start(function() {
        switch (dialogs.select("操作", ["刷新当前页面", "复制当前网址"])) {
            case 0:
                ui.run(() => {
                    get_pcdb_web().reload();
                });
                break;
            case 1:
                setClip(T);
                toast("已复制\n" + T);
                break;
        };
    });
});
let isLongClick
ui.center.on("long_click",function(){
        ui.run(() => {
        isLongClick=true
            ui.rz_web.click()
        });
})

ui.center.on("click",function(v) {
    if(isLongClick){
    isLongClick=false
    return
    }
    if (ui.list.visibility == 8) {
        ui.run(() => {
            ui.list.setVisibility(0);
        });
    } else {
        ui.run(() => {
            ui.list.setVisibility(8);
        });

    };
});
ui.rz_web.on("click",function(){
webodrg("rz")
})
ui.sb_web.on("click",function(){
webodrg("sb")
})

function webodrg(fr1){
let diwr_fr={
rz:()=>{
return (ui.rz_web)
},
sb:()=>{
return (ui.sb_web)
}
}
let nixb_rjse = String(diwr_fr[fr1]().getText())
let center_rjse = ui.center.getText().toString()
enable(Number(nixb_rjse.match(/\d+/)[0])-1)
//ui.center.setText(`[${nixb_rjse}]`)
diwr_fr[fr1]().setText(center_rjse.replace(/\[|\]/g,""))
}
