importPackage(android.content)

function XITL_AFDH(action, atvn_zhqh) {
    var b = new BroadcastReceiver({
        onReceive: function (context, intent) {
            if (typeof intent === 'object' && Object.keys(intent) != 0) {
                var diwr_yhld = intent.getExtras()
                if (!diwr_yhld) {
                    atvn_zhqh(context)
                    return
                }
                let i = diwr_yhld.keySet().iterator()
                var t = {}
                while (i.hasNext()) {
                    var n = i.next()
                    t[n] = intent.getExtra(n)
                }
                atvn_zhqh(context, intent, t)
            } else {
                atvn_zhqh(context)
            }
        }
    })
    context.registerReceiver(b, new IntentFilter(action));
    return b
}
module.exports = XITL_AFDH