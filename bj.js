function start() {
    const canvas = document.getElementById("canvas");
    canvas.width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;  // not fuzzy yay
    const resize = canvas.height/100;
    ctx.scale(resize, resize);

    game();
}

function game() {
    const dhand = [
        acespades,
        queenspades
    ];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var x = w;
    ctx.drawImage(back, 0, canvas.height/125, w, h);
    /*dhand.forEach(dcard => {
        ctx.drawImage(dcard, x, canvas.height/125, w, h);
        x+=w;
    });*/

    requestAnimationFrame(game)
}

const rat = 1.452;
const w = (canvas.width/6 >= 50) ? 16 : canvas.width/15;
const h = w*rat;