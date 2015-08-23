 var canvas = document.getElementById("canvas"),
     ctx = canvas.getContext("2d"),
     i = 500,
     b = 500,
     angle = 0,
     c = 0,
     r = 0,
     y,x;

function resize() {
    w = canvas.width = window.innerWidth,
    h = canvas.height = window.innerHeight;
}
resize();
window.onresize = function(){
    resize();
}

function animate(highResTimestamp) {
    if (i == (-240)) {
        i = 200;
    }
    angle = .1 * i;
    x = w / 2 + (2 * angle) * Math.cos(angle);
    y = h / 2 + (2 * angle) * Math.sin(angle);

    ctx.beginPath();
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(0,0,0,.01)';
    ctx.fillRect(0, 0, w, h);
    ctx.shadowBlur = .9;
    ctx.lineTo(x, y);
    ctx.beginPath()
    ctx.moveTo(w / 2, h / 2);
    ctx.lineTo(x, y);
    ctx.shadowColor = "black";
    col(i);
    i--;
    requestAnimationFrame(animate);
    requestAnimationFrame(animate2);
 }

 function animate2(highResTimestamp) {
    if (b == (-540)) {
        b = 500;
        r = 0;
        c = 1;
    }
    angles = .1 * b - b;
    xs = w / 2 + (2 * angles) * Math.cos(angles);
    ys = h / 2 + (2 * angles) * Math.sin(angles);
    ctx.lineTo(xs, ys);
    ctx.moveTo(w / 2, h / 2);
    ctx.lineTo(xs, ys);
    col(b - 20);
   
    ctx.rotate(r);
    b--;
 }

 function col(x) {
    var colors = "hsl(" + x + ",100%,80%)";
    ctx.strokeStyle = colors;
    ctx.stroke();
 }

requestAnimationFrame(animate);