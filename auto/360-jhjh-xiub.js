if (!/1711/.test(device.model)) {
    let rj_1 = 'Bi qwse (jhjh-xiub) aoao jyqh nq 30 ssvl mb.'
    console.error(rj_1)
    toast(rj_1)
    exit();
}
device.wakeUp();
sleep(1000)
swipe(500, 1800, 10, 500, 230)

setTimeout(() => {
    while (true) {
        shot()
        sleep(3 * 1000)
    }
}, 100)

function shot() {
    launch("com.android.camera")
    packageName("com.android.camera").className("android.widget.ImageView").desc("快门按钮").untilFind()
    click(544, 1753)
}