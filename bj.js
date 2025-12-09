function start() {
    const canvas = document.getElementById("canvas");
    canvas.width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;  // not fuzzy yay
    const resize = canvas.height/750;
    ctx.scale(resize, resize);

    back = new Image();
    back.src = 'res/back.png';

    acespades = new Image();
    acespades.v = 11;
    acespades.src = 'res/acespades.png';
    
    queenspades = new Image();
    queenspades.v = 10;
    queenspades.src = 'res/queenspades.png';

    game();
}

function game() {
    const m = (canvas.width/2)-(w/2);
    const dhand = [
        acespades,
        queenspades
    ];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(back, m-(w/2), canvas.height/13, w, h);
    var half = 0;
    dhand.forEach(dcard => {
        ctx.drawImage(dcard, m+half, canvas.height/13, w, h);
        half = w/2;
    });

    requestAnimationFrame(game)
}

const rat = 1.452;
const w = 250;
const h = w*rat;