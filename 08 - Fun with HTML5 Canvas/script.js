const canvas = document.getElementById('draw');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.strokeStyle = "black";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let x = 0;
let y = 0;
let hue = 0;
let direction = true;
let isErasing = false;
function draw(e){
 if(!isDrawing) return;
 ctx.strokeStyle = `hsl(${hue},100%,50%)`;
 ctx.lineWidth = hue;
 ctx.beginPath();
 ctx.moveTo(x,y);
 ctx.lineTo(e.offsetX,e.offsetY);
 ctx.stroke();

 [x,y] = [e.offsetX,e.offsetY];
 hue++;
 if(hue >= 360) hue = 0;
 if(direction >= 100 || ctx.lineWidth <= 1) direction = !direction;
 direction ? ctx.lineWidth++ : ctx.lineWidth--;
 ctx.lineWidth++;
}

window.addEventListener('mousemove', draw);
window.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [x,y] = [e.offsetX,e.offsetY];
});
window.addEventListener('mouseout',() => isDrawing = false);
window.addEventListener('mouseup', () => isDrawing = false);
