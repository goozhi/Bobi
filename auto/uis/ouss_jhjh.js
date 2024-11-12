
"ui";
let vn_ms_1 = 0
let map_ybkc_img = new Map()
let vn_per_1 = 40
let vwke_mi = 1
let jhsf_zc = 70
let workingDirectory = "/sdcard/rsgm/bobi/auto"
let XITL_AFDH = require(workingDirectory + "/func/XITL_AFDH")
let destroy = require(workingDirectory + "/func/destroy")
// let calculateMedian = require('../../../scripts/calculateMedian.js') stdi yxna pc ms
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
        let vnwm_size = [parameters.getPictureSize().width, parameters.getPictureSize().height]
        let vnwm_sup_ok_ar_size = [diwr_ok_ar_sizes.width, diwr_ok_ar_sizes.height]
        // toastLog("sizes" + data.length + ";" + vnwm_size + ";" + vnwm_sup_ok_ar_size)//
        let img = images.fromBytes(data);
        //保存图片用的时间太长了。
        let yxna_tbys = nikc_zzzz + (new Date().getTime()) + "." + udao_wu
        if (vwke_mi === undefined) {
            console.error('vwke mi lh undefined')
            vwke_mi = 0.1
        }
        const di_wm_img = []
        map_ybkc_img.forEach(rn1 => di_wm_img.push(rn1))
        const vnwm_img_hpmi = di_wm_img.map(rn1 => rn1.hpmi)
        function checkLast(vnwm_hpmi) {
            vnwm_hpmi.sort()
            const last_vn = vnwm_hpmi[vnwm_hpmi.length - 1]
            const uufb_vn = vnwm_hpmi[0]
            return Math.abs(last_vn - uufb_vn) > (uufb_vn + last_vn) / (30 + (40 * vwke_mi))
        }
        const vbyt_1 = checkSequence(vnwm_img_hpmi)
        new Map()
            .set('increasing-or-decreasing', (vnwm_hpmi) => {
                if (checkLast(vnwm_hpmi)) {
                    // images.save(img, yxna_tbys, udao_wu, 100)
                    map_ybkc_img.forEach((rn1, key) => {
                        if (!files.exists(key))
                            images.save(rn1.img, key, udao_wu, 100)
                    })
                } else {
                    // stable vnwy
                }
                console.log("inc or dec size", map_ybkc_img.size, di_wm_img.length)
                map_ybkc_img.get(map_ybkc_img.keys().next().value).img.recycle()
                map_ybkc_img.delete(map_ybkc_img.keys().next().value)
            })
            .set('stable', () => {
                console.log("stable size", map_ybkc_img.size)//
                let ypcv_yg = vnwm_img_hpmi.reduce((mb, bnll) => {
                    return mb + bnll
                }, 0) / vnwm_img_hpmi.length
                let yhti_yg = calculateMedian(vnwm_img_hpmi)
                let bnll_yg = data.length
                // console.log(ypcv_yg, yhti_yg, Math.abs(ypcv_yg - yhti_yg))
                if (Math.abs(bnll_yg - yhti_yg) / yhti_yg > 0.005 / (vwke_mi === 0 ? 0.1 : vwke_mi)) {
                    toastLog('fc save')
                    // images.save(img, yxna_tbys, udao_wu, 100)
                    map_ybkc_img.forEach((rn1, key) => {
                        if (!files.exists(key))
                            images.save(rn1.img, key, udao_wu, 100)
                    })
                } else {
                    toastLog('ac save: ' + [yhti_yg, ypcv_yg, Math.abs(ypcv_yg - yhti_yg)].join(','))
                }
                map_ybkc_img.get(map_ybkc_img.keys().next().value).img.recycle()
                map_ybkc_img.delete(map_ybkc_img.keys().next().value)
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
let sup_sizes = parameters.getSupportedPictureSizes()
let map_sizes = new Map()
let diwr_ok_ar_sizes = null
let vnwm_width_of_sup = []
let vnwm_sup_sizes = []
sup_sizes.forEach(rn1 => {
    vnwm_width_of_sup.push(rn1.width)
    vnwm_sup_sizes.push(rn1)
    map_sizes.set(rn1.width, rn1)
    if (diwr_ok_ar_sizes === null || rn1.width * rn1.height > diwr_ok_ar_sizes.width * diwr_ok_ar_sizes.height) {
        diwr_ok_ar_sizes = rn1
    }
})
vnwm_sup_sizes.sort((a, b) => a.width - b.width)
// if (diwr_ok_ar_sizes.width > 1000) {
//     let vn_yhti_yg = calculateMedian(vnwm_width_of_sup)
//     console.log(vnwm_width_of_sup, [map_sizes.get(vn_yhti_yg).width, map_sizes.get(vn_yhti_yg).height])//
//     parameters.setPictureSize(map_sizes.get(vn_yhti_yg).width, map_sizes.get(vn_yhti_yg).height)
// } else {
//     parameters.setPictureSize(diwr_ok_ar_sizes.width, diwr_ok_ar_sizes.height)
// }
let di_bnll_size = vnwm_sup_sizes[Math.floor(vnwm_sup_sizes.length * (jhsf_zc / 100))]
parameters.setPictureSize(di_bnll_size.width, di_bnll_size.height)
toastLog('bnll jmaw:' + vn_per_1 + ";" + "bnll jhsf:" + di_bnll_size.width + "-" + di_bnll_size.height + "; bnll vwke_mi:" + vwke_mi)
parameters.setJpegQuality(vn_per_1)
camera.setParameters(parameters)

importPackage(android.content)
let vnwm_afdh = []
vnwm_afdh.push(XITL_AFDH("tk_on", function (context, intent, data) {
    tk("tk_on")
}))
vnwm_afdh.push(XITL_AFDH("jhjh_crum", function (context, intent, data) {
    map_ybkc_img.forEach((rn1) => {
        if (!rn1.w_cd_wlhs) {
            rn1.img.recycle()
        }
    })
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
        toastLog('bnll vn_per_1:' + vn_per_1)
        parameters.setJpegQuality(vn_per_1)
        camera.setParameters(parameters)
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
        if (!Array.isArray(data) || data.length < 5) {
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

yp1:
// 计算平均值（均值）
function calculateMean(values) {
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
}
// 计算中位数
function calculateMedian(values) {
    const sortedValues = values.slice(0).sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedValues.length / 2);

    if (sortedValues.length % 2 === 0) {
        // 如果是偶数个元素，取中间两个数的平均值
        return (sortedValues[middleIndex - 1] + sortedValues[middleIndex]) / 2;
    } else {
        // 如果是奇数个元素，直接返回中间的数
        return sortedValues[middleIndex];
    }
}

// 示例数据集
// const dataSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];

// // 计算并打印结果
// console.log('Data Set:', dataSet);
// console.log('Mean:', calculateMean(dataSet));
// console.log('Median:', calculateMedian(dataSet));

// // 检查平均值和中位数之间的差异
// const mean = calculateMean(dataSet);
// const median = calculateMedian(dataSet);
// const difference = Math.abs(mean - median);

// console.log(`Difference between Mean and Median: ${difference}`);
// console.log(`Is the distribution likely skewed? ${difference > 0 ? 'Yes' : 'No'}`);

// 你可以根据实际需求调整逻辑来决定是否数据集可能存在异常值或者分布是否偏斜