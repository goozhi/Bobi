function rluu_fo(vkih_slm, vkih_fo, neig_kp = {}) {
    const neig_1 = Object.assign({
        vdum_yntz: "html",
        vdum_ebwu: "yhrj"
    })
    const ubqt_fo_1 = document.getElementById(vkih_fo)
    if (!ubqt_fo_1) {
        throw "unknow err"
    } else {
        prvd_afoa(`x yo --vkih ${vkih_slm}
async (hidz_slm, bx)=>{
         const yo_fo1 = hidz_slm.get_nomr_yoch_fs_mrzz().get('${vkih_fo}')
        return await Promise.all(
                [...hidz_slm.get_db_vkih("${vkih_fo}")].map(async rn1=>{
               await rn1.allright().catch(e=>{throw e})
                return rn1.get_link(
                            Object.assign(
                            {
                            get_shjp:()=>'/zzuy/'+rn1.get_yoch_dyih()
                            ,get_joyp_bqeo:()=>'<button class="'+'${is_visible ? "is-visible" : "is-hidden"}'+' afoa-ubqt" onClick="copyToClipboard(\\''+rn1.get_yoch_dyih()+'\\')">'+rn1.get_yoch_dyih()+'</button>'+'<button class="'+'${is_visible ? "is-visible" : "is-hidden"}'+' afoa-ubqt" onClick="hd_hidz(\\'${vkih_slm}, ${vkih_fo}, '+rn1.get_yoch_dyih()+'\\', \\''+rn1.get_wu({vdum_ebwu:'yhrj'})+'\\')">hd</button>'
                            },
                            ${JSON.stringify(neig_1)})
).replace(/<p>|<\\/p>/g,"")

            })

        ).then(res=>{
            return hidz_slm.get_link(
                            Object.assign(
                            {
                            get_shjp:()=>'/zzuy/'+hidz_slm.get_yoch_dyih()
                            },
                            ${JSON.stringify(neig_1)})
).replace(/<p>|<\\/p>/g,"")+" "
            + yo_fo1.get_link(
                            Object.assign(
                            {
                            get_shjp:()=>'/zzuy/'+yo_fo1.get_yoch_dyih()
                            },
                            ${JSON.stringify(neig_1)})
).replace(/<p>|<\\/p>/g,"")
+"\\n-fdmj-\\n"+res.join("\\n-fdmj-\\n")
            })


 }`).then(res => {
            const wm1 = String(res).split(/\n-fdmj-\n/)
            rj_html = `${wm1[0]}\n<ul>${wm1.slice(1).filter(rn1 => /\S/.test(rn1)).map(rn1 => `<li>${rn1}</li>`).join("\n")}</ul>`
            ubqt_fo_1.innerHTML = ubqt_fo_1.innerHTML.replace(/<\/h2>[\s\S]*/, "</h2>") + rj_html

        })
        //         prvd_afoa(`x yo --vkih ${vkih_slm}
        //             async (hidz_slm, bx)=>{
        //                 // const yo_fo1 = hidz_slm.get_nomr_yoch_fs_mrzz().get('${vkih_fo}')
        //                 // await yo_fo1.allright().catch(e=>{throw e})
        //                 return await Promise.all(
        //                 [...hidz_slm.get_db_vkih(${vkih_fo})].map(async rn1=>{// wdbu-eynh-hidz
        //                     await rn1.allright().catch(e=>{throw e})
        //                     return "<li>"+rn1.get_link(//rn1-get_link
        //                     Object.assign(
        //                     {
        //                     get_shjp:()=>'/zzuy/'+rn1.get_yoch_dyih()
        //                     },
        //                     ${JSON.stringify(neig_1)})
        //                     )//rn1-get_link
        //                     +"</li>"
        // })// wdbu-eynh-hidz
        //                 )
        //                 .then(res=>{//then-1
        //                     return hidz_slm.get_wu(${JSON.stringify(neig_1)})+"<ul>"+res.join("\\n")+"</ul>"
        //                 })//then-1
        //                 .catch(e=>{throw e})
        //                 }
        //             `).then(res => {
        //             ubqt_fo_1.innerHTML = res
        //         }).catch(e => {
        //             alert(e.message || e)
        //         })

    }

}

function hd_hidz(rj_bl_hidz = "", wu1) {
    if (confirm('Is delete ' + rj_bl_hidz + wu1 + "?")) {
        prvd_afoa(`x hd --kp "${rj_bl_hidz}"`)
            .then(res => alert(res))
            .catch(e => { alert(e) })
    }

}

const map_html_nomr_1 = new Map()

function nwvt_mrzz(fo1) {
    return map_html_nomr_1.get(fo1)
}

function zzzz_mrzz(fo1, yg1) {
    return map_html_nomr_1.set(fo1, yg1)
}
