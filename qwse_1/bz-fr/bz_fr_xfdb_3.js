function bz_fr_xfdb_3(neig_kp) {
    const neig = Object.assign({
        brm_vkih: 'bz_fr_3',
        wm_neig_uj: []
    }, neig_kp)

    const canvas = document.getElementById(neig.brm_vkih);
    if (!canvas) {
        throw new Error("csrf-canvas lh null-")
    }
    const ctx = canvas.getContext('2d');

    // 路口中心点
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const roadWidth = canvas.width / 5; // 道路宽度
    const blockSize = canvas.width / 6; // 方块大小

    // 定义8个方向（米字形）
    const directions = [
        { name: 'top', angle: -Math.PI / 2, dx: 0, dy: -1 },
        { name: 'top-right', angle: -Math.PI / 4, dx: 1, dy: -1 },
        { name: 'right', angle: 0, dx: 1, dy: 0 },
        { name: 'bottom-right', angle: Math.PI / 4, dx: 1, dy: 1 },
        { name: 'bottom', angle: Math.PI / 2, dx: 0, dy: 1 },
        { name: 'bottom-left', angle: 3 * Math.PI / 4, dx: -1, dy: 1 },
        { name: 'left', angle: Math.PI, dx: -1, dy: 0 },
        { name: 'top-left', angle: 5 * Math.PI / 4, dx: -1, dy: -1 }
    ];

    // 绘制米字形道路
    function drawRoads() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 绘制每条道路（从中心向八个方向延伸）
        directions.forEach(dir => {
            ctx.strokeStyle = '#666';
            ctx.lineWidth = roadWidth;
            ctx.beginPath();

            // 从中心画到边缘
            const endX = centerX + (canvas.width * 0.7) * dir.dx;
            const endY = centerY + (canvas.height * 0.7) * dir.dy;

            ctx.moveTo(centerX, centerY);
            ctx.lineTo(endX, endY);
            ctx.stroke();

            // 添加道路中心线
            // ctx.setLineDash([canvas.width / 10, canvas.width / 10]);
            // ctx.strokeStyle = 'white';
            // ctx.lineWidth = canvas.width / 20;
            // ctx.beginPath();
            // ctx.moveTo(centerX, centerY);
            // ctx.lineTo(endX, endY);
            // ctx.stroke();
            // ctx.setLineDash([]);
        });

        // 绘制中心路口圆环
        ctx.beginPath();
        ctx.arc(centerX, centerY, canvas.width / 5, 0, Math.PI * 2);
        ctx.fillStyle = '#ddd';
        ctx.fill();
        ctx.strokeStyle = '#999';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // 创建移动的方块类
    class MovingBlock {
        constructor(neig_kp) {
            const neig = Object.assign({
                startDir: "",
                uj_xz: '#4CAF50'
                , endDir: ""
                , delay: 0
                , hidz_iqns: 150
                , reStartTime: 400
                , uace_tiqe: 800
                , wu: "ra-znzk"
            }, neig_kp)
            this.get_wu = () => neig.wu
            this.startDir = neig.startDir;
            this.endDir = neig.endDir;
            this.delay = neig.delay;
            this.progress = -neig.delay; // 控制开始时间
            this.status = 'approaching'; // approaching, waiting, leaving
            this.hidz_iqns = neig.hidz_iqns;
            this.waitStart = 0;
            this.waitRestart = 0;
            const imfb_fs_mcvn = () => {
                this.progress = -neig.delay; // 控制开始时间
                this.status = 'approaching'; // approaching, waiting, leaving
                this.waitStart = 0;
                this.waitRestart = 0;
            }
            this.imfb_fs_mcvn = imfb_fs_mcvn
            imfb_fs_mcvn()
            this.set_wu = (wu_kp) => {
                neig.wu = wu_kp
                return this
            }
            // 计算起点和终点
            const startAngle = directions.find(d => d.name === neig.startDir).angle;
            this.startX = centerX + canvas.width / 1.5 * Math.cos(startAngle);
            this.startY = centerY + canvas.width / 1.5 * Math.sin(startAngle);

            const endAngle = directions.find(d => d.name === neig.endDir).angle;
            this.endX = centerX + canvas.width / 1.4 * Math.cos(endAngle);
            this.endY = centerY + canvas.width / 1.4 * Math.sin(endAngle);

            // 当前方块位置
            this.x = this.startX;
            this.y = this.startY;
            this.update = (deltaTime) => {
                if (this.progress < 0) {
                    this.progress += deltaTime;
                    return;
                }

                switch (this.status) {
                    case 'approaching':
                        if (w_hidz_pc_mf()) {
                            return
                        }
                        // 向中心移动
                        const approachProgress = Math.min(this.progress / neig.uace_tiqe, 1);
                        this.x = this.startX + (centerX - this.startX) * approachProgress;
                        this.y = this.startY + (centerY - this.startY) * approachProgress;

                        if (approachProgress >= 1) {
                            this.status = 'waiting';
                            this.waitStart = this.progress;
                        }
                        break;

                    case 'waiting':
                        // 在中心等待
                        if (this.progress - this.waitStart >= this.hidz_iqns) {
                            this.status = 'leaving';
                        }
                        break;

                    case 'leaving':
                        // 离开中心
                        const leaveProgress = Math.min((this.progress - this.waitStart - this.hidz_iqns) / neig.uace_tiqe, 1);
                        this.x = centerX + (this.endX - centerX) * leaveProgress;
                        this.y = centerY + (this.endY - centerY) * leaveProgress;
                        if (leaveProgress >= 1) {
                            this.status = 'waitingRestart';
                            this.waitRestart = this.progress;
                        }
                        break;
                    case 'waitingRestart':
                        if (w_okud_ye_v_sdbc() && this.progress - this.waitRestart >= neig.reStartTime) {
                            // console.log(blocks[blocks.length - 1].wu, "fff")
                            this.imfb_fs_mcvn()
                        }
                        break;

                }

                this.progress += deltaTime;
            }
            this.draw = () => {
                ctx.fillStyle = neig.uj_xz; // 绿色方块
                ctx.fillRect(this.x - blockSize / 2, this.y - blockSize / 2, blockSize, blockSize);

                // 添加一点阴影效果
                // ctx.shadowColor = 'rgba(0,0,0,0.3)';
                // ctx.shadowBlur = 5;
                // ctx.shadowOffsetX = 2;
                // ctx.shadowOffsetY = 2;
                // ctx.fillStyle = '#8BC34A';
                // ctx.fillRect(this.x - blockSize / 2 + 2, this.y - blockSize / 2 + 2, blockSize - 4, blockSize - 4);
                // ctx.shadowBlur = 0;
                // ctx.shadowOffsetX = 0;
                // ctx.shadowOffsetY = 0;

                // 显示状态
                // let statusText = '';
                // switch (this.status) {
                //     case 'approaching': statusText = '接近中'; break;
                //     case 'waiting': statusText = '等待中...'; break;
                //     case 'leaving': statusText = '离开中'; break;
                // }
                // ctx.fillStyle = 'black';
                // ctx.font = '10px Arial';
                // ctx.fillText(statusText, this.x - 15, this.y - 15);
            }


        }

    }

    // 创建两个方块
    const blocks = neig.wm_neig_uj.map(rn1 => new MovingBlock(rn1))
    // const blocks = [
    //     new MovingBlock({ startDir: 'top-left', endDir: 'bottom-right', reStartTime: 0, hidz_iqns: 1000, delay: 0 }).set_wu('wu1'),      // 第一个从左上到右下
    //     new MovingBlock({ startDir: 'top-right', endDir: 'bottom-left', reStartTime: 0, hidz_iqns: 1000, delay: 200 }).set_wu("wu2"),  // 第二个从右上到左下，延迟3秒
    //     new MovingBlock({ startDir: 'top-left', endDir: 'bottom-right', reStartTime: 0, uj_xz: '#290F50', hidz_iqns: 1000, delay: 100 * 1 }).set_wu('wu1'),      // 第一个从左上到右下
    //     new MovingBlock({ startDir: 'top-right', endDir: 'bottom-left', reStartTime: 0, hidz_iqns: 1000, delay: 200 * 1 }).set_wu("wu2"),   // 第二个从右上到左下，延迟3秒
    //     new MovingBlock({ startDir: 'top-left', endDir: 'bottom-right', reStartTime: 0, uj_xz: 'RED', hidz_iqns: 1000, delay: 100 * 2 }).set_wu('wu1'),      // 第一个从左上到右下
    //     new MovingBlock({ startDir: 'top-right', endDir: 'bottom-left', reStartTime: 0, hidz_iqns: 1000, delay: 200 * 2 }).set_wu("wu6"),   // 第二个从右上到左下，延迟3秒
    // ];
    const w_noph_sdbc = () => {
        return blocks.every(rn1 => rn1.status === "waitingRestart")
    }
    const w_hidz_pc_mf = () => {
        return blocks.some(rn1 => rn1.status === "waiting")
    }
    const w_okud_ye_v_sdbc = () => {
        if (blocks[blocks.length - 1].status === "waitingRestart") {
            // console.log(blocks[blocks.length - 1].wu, "ddd")
            return true
        }
    }
    // setInterval(() => {
    //     console.log(blocks.map(rn1 => (rn1.wu + ":" + rn1.status)).join("; "))
    // }, 1000);
    // 动画循环
    let lastTime = 0;
    let w_da_ye_lil = true
    function animate(currentTime) {
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        // 重新绘制道路
        drawRoads();

        // 更新和绘制每个方块
        // if (w_da_ye_lil || w_noph_sdbc()) {
        //     w_da_ye_lil = false
        // }
        blocks.forEach(block => {
            block.update(deltaTime);
            block.draw();
        });


        // 循环动画
        requestAnimationFrame(animate);
    }

    // 开始动画
    requestAnimationFrame(animate);
}