setInterval(()=>{
        zdog2=Date.now()
        do1 = zdog1-zdog2
    mCamera.startPreview()
        if(Math.abs(do1)>5000&&!tk_uu&&device.isScreenOn()){
tk("tk_on")
zdog2=zdog1
            tk_uu=true
    }else if(tk_uu&&!device.isScreenOn()){
            tk_uu=false
    device.keepScreenOn(100)
tk("tk_off")
        zdog1=Date.now()
setTimeout(()=>{mCamera.stopPreview()
//mCamera.release()
//exit()
}, 100)
   //mCamera.stopPreview()
    }
    
},300)