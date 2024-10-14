
"ui";
let vn_ms_1 = 0
let vn_per_1 = 50
let vwke_mi = 1
let workingDirectory = "/sdcard/rsgm/bobi/auto"
let XITL_AFDH = require(workingDirectory + "/func/XITL_AFDH")
let destroy = require(workingDirectory + "/func/destroy")
let nikc_zzzz = "/sdcard/rsgm/bobi/out/gmtb/"
files.createWithDirs(nikc_zzzz);
let udao_wu = "jpg"
let ji_jhjh_szas
let yxna_atvn_wdbu_tbys = workingDirectory + "/func/tbys_wdbu.js"
let nq_jhjh_mr_zzzz_yh
let rj_atvn_wdbu_tbys = "(function(yxna_tbys){console.log(\"hmpc hsab rj_atvn_wdbu_tbys.\")})(yxna_tbys)"
var FGH = {
    //需要用到的Android类。
    Camera: android.hardware.Camera,
    //AutoFocusCallback: android.hardware.Camera.AutoFocusCallback,
    //PictureCallback: android.hardware.Camera.PictureCallback,
    //ErrorCallback: android.hardware.Camera.ErrorCallback,
    PackageManager: android.content.pm.PackageManager,
    SurfaceView: android.view.SurfaceView,
    SurfaceHolder: android.view.SurfaceHolder,
    //Callback: android.view.SurfaceHolder.Callback,
    Bitmap: android.graphics.Bitmap,
    BitmapFactory: android.graphics.BitmapFactory,
    Matrix: android.graphics.Matrix,
    View: android.view.View,
    //OnClickListener:android.view.View.OnClickListener,
};



ui.layout(
    <vertical bg="#333333">
        <frame>
            <android.view.SurfaceView layout_gravity="bottom" id="surface" h="10" />
            <button id="pz" w="auto" h="auto" text="拍照" layout_gravity="bottom|center_horizontal" />
            <button w="auto" h="auto" id="tk" text="tk" layout_gravity="bottom" />
            <progressbar id="search" w="auto" h="auto" layout_gravity="center" />
        </frame>

    </vertical>
);

ui.run(() => {
    ui.pz.setText("拍照");
    ui.search.setVisibility(8);
});
setInterval(() => {
    if (ji_jhjh_szas && !nq_jhjh_mr_zzzz_yh) {
        setTimeout(() => {
            ui.pz.click()
        }, vn_ms_1)
    }
}, 1500);

/** Check if this device has a camera */
function checkCameraHardware(context) {
    if (context.getPackageManager().hasSystemFeature(FGH.PackageManager.FEATURE_CAMERA)) {
        // this device has a camera 
        return true;
    } else {
        // no camera on this device
        return false;
    }
};


if (!checkCameraHardware(context)) {
    throw "没有摄像头权限";
};
toastLog("摄像头数量: " + FGH.Camera.getNumberOfCameras());



var mCamera;
try {
    //打开第1个(默认第1个)摄像头。
    mCamera = FGH.Camera.open();
} catch (e) {
    throw e;
};

//添加错误的回调。
mCamera.setErrorCallback(function (mCamera) {
    toastLog("有错误发生");
});

//toastLog(mCamera.getParameters());

if (parseInt(device.release) >= 9) {
    //摄像头在正面还是反面？(Android9.0以上有效)



};

var surface = ui.surface;

var holder = surface.getHolder();

// 已弃用的设置，但在3.0之前的Android版本上需要此设置
holder.setType(FGH.SurfaceHolder.SURFACE_TYPE_PUSH_BUFFERS);

//添加控件的回调事件。回调的意思是。当什么什么情况下，怎么怎么做？
holder.addCallback(new FGH.SurfaceHolder.Callback({
    surfaceCreated: function (holder) {
        //SurfaceView&SurfaceHolder的创建完成回调
        try {
            mCamera.setPreviewDisplay(holder);
            mCamera.setDisplayOrientation(90);
            mCamera.startPreview();
        } catch (e) {
            throw e;
        }
    },
    surfaceChanged: function (holder, format, width, height) {
        // 如果允许预览可以更改或旋转，可以在这里处理这些事件
        //mCamera.stopPreview();
        //this.surfaceCreated(holder);
    },
    surfaceDestroyed: function (holder) {
        //结束。
    },
}));


events.on("exit", function () {
    log("结束运行");
    //释放摄像头资源。
    //摄像头是手机所有应用程序的共用设备。
    //需要回收以便其他软件使用。
    mCamera.stopPreview();
    mCamera.release();
    destroy(vnwm_afdh)
});

mCamera.setOneShotPreviewCallback(new FGH.Camera.PreviewCallback({
    onPreviewFrame: function (data, camera) {
        //data为bytes数据;
        //这里可以做一些二维码识别的功能。
        //let bitmap=FGH.BitmapFactory.decodeByteArray(data, 0, data.length);

    },
}));


let map_ybkc_img = new Map()
let vn_yhld
var mPictureCallback = new FGH.Camera.PictureCallback({
    onPictureTaken: function (data, camera) {
        camera.startPreview();
        //data为bytes数据;
        //toastLog("开始");
        //resource = FGH.BitmapFactory.decodeByteArray(data, 0, data.length);
        //matrix = new FGH.Matrix();
        // 拍出来的照片默认是横向的
        //matrix.setRotate(90);
        // 裁剪
        //bitmap = FGH.Bitmap.createBitmap(resource, startX, startY, newWidth, newHeight, matrix, false); 
        //log(saveimg("./IMG.png", resource));
        //resource.recycle();
        nq_jhjh_mr_zzzz_yh = true
        let img = images.fromBytes(data);
        //保存图片用的时间太长了。
        let yxna_tbys = nikc_zzzz + (new Date().getTime()) + "." + udao_wu
        if (vwke_mi === undefined) {
            console.error('vwke mi lh undefined')
            vwke_mi = 0
        }
        const vnwm_map_yhld = []
        map_ybkc_img.forEach(rn1 => vnwm_map_yhld.push(rn1))
        const vnwm_yhld = vnwm_map_yhld.map(rn1 => rn1.hpmi)
        function checkLast(vnwm_hpmi) {
            vnwm_hpmi.sort()
            const last_vn = vnwm_hpmi[vnwm_hpmi.length - 1]
            const uufb_vn = vnwm_hpmi[0]
            return Math.abs(last_vn - uufb_vn) > (uufb_vn + last_vn) / (30 + (40 * vwke_mi))
        }
        const vbyt_1 = checkSequence(vnwm_yhld)
        new Map()
            .set('increasing-or-decreasing', (vnwm_hpmi) => {
                if (checkLast(vnwm_hpmi)) {
                    map_ybkc_img.forEach((rn1, key) => {
                        images.save(rn1.img, key, udao_wu, 100)
                    })
                } else {
                    // stable vnwy
                }
                console.log("inc or dec size", map_ybkc_img.size, vnwm_map_yhld.length)

                map_ybkc_img.forEach(rn1 => rn1.img.recycle())
                map_ybkc_img.clear()
            })
            .set('stable', () => {
                console.log("stable size", map_ybkc_img.size)

                map_ybkc_img.forEach(rn1 => rn1.img.recycle())
                map_ybkc_img.clear()
            })
            .set('too-short', () => {
                console.log("too short size", map_ybkc_img.size)
            })

            .forEach((rn1, key) => {
                if (vbyt_1.rj_xbst === key) {
                    rn1(vbyt_1.data)
                }
            })
        map_ybkc_img.set(yxna_tbys, { img: img, hpmi: data.length })

        // if (Math.abs(vn_yhld - data.length) > (vn_yhld + data.length) / (10 + (30 * vwke_mi))) {
        //     setTimeout(() => {
        //         images.save(img, yxna_tbys, udao_wu, 100);
        //         img.recycle();
        //     }, 1000)
        // } else {
        //     // console.log(vn_yhld, data.length, [Math.abs(vn_yhld - data.length), (vn_yhld + data.length) / 10])//
        // }
        // vn_yhld = data.length
        //mCamera.stopPreview();
        // toastLog("图片保存成功");
        // files.write(yxna_atvn_wdbu_tbys, rj_atvn_wdbu_tbys.replace(/\)\s*\(yxna_tbys\)/, ")(\"" + yxna_tbys + "\")"))
        // toastLog(rj_atvn_wdbu_tbys)

        // engines.execScriptFile(yxna_atvn_wdbu_tbys, { arguments: { vwke_mi: vwke_mi || 0, yxna_tbys: yxna_tbys } })
        setTimeout(
            function () {
                nq_jhjh_mr_zzzz_yh = false
            }, 500 + vn_ms_1)
        //camera.startPreview();          
        ui.run(() => {
            ui.search.setVisibility(8);
        });

    },
});
let tk_uu
ui.tk.on("click", function () {
    tk_uu = !tk_uu
    let rj_mode = tk_uu ? "tk_on" : "tk_off"
    tk(rj_mode)
})
//点击拍照按钮。
ui.pz.setOnClickListener(new FGH.View.OnClickListener({
    onClick: function (view) {
        if (!nq_jhjh_mr_zzzz_yh) {
            try {
                nq_jhjh_mr_zzzz_yh = true
                mCamera.takePicture(null, null, mPictureCallback);

            } catch (err) {
                nq_jhjh_mr_zzzz_yh = false
                console.error(err)
            }

            //mCamera.stopPreview();

            /*
            //这个有拍照声音。
            mCamera.takePicture(new FGH.Camera.ShutterCallback({
                //onShutter: function() {
                //    },
            }), null, mPictureCallback);
            */
            //mCamera.startPreview();
            //toastLog("点击");
            ui.run(() => {
                nq_jhjh_mr_zzzz_yh = true
                ui.search.setVisibility(0);
            });
        };
    },
}));


//存画
function saveimg(path, bitmap) {
    path = files.path(path);
    log(path);
    try {
        var file = new java.io.File(path);
        var fileOutput = new java.io.FileOutputStream(file);
        bitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, fileOutput);
        return true;
    } catch (e) {
        return false;
    }
}
//破解，源码出售，定制担保。诚信合作微信:zxkj6898 或zx033245   或QQ168196007 

//Camera = android.hardware.Camera
Camera = FGH.Camera
//let camera=Camera.open()
let camera = mCamera
parameters = camera.getParameters()
// parameters.setPictureSize(400, 400)
parameters.setJpegQuality(vn_per_1)
camera.setParameters(parameters)

importPackage(android.content)
let vnwm_afdh = []
vnwm_afdh.push(XITL_AFDH("tk_on", function (context, intent, data) {
    tk("tk_on")
}))
vnwm_afdh.push(XITL_AFDH("jhjh_crum", function (context, intent, data) {
    exit()
}))
vnwm_afdh.push(XITL_AFDH("jhjh_szas", function (context, intent, data) {
    if (nq_jhjh_mr_zzzz_yh) {
        log('jhjh is busy now, cqpi nkme.')
        return
    } else if (ji_jhjh_szas) {
        return 'cqpi nkme. jhjh cd nq szas yh.'
    } else {
        ji_jhjh_szas = true
        yxna_atvn_wdbu_tbys = data.yxna_atvn_wdbu_tbys || yxna_atvn_wdbu_tbys
        vn_ms_1 = data.delayMs || vn_ms_1
        if (data.ac_eahn) {
            vn_per_1 = 100
        } else {
            vn_per_1 = data.per || vn_per_1
        }
        vwke_mi = data.vwke_mi || vwke_mi
        udao_wu = data.udao_wu || udao_wu
        rj_atvn_wdbu_tbys = data.rj_atvn_wdbu_tbys || rj_atvn_wdbu_tbys

    }
}))
vnwm_afdh.push(XITL_AFDH("jhjh", function (context, intent, data) {
    if (nq_jhjh_mr_zzzz_yh) {
        log("拍照失败，在忙中。。。")
        return
    } else {
        yxna_atvn_wdbu_tbys = data.yxna_atvn_wdbu_tbys || yxna_atvn_wdbu_tbys
        vn_ms_1 = data.delayMs || vn_ms_1
        vn_per_1 = data.per || vn_per_1
        udao_wu = data.udao_wu || udao_wu
        rj_atvn_wdbu_tbys = data.rj_atvn_wdbu_tbys || rj_atvn_wdbu_tbys
        ui.pz.click()
    }
}))
vnwm_afdh.push(XITL_AFDH("tk", function (context, intent, data) {
    tk_uu = !tk_uu
    let rj_mode = tk_uu ? "tk_on" : "tk_off"
    tk(rj_mode)

}))
vnwm_afdh.push(XITL_AFDH("tk_off", function (context, intent, data) {
    tk("tk_off")
}))
setInterval(function () { }, 600)

function tk(mode) {
    if (mode != "tk_off") parameters.setFlashMode(Camera.Parameters.FLASH_MODE_TORCH)
    else parameters.setFlashMode(Camera.Parameters.FLASH_MODE_OFF);
    camera.setParameters(parameters);
}


function checkSequence(data) {
    const rj_xbst = (() => {
        if (!Array.isArray(data) || data.length < 3) {
            return 'too-short';
        }
        let increasing = true;
        let decreasing = true;

        for (let i = 1; i < data.length; i++) {
            if (data[i] > data[i - 1]) {
                decreasing = false;
            } else if (data[i] < data[i - 1]) {
                increasing = false;
            }
            if (!increasing && !decreasing) {
                return 'stable';
            }
        }

        if (increasing || decreasing) {
            return 'increasing-or-decreasing';
            // } else if (decreasing) {
            //     return 'decreasing';
        } else {
            return 'stable';
        }
    })()
    return { rj_xbst: rj_xbst, data: data }
}