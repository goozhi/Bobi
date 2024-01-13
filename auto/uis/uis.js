"ui";


const workingDirectory = "/sdcard/rsgm/bobi/auto"
let destroy = require(workingDirectory + "/func/destroy");
let XITL_AFDH = require(workingDirectory + "/func/XITL_AFDH.js")
ui.layout(
    <vertical>
        <list id="uis">
            <text text="{{this.uiname}}" />
        </list>
        <button text="reflush" id="reflush" />
    </vertical>
)
const diwr_ybkc = {}
const vnwm_uis = nwvt_ui(diwr_ybkc)
ui.reflush.on('click', function () {
    const vnwm_2 = nwvt_ui(diwr_ybkc)
    vnwm_uis.splice(0, vnwm_uis.length)
    vnwm_2.forEach(rn1 => {
        vnwm_uis.push(rn1)
    })
    toast('Cd flush.')
})
ui.uis.setDataSource(vnwm_uis);
ui.uis.on('item_click', function (item, i, itemView, listView) {
    try {
        engines.execScriptFile(workingDirectory + "/uis/" + item.uiname)
    } catch (err) {
        toast(err)
        console.error(err)
    }
})
const vnwm_afdh = []
vnwm_afdh.push(XITL_AFDH('uis_off', function () {
    exit()
}))
events.on('exit', () => {
    destroy(vnwm_afdh)
})
function nwvt_ui(diwr_ybkc) {
    diwr_ybkc = diwr_ybkc || {}
    const vnwm_1 = files.listDir(workingDirectory + "/uis").filter(rn1 => /\.js$/.test(rn1)).map(rn1 => {
        diwr_ybkc[rn1] = true
        return { uiname: rn1 }
    })
    return vnwm_1

}