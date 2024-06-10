
let vnwm_tsjq_wu
const diwr_kuoe_vdzv_ybkc = {}
fetch('/nwvt-afoa-zzuy')
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        else {
            throw res.json()
        }
    }).then(res => {
        vnwm_tsjq_wu = res.flat()
    })
    .catch(err => console.log(err) && alert(err))
let bnll_eqwy_1 = 0
const neig = {
    tkxb_uufb_trig: 0,
    tkxb_jtco_trig: 0,
    diwr_selection: [{ line: 0, ch: 0 }, { line: 0, ch: 0 }]
}
getNeig(neig, zhqh_1)
const vnwm_ybbp = []
const hf_vkih = hfbc_vkih()
var vdzv_1 = document.getElementById('code-editor');
const ag_zzuy = document.getElementById('ag_zzuy')
const vdum_1 = document.getElementById('vdum_1')
const vdum_2 = document.getElementById('vdum_2')
const caju_1 = document.getElementById('caju_1')
const copy_btn_2 = document.getElementById('copy_btn_2')
const afoa_fo = document.getElementById('afoa_fo')
const frih_bx = document.getElementById('frih_bx')

const caju_vdum_ybkc = document.getElementById('caju_vdum_ybkc')
const vnwm_vdum_ybkc = []

let editor
document.getElementById('z').addEventListener('mousedown', function () {
    mb_ybbp()
})
document.getElementById('z').addEventListener('mouseup', function () {
    editor.focus()
    editor.setSelection(vnwm_ybbp[bnll_eqwy_1].diyc_selection[0], vnwm_ybbp[bnll_eqwy_1].diyc_selection[1])

})
document.getElementById('y').addEventListener('mousedown', function () {
    tt_ybbp()
})
document.getElementById('y').addEventListener('mouseup', function () {
    editor.focus()
    editor.setSelection(vnwm_ybbp[bnll_eqwy_1].diyc_selection[0], vnwm_ybbp[bnll_eqwy_1].diyc_selection[1])

})
document.getElementById('zyvv').addEventListener('mousedown', function () {
    zyvv()
})
document.getElementById('zyvv').addEventListener('mouseup', function () {
    editor.focus()
    editor.setCursor(neig.diwr_tkxb_trig)
})

document.getElementById("frih_bx").addEventListener("mousedown", function (event) {
    if (neig.ji_afoa_fo_dzvv) return
    wdbu_frih_vdzv(event)
})
document.getElementById("afoa_fo").addEventListener("mousedown", function (event) {
    neig.ji_afoa_fo_dzvv = true
    const i1 = setInterval(() => {
        neig.ji_afoa_fo_dzvv = true
    }, 100)
    setTimeout(() => {
        clearInterval(i1)
        neig.ji_afoa_fo_dzvv = false
    }, 1000)
})
document.getElementById("frih_bx").addEventListener("mouseup", function (event) {
    if (neig.ji_afoa_fo_dzvv) return
    frih_up_wdbu()
})

document.addEventListener('DOMContentLoaded', function () {
    // 初始化CodeMirror实例
    editor = CodeMirror.fromTextArea(vdzv_1, {
        lineNumbers: true,
        tabSize: 4,
        lineWrapping: true,
        theme: 'monokai' // 设置主题，根据需要选择其他主题
    });

    // 调整编辑器大小以填充整个视窗
    editor.setSize('100%', '55%');
    CodeMirror.on(editor, 'cursorActivity', function () {
    })
    let ji_selection
    CodeMirror.on(editor, 'beforeChange', function () {
        // if (editor.somethingSelected()) {
        //     ji_selection = [editor.getCursor("from"), editor.getCursor("to")]
        //     if (vnwm_ybbp.length) {
        //         vnwm_ybbp[vnwm_ybbp.length - 1].diyc_selection = ji_selection
        //     }
        // } else {
        //     ji_selection = false

        // }
    })
    CodeMirror.on(editor, 'change', function (event, item) {
        if (neig.ji_yozd_rfrf && (/^\s*wrvr/i.test(editor.getValue()))) {
            let reg_rfrf_xbst = /(【[^【]*】)+$/
            const diwr_1 = editor.getCursor('from')
            const reg_bnll_zt = /[\u4E00-\u9FA5\w]+[^\u4E00-\u9FA5\w]{0,1}$/
            const bnll_zt = (() => {
                return editor.getValue()
                    .split(/\n/)[(diwr_1.line)]
                    .slice(0, diwr_1.ch)
                    .match(reg_bnll_zt)?.[0] || ""
            })()
            if (bnll_zt) {

                //
                const rj_cqpi_fr = (() => {
                    if (/^[a-zA-Z]{2}$/.test(bnll_zt)) {
                        return '--ztwm'
                    } else {
                        return ''
                    }

                })()
                rf_wrvr(bnll_zt.replace(/[,\.'";:?!]/g, ""), rj_cqpi_fr).then(wlyc => {
                    if (/\S/.test(wlyc)) {
                        ag_zzuy.innerText = wlyc
                        const diwr_tkxb_1 = editor.getCursor()
                        if (/( |[,\.]|[?!;:])$/.test(bnll_zt) && /RA ZNZK/.test(wlyc) && reg_bnll_zt.test(bnll_zt) && !/^gg|_|\d/.test(bnll_zt)) {
                            neig.ji_yozd_rfrf = false
                            editor.replaceSelection('RA😒ZNZK')
                            editor.setCursor(diwr_tkxb_1)
                            neig.ji_yozd_rfrf = true
                        } else {
                            const rj_vdzv_udcc = editor.getValue().split(/\n/)[diwr_tkxb_1.line].slice(diwr_tkxb_1.ch)
                            if (/^RA..ZNZK/.test(rj_vdzv_udcc)) {
                                const vn_1 = rj_vdzv_udcc.match(/^RA.*ZNZK/)[0].length + diwr_tkxb_1.ch
                                neig.ji_yozd_rfrf = false
                                editor.setSelection(diwr_tkxb_1, Object.assign({}, diwr_tkxb_1, { ch: vn_1 }))
                                editor.replaceSelection('')
                                neig.ji_yozd_rfrf = true
                            }

                            if (!/RA ZNZK/.test(wlyc) && new Date().getTime() - (() => {
                                return ['x', 'b'].filter(rn1 => diwr_kuoe_vdzv_ybkc[rn1])
                                    .map(rn1 => diwr_kuoe_vdzv_ybkc[rn1])
                                    .sort((a, b) => {
                                        return b.getTime() - a.getTime()
                                    })[0] || 0
                            })() > 800) {
                                qi_bnll_yhrj_vdzv(rfrf_cd_us_eysj)
                            }
                        }
                    }
                }).catch(err => { console.error(err) })
            }

            const rj_vdzv = editor.getValue()
                .split(/\n/)
                .slice(...(() => {
                    return [diwr_1.line ? diwr_1.line - 1 : 0, diwr_1.line + 50]
                })())
                .join('\n')

            rf_wrvr(rj_vdzv).then(wlyc => {
                const rj1 = wlyc
                    .replace(/^\s*wrvr\s*/i, "")
                vdumRender(
                    rj1
                )
            }
            ).catch(err => { console.error(err) })

        }

        if (neig.ji_ybbp_cqpi) {
            neig.ji_ybbp_cqpi = false
            return
        }
        neig.okud_zz_tkxb = editor.getCursor("to")
        if (neig.ji_atvn_cqpi) {
            kuoe_vdzv_xitl(item.text.join(""))
            return
        }
        const diwr_yhld = {
            diyc_selection: [editor.getCursor("from"), editor.getCursor("to")],
            value: editor.getValue()
        }
        if (vnwm_ybbp.length) {
            if (diwr_yhld.value === vnwm_ybbp[vnwm_ybbp.length - 1].value)
                return
        }

        vnwm_ybbp.push(diwr_yhld)
        bnll_eqwy_1 = vnwm_ybbp.length - 1
        kuoe_vdzv_xitl(item.text.join(""))
    })
});
let gg_1 = {
    bqeo: "",
    tkxb_up: [0, 0],
    bnll_eqwy_1,
    vnwm_bnll_ybbp: [],
    ji_yozd_rfrf: false
}
function gtLplp() {
    let diwr_1 = Object.assign({}, gg_1)
    Object.assign(gg_1, {
        bqeo: editor.getValue(),
        vnwm_bnll_ybbp: vnwm_ybbp.slice(0),
        bnll_eqwy_1,
        tkxb_up: [editor.getCursor("from").line, editor.getCursor("from").ch],
        ji_yozd_rfrf: neig.ji_yozd_rfrf
    })
    editor.setValue(diwr_1.bqeo)
    editor.setCursor(...diwr_1.tkxb_up)
    neig.ji_yozd_rfrf = Boolean(diwr_1.ji_yozd_rfrf)
    vnwm_ybbp.splice(0, vnwm_ybbp.length, ...(diwr_1.vnwm_bnll_ybbp || vnwm_ybbp))
    bnll_eqwy_1 = diwr_1.bnll_eqwy_1 || bnll_eqwy_1
}
function copy_2() {
    let vdum_2 = document.getElementById('vdum_2')
    copyToClipboard(vdum_2.innerHTML)
    document.getElementById("ag_zzuy").innerText = "Copyed;)"
}

const diwr_mcvn = {}
const diwr_ybkc_kuoe_vdzv = {}
Object.assign(diwr_mcvn, {
    g: {
        func: () => {
            gtLplp()
        },
        leun: "vdzv osse odrg."
    }, v: {
        func: () => {
            vdum_btn.click()
        },
        leun: "vdum qhzh."
    }, j: {
        func: () => {
            editor.setCursor(0, 0)
            editor.replaceSelection("wrvr\nwytm\n")
        },
        leun: "nxzv wrvr mr wytm tsjq."
    }, u: {
        func: (mcvn_kp) => {
            if (!mcvn_kp) {
                editor.setSelection({ line: editor.getCursor().line, ch: 0 }, { line: editor.getCursor().line, ch: 99999 })
                return
            }
            if (typeof mcvn_kp != "string") {
                throw new Error("mcvn uxux msox")

            }
            const diwr_yhld = mcvn_kp.match(/(\d+).*(\d+)/)
            if (!diwr_yhld) {
                throw new Error("mcvn msox")
            }
            let vn_jtco_qh = Number(diwr_yhld[2])
            let vn_uufb_qh = Number(diwr_yhld[1])
            if (vn_uufb_qh > editor.lastLine()) vn_uufb_qh = editor.lastLine()
            editor.setValue(editor.getValue().replace(/\s*\bg_\s*\d+.*ggu/, ""))
            editor.setSelection({ line: vn_uufb_qh - 1, ch: 0 }, { line: vn_jtco_qh - 1, ch: 999999 })
        },
        leun: "us yh ts zn klvq.example:g_ 0 7ggu\n us yh bnll qh:ggu"
    }, d: {
        func: (mcvn_kp) => {
            if (typeof mcvn_kp != "string") {
                if (editor.getCursor().line === 0 && editor.getCursor().ch === 0) {
                    editor.setCursor(99999, 99999)
                } else {
                    editor.setCursor(0, 0)
                }
                return
            }
            const diwr_yhld = mcvn_kp.match(/(\d+).*(\d+)/)
            editor.setValue(editor.getValue().replace(/\s*\bg_\s*.*ggd/, ""))
            if (!diwr_yhld) {
                let vn_1 = mcvn_kp.match(/\d+/)?.[0]
                if (vn_1) {
                    editor.setCursor(Number(vn_1) - 1, 0)
                    return
                } else {
                    throw new Error("mcvn msox")
                }
            } else {
                let ch_1 = Number(diwr_yhld[2]) - 1
                let line_1 = Number(diwr_yhld[1]) - 1
                editor.setCursor(line_1, ch_1)
                return
            }
        },
        leun: "dg ld. example:g_ 5 ggd\n g_ 5 6 ggd\n dg ld nmm qh\nggd\n nq da ye qh zd jyqh ggd lbm dg ab ok ds ye qh."
    }, q: {
        func: () => {
            editor.setSelection({ line: editor.getCursor().line, ch: 0 }, { line: editor.getCursor().line, ch: 999999 })
        },
        leun: "us yh bnll qh."
    }, a: {
        func: () => {
            editor.replaceSelection("(mcvn)=>{\nreturn\n}\n-fdmj-\n")
        },
        leun: "nq bnll vdzv nxzv atvn yfun zuwl."
    }, z: {
        func: () => {
            const bnll_tkxb = editor.getCursor()
            editor.setSelection({ line: bnll_tkxb.line, ch: bnll_tkxb.ch }, { line: 99999999, ch: 999999 })
            editor.replaceSelection("")
        },
        leun: "zyvv bnll vdzv dk udcc dk sopc bqeo."
    }, x: {
        func: () => {
            const bnll_tkxb = editor.getCursor()
            editor.setSelection({ line: bnll_tkxb.line, ch: 0 }, { line: bnll_tkxb.line, ch: 999999 })
            const bnll_qh = editor.getSelection()
            const rj_rfrf_ud = rf_wrvr(bnll_qh).then(wlyc => {
                if (diwr_ybkc_kuoe_vdzv[bnll_qh]) {
                    editor.replaceSelection(diwr_ybkc_kuoe_vdzv[bnll_qh].bnll_qh)
                    editor.setCursor(diwr_ybkc_kuoe_vdzv[bnll_qh].bnll_tkxb)
                    delete diwr_ybkc_kuoe_vdzv[bnll_qh]
                } else {
                    editor.replaceSelection(String(wlyc))
                    diwr_ybkc_kuoe_vdzv[String(wlyc)] = { bnll_tkxb, bnll_qh }
                }
            })
        },
        leun: "rfrf bnll qh."
    }, b: {
        func: () => {
            qi_bnll_eysj_vdzv(rfrf_cd_us_eysj)
        },
        leun: "ja bnll vdzv dk yhrj eysj zqjp ldlh wrvr."
    }, e: {
        func: () => {
            qi_bnll_yhrj_vdzv((rdeb_eysj) => {
                rf_rdeb(rdeb_eysj).then(wlyc => {
                    editor.replaceSelection('')
                    ag_zzuy.innerText = String(wlyc).trim()
                }).catch(err => console.error(err))
            })
        },
        leun: "Fywy bnll vdzv dk yhrj eysj vdum styc dk rdeb eysj."
    }, h: {
        func: (mcvn_kp) => {
            hd_da_ye_qh("h", mcvn_kp)
        },
        leun: "hd da ye qh."
    }, m: {
        func: (mcvn_kp) => {
            hd_da_ye_qh("m", mcvn_kp)
        },
        leun: "hd da ye qh okud ye nh mcvn."
    }, l: {
        func: () => {
            qu_ld_bqeo("m")
        },
        leun: "ld vdum bqeo ab vdzv zul."
    }, n: {
        func: () => {
            editor.setSelection({ line: 0, ch: 0 }, { line: editor.lastLine(), ch: 999 })
        },
        leun: "non us."
    }, k: {
        func: () => {
            editor.setValue(JSON.stringify(diwr_mcvn, null, 2))
        },
        leun: "nwvt kfou."
    }, r: {
        func: (mcvn_kp) => {
            if (mcvn_kp === 'gn') {
                neig.ji_yozd_rfrf = false
            } else {
                if (!/^\s*wrvr/i.test(editor.getValue())) {
                    const diwr_bnll_tkxb = editor.getCursor()
                    editor.setValue("wrvr\n" + editor.getValue())
                    editor.setCursor(Object.assign(diwr_bnll_tkxb, { line: diwr_bnll_tkxb.line + 1 }))
                    neig.ji_yozd_rfrf = true
                } else {
                    neig.ji_yozd_rfrf = !neig.ji_yozd_rfrf
                }
            }

        },
        leun: 'uudr yozd rfrf.example:\n g_ gn ggr.\nae\nggr.'
    }
})

function get_bnll_vdzv_eysj() {
    const diwr_1 = editor.getCursor('to')
    return editor.getValue().split(/\n/)[diwr_1.line].slice(0, diwr_1.ch).match(/\w+$/)?.[0]
}
let ji_vdzv_g
let ji_vdzv_kuoe_lg_xbst
function kuoe_vdzv_xitl(ztfr_kp) {
    function get_kuoe_lg_xbst() {
        return ji_vdzv_kuoe_lg_xbst
    }
    function set_kuoe_lg_xbst(gkyj) {
        if (gkyj) {
            ji_vdzv_kuoe_lg_xbst = true
        } else {
            ji_vdzv_g = false
            ji_vdzv_kuoe_lg_xbst = false
        }
    }
    if (/g/.test(ztfr_kp)) {
        ji_vdzv_g = true
    }
    if (/_/.test(ztfr_kp)) {
        if (ji_vdzv_g) {
            set_kuoe_lg_xbst(true)
        }
    }
    const reg_g = new RegExp(`.{${editor.getCursor().ch - 2}}\\bg_\s*`)

    if (reg_g.test(editor.getValue())) {
        neig.ji_atvn_cqpi = true
    }
    const yg1 = editor.getValue()
    const rj_bnll_kuoe_vdzv = get_bnll_vdzv_eysj()?.match(/gg\w$/)?.[0]
    if (rj_bnll_kuoe_vdzv) {
        const cqpi_fr = rj_bnll_kuoe_vdzv.match(/(gg)(\w)/)?.[2]
        if (!diwr_mcvn[cqpi_fr]) {
            return
        }
        const bnll_tkxb = editor.getCursor()
        const reg_func = new RegExp(/\bg_\s*([\S\s]*)gg\w/.toString().replace(/^\/|\/$/g, "").replace(/\\w$/, cqpi_fr))
        const mcvn_1 = yg1.match(reg_func)?.[1]
        if (mcvn_1 && get_kuoe_lg_xbst()) {
        } else {
            neig.ji_atvn_cqpi = true
            editor.setSelection({ line: bnll_tkxb.line, ch: bnll_tkxb.ch - 3 }, bnll_tkxb)
            editor.replaceSelection("")
            vnwm_ybbp.splice(vnwm_ybbp.length - 3, 4)

        }
        try {
            diwr_mcvn[cqpi_fr].func(get_kuoe_lg_xbst() && mcvn_1 && mcvn_1.trim())
        } catch (err) {
            alert("kuoe tsjq pc ms.")
            ag_zzuy.innerText = err.message ? err.stack : err
            alert(err)
        }
        set_kuoe_lg_xbst(false)
        neig.ji_atvn_cqpi = false
        diwr_kuoe_vdzv_ybkc[cqpi_fr] = new Date()
    } else {
        return
    }
}
function hd_da_ye_qh(cqpi_fr, mcvn_kp) {
    if (mcvn_kp) {
        cqpi_fr = "us"
    }
    const diwr_vn_1 = {
        h: () => {
            editor.setValue(editor.getValue().replace(/.*/, "").trimStart())
            editor.setCursor({ line: 0, ch: editor.getValue().match(/.*/)?.[0].length || 0 })
        },
        us: () => {
            const reg_atvn = /\s*\bg_\s*\s*([\s\S]*)\s*ggh/
            const ce_bqeo = editor.getValue().replace(reg_atvn, (m, p1) => {
                if (p1) {
                    return ""
                } else {
                    throw new Error("cgne nkme.")
                }
            })
            //     const reg_ymrg=new RegExp("\\s*\\bg_\s*\\s*"+JSON.stringify(mcvn_kp).replace(/^"|"$/g,"")+"\\s*ggh")
            editor.setValue(ce_bqeo)
            if (neig.okud_zz_tkxb) {
                editor.setCursor(neig.okud_zz_tkxb)
            }
        },
        m: () => {
            editor.setValue(editor.getValue().replace(/\S+\s*$/m, ""))
            editor.setCursor({ line: 0, ch: editor.getValue().match(/.*/)?.[0].length || 0 })
        }
    }
    diwr_vn_1[cqpi_fr]()


}
function mb_ybbp() {
    bnll_eqwy_1--
    if (bnll_eqwy_1 < 0) bnll_eqwy_1 = 0
    neig.ji_ybbp_cqpi = true
    editor.setValue(vnwm_ybbp[bnll_eqwy_1].value)
}
function tt_ybbp() {
    bnll_eqwy_1++
    if (bnll_eqwy_1 === vnwm_ybbp.length) {
        bnll_eqwy_1 = vnwm_ybbp.length - 1
    }
    neig.ji_ybbp_cqpi = true
    editor.setValue(vnwm_ybbp[bnll_eqwy_1].value)
}

function getValue() {
    alert(editor.getValue())
}
async function getNeig(neig = {}, zhqh_1) {
    fetch('/get-neig')
        .then(res => {
            if (res.ok) return res.json()
            else throw res.json()
        })
        .then(res => {
            Object.assign(neig, res)
            zhqh_1(neig)
        })
        .catch(err => {
            console.log(err)
            ag_zzuy.innerText = `Error:${err}Reason: ${err.reason}\nerr_stack: ${err.err_stack}`
        })
}
function zhqh_1(neig) {
    if (neig.ji_exym_oc_ssvl) {
        document.onkeydown = function (event) {
            if (event.key === "Tab") {
                event.preventDefault()
                document.getElementById('vdum_btn').click()
            }
        }
    }
}
function test() {
    editor.focus()
    console.log(editor.getCursor("from"))
    // console.log(editor.setCursor({ line: 1, ch: 1 }))
}
function zyvv() {
    const value_1 = (() => {
        if (/^\s/.test(editor.getValue())) {
            let rj_1 = editor.getValue().replace(/^\s+/, "")
            neig.diwr_tkxb_trig = { line: 0, ch: rj_1.match(/.*/)?.[0].length }
            return rj_1
        }
        else if (/\n./.test(editor.getValue())) {
            let vnwm_lines = editor.getValue().trim().split(/\n/)
            let eqwy_tsjq_wu = 0
            vnwm_lines.forEach((rn1, eqwy_1) => {
                const reg_afoa_tsjq = /(?<=(?:^|\n)\s*)\w+/
                if (vnwm_tsjq_wu.includes(rn1.match(reg_afoa_tsjq)?.[0]) || vnwm_tsjq_wu.includes(rn1.match(reg_afoa_tsjq)?.[0].toLowerCase())) {
                    eqwy_tsjq_wu = eqwy_1
                }
            })
            let rj_1 = (() => {
                if (eqwy_tsjq_wu + 1 === vnwm_lines.length) {
                    return vnwm_lines.slice(0, eqwy_tsjq_wu).join('\n')
                } else {
                    return vnwm_lines.slice(0, eqwy_tsjq_wu + 1).join('\n')
                }
            })()
            const vnwm_rj_qh = rj_1.split(/\n/)
            neig.diwr_tkxb_trig = { line: vnwm_rj_qh.length, ch: 0 }
            return rj_1 + "\n"
        } else {
            neig.diwr_tkxb_trig = { line: 0, ch: 0 }
            return ''
        }
    })()
    editor.setValue(value_1)
}
function qu_ld_bqeo() {
    const rj_yhld = editor.getValue()
    const diwr_tkxb_yhld = editor.getCursor()
    editor.setValue(neig.outputText)
    if (/^\s*wrvr/i.test(rj_yhld)) {
        if (diwr_tkxb_yhld.line) {
            diwr_tkxb_yhld.line = diwr_tkxb_yhld.line - 1
        }
        editor.setCursor(diwr_tkxb_yhld)
    } else if (/^\s*wrvr/i.test(neig.outputText)) {
        diwr_tkxb_yhld.line = diwr_tkxb_yhld.line + 1
        editor.setCursor(diwr_tkxb_yhld)
    } else {
        editor.setCursor(0, 0)
    }
    neig.outputText = rj_yhld
    vdumRender("")
}
function vdumRender(rj_kp, outputs = {}) {
    if (rj_kp === undefined) {
        const rj5 = 'received an undefined'
        alert(rj5)
        throw rj5
    }
    if (typeof rj_kp != "string") {
        rj_kp = String(rj_kp)
    }
    let rj_3 = rj_kp
    vdum_1.innerHTML = (() => {
        if (outputs.mark) {
            const vnwm_reg_2 = Object.entries(outputs.mark).map(([fo1, yg1]) => {
                return new RegExp(reg_fs(fo1), yg1)
            })
            vnwm_reg_2.forEach(rn1 => {
                rj_3 = rj_3.replace(rn1, (m1) => {
                    return " md-" + m1 + "-md "
                })
            })
            return rj_3.split(/(?<! md-|-md )\n/).map((rn1, eqwy_1) => {
                return `<span style="font-size: smaller;background:#c0c0c0">${eqwy_1.toString().padEnd(3)}</span> <code contenteditable id="code${eqwy_1}">${rn1.replace(/\r/, "")
                    .replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code>`
                    .replace(/( md-)((?:(?! md-)[\s\S])*)(-md )/g, "<mark>$2</mark>")
            }).join("\n")

        } else {
            const vnwm_3 = rj_kp.split(/\n/)
            return vnwm_3.map((rn1, eqwy_1) => {
                return `${vbyt_bj_ypzv_gmih(eqwy_1)}<code contenteditable id="code${eqwy_1}">${rn1.replace(/\r/, "").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code>`
            }).join("\n")
        }

    })()
}
function vbyt_bj_ypzv_gmih(eqwy_1) {
    if (eqwy_1 > 10000) {
        return ''
    } else {
        return `<span style="font-size: smaller;background:#c0c0c0">${eqwy_1.toString().padEnd(3)}</span> `
    }
}
function wdbuCode() {

}
function vdzv_focus(line, ch) {
    editor.focus()
    if (typeof line === "number" && typeof ch === 'number') {
        editor.setCursor(line, ch)
    }
}
caju_vdum_ybkc.addEventListener('click', function (event) {
    const vkih = event.target.innerText.match(/\w+(?= )/)?.[0]
    const diwr = {}
    vnwm_vdum_ybkc.forEach(rn1 => {
        diwr[rn1.vkih] = rn1
    })
    vdum_rscs(diwr[vkih])
})
function zjzj_outputTextUxux(outputs) {
    if (!/number|boolean|string/.test(typeof outputs.outputText)) {
        throw new Error('csrf-outputText must be a String, Number or Boolean-' + typeof outputs.outputText)
    }

}
function vdum_wdbu() {
    document.getElementById('ag_zzuy').innerText = "hold on..."
    fetch('/afoa', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*'
        },
        body: JSON.stringify({ vdzv: trl_wdbu(editor.getValue()) })
    }).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw res
        }
    }).then(jtyj_1 => {
        zjzj_outputTextUxux(jtyj_1)
        vnwm_vdum_ybkc.unshift(Object.assign({ vkih: hf_vkih.next().value }, jtyj_1))
        vdum_rscs(jtyj_1)
        uace_vdum_ybkc_caju(vnwm_vdum_ybkc)
    }).then(() => {
        document.getElementById('ag_zzuy').innerText = ""
    }).catch(err => {
        if (err.json) {
            err.json().then(jtyj_1 => {
                vdum_1.innerText = jtyj_1.reason
                console.log(jtyj_1.err_stack)
                ag_zzuy.innerText = ('error: \n' + jtyj_1.reason + '\n')
            }).catch(err => console.error(err))

        } else {
            console.error(err); alert(err.message || err)
        }
    })
}
function vdum_rscs(outputs = {}) {
    zjzj_outputTextUxux(outputs)
    neig.outputText = outputs.outputText
    if (outputs.ji_ye_hym_html) {
        vdum_2.innerHTML = outputs.outputText
        copy_btn_2.innerHTML = `<button onclick="copy_2()">copy the HTML</button>`
    } else if (outputs.ji_blank_html) {
        alert("ra sdvu.")
    } else if (outputs.up) {
        editor.setValue(outputs.outputText)
        editor.setCursor({ line: 99999, ch: 99999 })
    } else if (outputs.na_ld_html) {
        vdum_2.innerHTML = outputs.na_ld_html
    } else if (outputs.ji_caju) {

        caju_1.innerHTML = outputs.outputText.split(/\n/)
            .map(rn1 => `${(outputs.diwr_nikc_nini?.[rn1].ji_rjqt ? rn1 : `<mark>${rn1}</mark>`)}<button onclick="nxzv('${rn1.replace(/\\/g, "\\\\")}');vdzv_focus()">nxzv</button><br>`).join('\n')
    } else {
        if (outputs.outputText.toString().length > 400000) {
            console.log(outputs.outputText)
            alert(outputs.outputText.toString().length + "jtyj cf ar, rt nq console yh zjhq.")
        } else {
            vdumRender(outputs.outputText, outputs)

        }
    }

}
function trl_wdbu(rj_kp) {
    let rj_1 = rj_kp.trimStart()
    if (/ -p /.test(rj_1)) {
        neig.wvvy = rj_1.match(/(-p) (\w+)/)?.[2]
    } else {
        if (neig?.wvvy) {
            rj_1 = rj_1.replace(/(.)(?=\n|$)/, "$1 -p " + neig.wvvy)

        }

    }
    return rj_1
}
function* hfbc_vkih() {
    for (i1 = 0; ; i1++) {
        yield i1
    }
}
function uace_vdum_ybkc_caju(vnwm_vdum_ybkc = []) {
    caju_vdum_ybkc.innerHTML =
        vnwm_vdum_ybkc.map(
            rn1 => {
                return `<li style="margine:1em"><mark style="font-size:smaller">${rn1.vkih}</mark> ${(() => {
                    if (rn1.ji_ye_hym_html) {
                        return "html"
                    } else {
                        return String(rn1.outputText)?.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                            .replace(/(.{1,17})([\s\S]*)/, "$1...")
                    }
                })()}</li>`
            }
        ).join('\n')
}
function frih_up_wdbu() {
    editor.focus()
    editor.setSelection(neig.diwr_tkxb_uufb_trig, neig.diwr_tkxb_jtco_trig)
}
function wdbu_frih_vdzv(event) {
    const diwr_frih_di = {
        '\'': '\'',
        '"': '"',
        '(': ')',
        '[': ']',
        '{': '}',
        '`': "`"
    }
    neig.diwr_tkxb_uufb_trig = editor.getCursor("from")
    neig.diwr_tkxb_jtco_trig = editor.getCursor("to")
    const ji_rg_qh = !!editor.getSelection().match(/\n/)
    // const line_1 = neig.diwr_tkxb_uufb_trig.line + editor.getSelection().match(/\n/g)?.length || 0
    // const ch_1 = (() => {
    //     if (editor.getSelection().match(/\n/g)) {
    //         return editor.getSelection().replace(/([\s\S]*)\n(.*)$/, "$2").length
    //     } else {
    //         return neig.diwr_tkxb_uufb_trig.ch + editor.getSelection().length - 1
    //     }
    // })()
    // neig.diwr_tkxb_jtco_trig = { line: line_1, ch: ch_1 }
    const rj_nixb = event.target.innerText
    if (/\n.*\n/.test(rj_nixb)) {
        return
    } else if (rj_nixb === 'vdum') {
        return
    } else {
        if (editor.somethingSelected() && Object.keys(diwr_frih_di).includes(rj_nixb)) {
            editor.replaceSelection(rj_nixb + editor.getSelection() + diwr_frih_di[rj_nixb])
            neig.diwr_tkxb_jtco_trig.ch++
            if (!ji_rg_qh) {
                neig.diwr_tkxb_jtco_trig.ch++
            }
        } else if (editor.somethingSelected() && !Object.keys(diwr_frih_di).includes(rj_nixb)) {
            editor.replaceSelection(rj_nixb)
            neig.diwr_tkxb_uufb_trig.ch++
            Object.assign(neig.diwr_tkxb_jtco_trig, neig.diwr_tkxb_uufb_trig)
        } else {
            editor.replaceSelection(rj_nixb)
            neig.diwr_tkxb_uufb_trig.ch++
            Object.assign(neig.diwr_tkxb_jtco_trig, neig.diwr_tkxb_uufb_trig)
        }
    }

}
function nxzv(rj_1) {
    if (typeof rj_1) {
        editor.replaceSelection("\n" + rj_1)
    } else {
        throw new Error("nxzv dk mcvn aoao ji string")
    }
}
function reg_fs(rj) {
    return rj.replace(/\\/g, "\\\\")
        .replace(/(\+|-|\.|[\(\{\[\]\}\)])/g, "\\$1")
}
async function rf_rdeb(rj_kp = "") {
    return await prvd_afoa(`en en\n${rj_kp}`).catch(err => { throw err })
}
async function rf_wrvr(rj_kp = "", rj_cqpi_fr = "") {
    return await prvd_afoa('wrvr ' + rj_cqpi_fr + '\n' + rj_kp).catch(err => { throw err })

}
async function prvd_afoa(vdzv_kp) {
    return await fetch('/afoa', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*'
        },
        body: JSON.stringify({
            vdzv: vdzv_kp
            // + "-f-d-m-j-" + (() => {
            //     return editor.getValue()
            //         .split(/\n/)[(diwr_1.line)]
            //         .match(/[\u4E00-\u9FA5\w]+\W*$/)?.[0] || ""
            // })()
        })
    }).then(res => {
        if (!res.ok) {
            throw res
        } else {
            return res.json()
        }
    }).then(jtyj_1 => {
        return jtyj_1.outputText
    })
        .catch(err => {
            if (!err) {
                console.error('csrf- hsab ra znzk wlyc -' + err)
                return
            }
            if (err.json) {
                err.json().then(jtyj_1 => {
                    vdumRender(jtyj_1.reason)
                    console.error(jtyj_1.err_stack)
                })
            } else {
                console.error(err);
            }
        })
}
function rfrf_cd_us_eysj(yhrj_eysj) {
    rf_wrvr(yhrj_eysj).then(wlyc => {
        editor.replaceSelection(String(wlyc).trim())
    }).catch(err => console.error(err))
}
function qi_bnll_yhrj_vdzv(wlba_ymrg_zl_eysj = (rj_eysj_yhrj) => { }) {
    qi_bnll_vdzv(wlba_ymrg_zl_eysj, /[\u4E00-\u9FA5]+\s*$/)
}
function qi_bnll_eysj_vdzv(wlba_ymrg_zl_eysj) {
    qi_bnll_vdzv(wlba_ymrg_zl_eysj, /[\u4E00-\u9FA5a-zA-z]+\s*$/)
}
function qi_bnll_vdzv(wlba_ymrg_zl_eysj = (rj_eysj_yhrj) => { }, reg_eysj) {
    const diwr_1 = editor.getCursor('from')
    const rj_eysj_yhrj = editor.getValue().split(/\n/)[diwr_1.line].slice(0, diwr_1.ch).match(reg_eysj)?.[0] || ''
    if (rj_eysj_yhrj) {
        const vn_1 = rj_eysj_yhrj.length
        editor.setSelection({ line: diwr_1.line, ch: diwr_1.ch - vn_1 }, { line: diwr_1.line, ch: diwr_1.ch })
        wlba_ymrg_zl_eysj(rj_eysj_yhrj)
    }
}

