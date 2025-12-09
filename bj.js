function start() {
    const canvas = document.getElementById("canvas");
    canvas.width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;  // not fuzzy yay
    const resize = 1.75;
    ctx.scale(resize, resize);

    back = new Image();
    back.src = 'res/back.png';

    acespades = new Image();
    acespades.v = 11;
    acespades.src = 'res/acespades.png';

    twospades = new Image();

    
    queenspades = new Image();
    queenspades.v = 10;
    queenspades.src = 'res/queenspades.png';

    game();
}

function game() {
    const m = canvas.width/4;
    const dhand = [
        acespades,
        queenspades
    ];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.drawImage(back, m-(w/2), canvas.height/13, w, h);
    dhand.forEach(dcard => {
        ctx.drawImage(dcard, m-(w/5), canvas.height/13, w, h);
    });

    requestAnimationFrame(game)
}

const rat = 1.452;
const w = 100;
const h = w*rat;