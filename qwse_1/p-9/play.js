function playAnimation(neig_kp) {
    const neig = Object.assign({
        ctx: null,
        points: [],
        cell: 100,
        duration: 300,
        delay: 100,
        get_play_zt: () => document.getElementById('pointInput')?.value
        , trl_jyqh: () => { }
        , ud_jyqh: () => { }
    }, neig_kp)
    console.log(neig.cell, 893)
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

        if (sequence.some(isNaN) || sequence.some(i => i < 0 || i > 8)) {
            alert('请输入1-9之间的数字，用逗号分隔哦~' + JSON.stringify(sequence));
            return;
        }

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
                neig.ctx.lineWidth = cell / 7;
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

                // 光点特效
                path.forEach(rn1 => {
                    const lastPoint = neig.points[rn1];
                    const gradient = neig.ctx.createRadialGradient(
                        lastPoint.x, lastPoint.y, 0,
                        lastPoint.x, lastPoint.y, neig.cell * 0.3
                    );
                    gradient.addColorStop(0, 'rgba(76, 175, 80, 0.8)');
                    gradient.addColorStop(1, 'rgba(76, 175, 80, 0)');

                    neig.ctx.fillStyle = gradient;
                    neig.ctx.beginPath();
                    console.log('cell', neig.cell, 902)
                    neig.ctx.arc(lastPoint.x, lastPoint.y, neig.cell * 0.3, 0, Math.PI * 2);
                    neig.ctx.fill();
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
