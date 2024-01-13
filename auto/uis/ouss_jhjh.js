
"ui";
let vn_ms_1 = 0
let vn_per_1 = 70
let workingDirectory = "/sdcard/rsgm/bobi/auto"
let XITL_AFDH = require(workingDirectory + "/func/XITL_AFDH")
let destroy = require(workingDirectory + "/func/destroy")
let nikc_zzzz = "/sdcard/rsgm/bobi/out/gmtb/"
files.createWithDirs(nikc_zzzz);
let udao_wu = "jpg"
let ji_jhjh_szas
let yxna_atvn_wdbu_tbys = "/sdcard/rsgm/bobi/out/tmp.ouss_jhjh.node.js"
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
    <vertical>
        <frame>
            <android.view.SurfaceView id="surface" />
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
        ui.pz.click()
    }
}, 2000);

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
        images.save(img, yxna_tbys, udao_wu, vn_per_1);
        img.recycle();
        //mCamera.stopPreview();
        toastLog("图片保存成功");
        files.write(yxna_atvn_wdbu_tbys, rj_atvn_wdbu_tbys.replace(/\)\s*\(yxna_tbys\)/, ")(\"" + yxna_tbys + "\")"))
        engines.execScriptFile(yxna_atvn_wdbu_tbys)
        setTimeout(
            function () {
                nq_jhjh_mr_zzzz_yh = false
            }, 1000)
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

importPackage(android.content)
let vnwm_afdh = []
vnwm_afdh.push(XITL_AFDH("tk_on", function (context, intent, data) {
    tk("tk_on")
}))
vnwm_afdh.push(XITL_AFDH("jhjh_crum", function (context, intent, data) {
    exit()
}))
vnwm_afdh.push(XITL_AFDH("jhjh_szas", function () {
    if (nq_jhjh_mr_zzzz_yh) {
        log('jhjh is busy now, cqpi nkme.')
        return
    } else if (ji_jhjh_szas) {
        return 'cqpi nkme. jhjh cd nq szas yh.'
    } else {
        ji_jhjh_szas = true
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
