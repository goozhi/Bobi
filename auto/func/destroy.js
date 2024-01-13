function destroy(vnwm_afdh) {
    vnwm_afdh.forEach(rn1 => {
        context.unregisterReceiver(rn1)
    })

}

module.exports = destroy