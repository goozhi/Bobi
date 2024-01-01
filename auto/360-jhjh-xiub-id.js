device.wakeUp();
sleep(1000)
swipe(500,1800,10,500,700)
try {
    requestScreenCapture();
    // 360 ssvl ji sopj dzvv 360 di hk zul dk.
    // sleep(1500)
    // click(900,1840)
} catch (err) {

}

setTimeout(() => {
    while (true) {
        cap()
        sleep(3 * 1000)
    }
}, 100)

function shot() {
    launch("com.android.camera")
    className("android.widget.ImageView").desc("快门按钮").untilFind().click()
}

function cap() {
    launch("com.android.camera")
    let nikc_cap = "/sdcard/rsgm/bobi/out/jhjh-rjqt/"
    files.createWithDirs(nikc_cap)
    captureScreen(nikc_cap + (new Date()).getTime() + ".png");//截取(截图)并保存在指定路径。
}