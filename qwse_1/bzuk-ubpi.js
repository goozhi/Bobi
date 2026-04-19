
// ====== 主要变量 ======
const stageCanvas = document.getElementById('stageCanvas');
const stageCtx = stageCanvas.getContext('2d');

let items = [];           // 所有素材定义
let instances = [];       // 舞台上的实例
let currentFrame = 0;     // 当前帧

// 视口控制
let stageScale = 1;
let stageOffsetX = 0;
let stageOffsetY = 0;
const MIN_SCALE = 0.5;
const MAX_SCALE = 3;

// 实例边界（用于点击检测）
const instanceBounds = [];

// 编辑相关
const editCanvas = document.getElementById('editCanvas');
const editCtx = editCanvas.getContext('2d');
let editingInstanceId = null;

// 选择状态
let selectedInstanceIndex = null;

// ====== 工具函数：裁剪空白边缘 ======
function trimImageWhitespace(imgData) {
  const { data, width, height } = imgData;
  let minX = width, minY = height, maxX = -1, maxY = -1;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      if (data[i + 3] > 0) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (maxX === -1) return null;

  const newWidth = maxX - minX + 1;
  const newHeight = maxY - minY + 1;
  const newData = new ImageData(newWidth, newHeight);

  for (let y = 0; y < newHeight; y++) {
    for (let x = 0; x < newWidth; x++) {
      const srcIdx = ((y + minY) * width + (x + minX)) * 4;
      const dstIdx = (y * newWidth + x) * 4;
      newData.data[dstIdx] = data[srcIdx];
      newData.data[dstIdx + 1] = data[srcIdx + 1];
      newData.data[dstIdx + 2] = data[srcIdx + 2];
      newData.data[dstIdx + 3] = data[srcIdx + 3];
    }
  }

  return {
    data: newData,
    width: newWidth,
    height: newHeight,
    offsetX: minX,
    offsetY: minY
  };
}

// ====== 预设图形生成器 ======
function createPresetShape(type, size = 'medium') {
  const sizes = { small: 20, medium: 40, large: 60 };
  const s = sizes[size];

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = s;
  canvas.height = s;
  ctx.clearRect(0, 0, s, s);
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 3;

  switch (type) {
    case 'rectangle':
      ctx.strokeRect(5, 5, s - 10, s - 10);
      break;
    case 'circle':
      ctx.beginPath();
      ctx.arc(s / 2, s / 2, (s - 10) / 2, 0, Math.PI * 2);
      ctx.stroke();
      break;
    case 'ellipse':
      ctx.beginPath();
      ctx.ellipse(s / 2, s / 2, (s - 10) / 2, (s - 20) / 2, 0, 0, Math.PI * 2);
      ctx.stroke();
      break;
    case 'line':
      ctx.beginPath();
      ctx.moveTo(5, s / 2);
      ctx.lineTo(s - 5, s / 2);
      ctx.stroke();
      break;
  }

  const imageDataFull = ctx.getImageData(0, 0, s, s);
  const trimmed = trimImageWhitespace(imageDataFull);

  return {
    name: `${type === 'rectangle' ? '方块' : type === 'circle' ? '圆' : type === 'ellipse' ? '椭圆' : '线'}#${Date.now() % 1000}`,
    imageData: trimmed.data,
    width: trimmed.width,
    height: trimmed.height,
    offsetX: trimmed.offsetX,
    offsetY: trimmed.offsetY,
    head: { x: 5, y: 5 },
    tail: { x: trimmed.width - 10, y: trimmed.height - 10 }
  };
}

// ====== 添加预设 ======
function addPreset(type, size) {
  const item = createPresetShape(type, size);
  addItemToStage(item);
}

function addItemToStage(item) {
  const newInstance = {
    itemIndex: items.length,
    keyframes: {}
  };

  const centerX = stageCanvas.width / 3 + Math.random() * 100;
  const centerY = stageCanvas.height / 3 + Math.random() * 100;

  newInstance.keyframes[currentFrame] = {
    x: centerX,
    y: centerY,
    rotation: 0,
    scaleX: 1,
    scaleY: 1
  };

  instances.push(newInstance);
  items.push(item);
  render();
  updateCustomItemList();
}

// ====== 渲染实例 ======
function drawInstance(inst, idx) {
  const item = items[inst.itemIndex];
  if (!item) return;

  const kf = inst.keyframes[currentFrame] || getPrevKeyframe(inst, currentFrame);
  if (!kf) return;

  const { x, y, rotation } = kf;
  const sx = kf.scaleX || 1;
  const sy = kf.scaleY || 1;

  stageCtx.save();
  stageCtx.translate(x, y);
  stageCtx.rotate(rotation);
  stageCtx.scale(sx, sy);

  try {
    const bitmap = new Image();
    bitmap.src = URL.createObjectURL(new Blob([item.imageData], { type: 'image/png' }));
    stageCtx.drawImage(bitmap, -item.offsetX, -item.offsetY);
    URL.revokeObjectURL(bitmap.src);
  } catch (e) {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = item.width;
    tempCanvas.height = item.height;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.putImageData(item.imageData, 0, 0);
    stageCtx.drawImage(tempCanvas, -item.offsetX, -item.offsetY);
  }

  stageCtx.restore();

  // 记录边界（用于交互）
  instanceBounds[idx] = {
    x: x - 50 * sx, y: y - 50 * sy,
    width: 100 * sx, height: 100 * sy,
    itemId: inst.itemIndex
  };
}

// 获取最近的关键帧
function getPrevKeyframe(inst, frame) {
  let last = null;
  for (let f = frame; f >= 0; f--) {
    if (inst.keyframes[f]) return inst.keyframes[f];
  }
  return { x: 100, y: 100, rotation: 0, scaleX: 1, scaleY: 1 };
}

// ====== 渲染舞台 ======
function render() {
  stageCtx.clearRect(0, 0, stageCanvas.width, stageCanvas.height);
  instanceBounds.length = 0;

  stageCtx.save();
  stageCtx.translate(stageOffsetX, stageOffsetY);
  stageCtx.scale(stageScale, stageScale);

  instances.forEach((inst, idx) => {
    drawInstance(inst, idx);
  });

  stageCtx.restore();
  updateZoomDisplay();
}

// ====== 视口控制 ======
stageCanvas.addEventListener('wheel', e => {
  e.preventDefault();
  const rect = stageCanvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const worldXBefore = (mouseX - stageOffsetX) / stageScale;
  const worldYBefore = (mouseY - stageOffsetY) / stageScale;

  const delta = e.deltaY > 0 ? 0.9 : 1.1;
  const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, stageScale * delta));

  stageOffsetX = mouseX - worldXBefore * newScale;
  stageOffsetY = mouseY - worldYBefore * newScale;
  stageScale = newScale;

  render();
});

function resetZoom() {
  stageScale = 1;
  stageOffsetX = 0;
  stageOffsetY = 0;
  render();
}

function updateZoomDisplay() {
  const percent = Math.round(stageScale * 100);
  document.getElementById('zoomDisplay').textContent = `${percent}%`;
}

// ====== 点击选择与双击编辑 ======
stageCanvas.addEventListener('click', handleStageClick);
stageCanvas.addEventListener('dblclick', handleStageDblClick);

function handleStageClick(e) {
  const rect = stageCanvas.getBoundingClientRect();
  const clientX = e.clientX - rect.left;
  const clientY = e.clientY - rect.top;

  const x = (clientX - stageOffsetX) / stageScale;
  const y = (clientY - stageOffsetY) / stageScale;

  for (let i = instances.length - 1; i >= 0; i--) {
    const bound = instanceBounds[i];
    if (!bound) continue;
    if (x >= bound.x && x <= bound.x + bound.width &&
      y >= bound.y && y <= bound.y + bound.height) {
      selectedInstanceIndex = i;
      showInspectorPanel(instances[i]);
      return;
    }
  }

  selectedInstanceIndex = null;
  hideInspectorPanel();
}

function handleStageDblClick(e) {
  const rect = stageCanvas.getBoundingClientRect();
  const clientX = e.clientX - rect.left;
  const clientY = e.clientY - rect.top;

  const x = (clientX - stageOffsetX) / stageScale;
  const y = (clientY - stageOffsetY) / stageScale;

  for (let i = instances.length - 1; i >= 0; i--) {
    const bound = instanceBounds[i];
    if (!bound) continue;
    if (x >= bound.x && x <= bound.x + bound.width &&
      y >= bound.y && y <= bound.y + bound.height) {
      openEditorForItem(instances[i].itemIndex);
      return;
    }
  }
}

// ====== 属性面板 ======
function showInspectorPanel(inst) {
  const item = items[inst.itemIndex];
  const kf = inst.keyframes[currentFrame] || getPrevKeyframe(inst, currentFrame);

  document.getElementById('inspectorPanel').style.display = 'block';
  document.getElementById('propName').value = item.name;
  document.getElementById('propX').value = kf.x.toFixed(2);
  document.getElementById('propY').value = kf.y.toFixed(2);
  document.getElementById('propRot').value = kf.rotation.toFixed(3);
  document.getElementById('propScaleX').value = (kf.scaleX || 1).toFixed(2);
  document.getElementById('propScaleY').value = (kf.scaleY || 1).toFixed(2);
}

function hideInspectorPanel() {
  document.getElementById('inspectorPanel').style.display = 'none';
}

function applyProperties() {
  if (selectedInstanceIndex === null) return;
  const inst = instances[selectedInstanceIndex];
  const frame = currentFrame;

  if (!inst.keyframes[frame]) {
    inst.keyframes[frame] = { ...getPrevKeyframe(inst, frame) };
  }

  const kf = inst.keyframes[frame];
  kf.x = parseFloat(document.getElementById('propX').value) || 0;
  kf.y = parseFloat(document.getElementById('propY').value) || 0;
  kf.rotation = parseFloat(document.getElementById('propRot').value) || 0;
  kf.scaleX = parseFloat(document.getElementById('propScaleX').value) || 1;
  kf.scaleY = parseFloat(document.getElementById('propScaleY').value) || 1;

  render();
}

function cancelProperties() {
  selectedInstanceIndex = null;
  hideInspectorPanel();
}

// 锁定比例
document.getElementById('lockScale').onchange = function () {
  const lock = this.checked;
  const scaleXInput = document.getElementById('propScaleX');
  const scaleYInput = document.getElementById('propScaleY');

  if (lock) {
    scaleXInput.oninput = () => {
      scaleYInput.value = this.value;
    };
    scaleYInput.oninput = () => {
      scaleXInput.value = this.value;
    };
  } else {
    scaleXInput.oninput = null;
    scaleYInput.oninput = null;
  }
};

//  ====== 编辑功能 ======
function openEditorForItem(itemIndex) {
  const item = items[itemIndex];
  editingInstanceId = itemIndex;

  document.getElementById('editOverlay').style.display = 'block';
  document.getElementById('editItemName').textContent = `✏️ 编辑：${item.name}`;

  editCtx.clearRect(0, 0, editCanvas.width, editCanvas.height);
  editCtx.imageSmoothingEnabled = false;

  const scale = Math.min(80 / item.width, 80 / item.height);
  const offsetX = (editCanvas.width - item.width * scale) / 2;
  const offsetY = (editCanvas.height - item.height * scale) / 2;

  createImageBitmap(item.imageData).then(bitmap => {
    editCtx.drawImage(bitmap, offsetX, offsetY, item.width * scale, item.height * scale);

    const hx = item.head.x * scale + offsetX;
    const hy = item.head.y * scale + offsetY;
    const tx = item.tail.x * scale + offsetX;
    const ty = item.tail.y * scale + offsetY;

    editCtx.fillStyle = 'red'; editCtx.beginPath(); editCtx.arc(hx, hy, 3, 0, Math.PI * 2); editCtx.fill();
    editCtx.fillStyle = 'blue'; editCtx.beginPath(); editCtx.arc(tx, ty, 3, 0, Math.PI * 2); editCtx.fill();
  });

  setupEditCanvasDrawing(offsetX, offsetY, scale, item.width, item.height);
}

function setupEditCanvasDrawing(offsetX, offsetY, scale, w, h) {
  let isDrawing = false;
  const paint = e => {
    if (!isDrawing) return;
    const rect = editCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = Math.floor((x - offsetX) / scale);
    const py = Math.floor((y - offsetY) / scale);
    if (px < 0 || px >= w || py < 0 || py >= h) return;

    const tmp = document.createElement('canvas');
    tmp.width = w; tmp.height = h;
    const tCtx = tmp.getContext('2d');
    tCtx.putImageData(items[editingInstanceId].imageData, 0, 0);
    tCtx.fillStyle = '#000';
    tCtx.fillRect(px - 1, py - 1, 3, 3);
    items[editingInstanceId].imageData = tCtx.getImageData(0, 0, w, h);
    openEditorForItem(editingInstanceId);
  };

  editCanvas.onmousedown = () => { isDrawing = true; paint(event); };
  editCanvas.onmousemove = () => { if (isDrawing) paint(event); };
  window.onmouseup = () => { isDrawing = false; };
}

function saveEdit() {
  document.getElementById('editOverlay').style.display = 'none';
  render();
  updateCustomItemList();
}

function cancelEdit() {
  document.getElementById('editOverlay').style.display = 'none';
}

// ====== 自定义项目列表 ======
function updateCustomItemList() {
  const container = document.getElementById('customItemList');
  while (container.children.length > 1) {
    container.removeChild(container.lastChild);
  }

  items.forEach((item, idx) => {
    const btn = document.createElement('button');
    btn.textContent = item.name;
    btn.title = `添加 "${item.name}"`;
    btn.style.fontSize = '12px'; btn.style.margin = '2px';
    btn.onclick = () => {
      const inst = {
        itemIndex: idx,
        keyframes: {}
      };
      inst.keyframes[currentFrame] = {
        x: stageCanvas.width / 3 + Math.random() * 80,
        y: stageCanvas.height / 3 + Math.random() * 80,
        rotation: 0, scaleX: 1, scaleY: 1
      };
      instances.push(inst);
      render();
    };
    container.appendChild(btn);
  });
}

// 初始化
updateCustomItemList();
render();