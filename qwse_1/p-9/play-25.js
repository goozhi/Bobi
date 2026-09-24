function playAnimation(neig_kp) {
    const neig = Object.assign({
        ctx: null,
        points: [],
        cell: 100,
        duration: 300,
        delay: 100,
        wm_zt: [],
        get_play_zt: () => document.getElementById('pointInput')?.value
        , trl_jyqh: () => { }
        , ud_jyqh: () => { }
    }, neig_kp)
    this.rzvo = (neig_kp) => {
        Object.assign(neig, neig_kp)
        return this
    }
    this.play = (input) => {
        console.log('play', input)
        const inputValue = ((() => {
            const val = input || neig.get_play_zt();
            if (!val) {
                throw new Error('csrf-hmpc pcyc ztfr-' + neig.get_play_zt.toString()).stack
            }
            if (/,/.test(val)) {
                return val;
            } else {
                return val.split('').join(',');
            }
        })());
        const sequence = inputValue.split(',').map(s => parseInt(s.trim()) - 1); // 转为索引

        let index = 0;
        const path = [];
        const duration = neig.duration;
        const startTime = Date.now();
        function animate() {
            const now = Date.now();
            const progress = Math.min((now - startTime) / (duration * sequence.length), 1);
            const currentStep = Math.floor(progress * sequence.length);

            while (index <= currentStep && index < sequence.length) {
                path.push(sequence[index]);
                index++;
            }

            // drawGrid();

            if (path.length > 0) {
                // 画路径线
                neig.ctx.strokeStyle = '#4CAF50';
                neig.ctx.lineWidth = neig.cell / 7;
                neig.ctx.lineCap = 'round';
                neig.ctx.lineJoin = 'round';

                neig.ctx.beginPath();
                neig.ctx.moveTo(neig.points[path[0]].x, neig.points[path[0]].y);

                for (let i = 1; i < path.length; i++) {
                    neig.ctx.lineTo(neig.points[path[i]].x, neig.points[path[i]].y);
                }

                const ratioInStep = (progress * sequence.length) % 1;
                if (path.length < sequence.length && ratioInStep > 0) {
                    const from = neig.points[path[path.length - 1]];
                    const to = neig.points[sequence[path.length]];
                    const x = from.x + (to.x - from.x) * ratioInStep;
                    const y = from.y + (to.y - from.y) * ratioInStep;
                    neig.ctx.lineTo(x, y);
                }

                neig.ctx.stroke();

                // const wm_sfxz = ["#4488FF", "#44FF44", "#FFEE44", "#44FF44", "#4488FF", "#44FF44", "#FFEE44", "#FFAA44", "#FFEE44", "#44FF44", "#FFEE44", "#FFAA44", "#FF4444", "#FFAA44", "#FFEE44", "#44FF44", "#FFEE44", "#FFAA44", "#FFEE44", "#44FF44", "#4488FF", "#44FF44", "#FFEE44", "#44FF44", "#4488FF"]
                // 光点特效
                path.forEach(rn1 => {
                    const lastPoint = neig.points[rn1];
                    const gradient = neig.ctx.createRadialGradient(
                        lastPoint.x, lastPoint.y, 0,
                        lastPoint.x, lastPoint.y, neig.cell * 0.3
                    );
                    gradient.addColorStop(0, neig.di_wm_sfxz[rn1]?.vcl || "green");
                    gradient.addColorStop(1, neig.di_wm_sfxz[rn1]?.vcl || "green");

                    neig.ctx.fillStyle = gradient;
                    neig.ctx.beginPath();
                    neig.ctx.arc(lastPoint.x, lastPoint.y, neig.cell * 0.3, 0, Math.PI * 2);
                    neig.ctx.fill();

                    neig.ctx.fillStyle = neig.di_wm_sfxz[rn1]?.zt_xz || '#ffffff';  // 文字颜色
                    neig.ctx.font = `${neig.cell * 0.5}px Arial`;  // 文字大小（约为圆半径的0.8倍）
                    neig.ctx.textAlign = 'center';   // 水平居中
                    neig.ctx.textBaseline = 'middle'; // 垂直居中
                    neig.ctx.fillText(neig.wm_zt[rn1] || "", lastPoint.x, lastPoint.y)
                })
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                neig.ud_jyqh()
            }
        }

        neig.trl_jyqh()
        setTimeout(animate, neig.delay);

    }

}
