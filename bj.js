function start() {
    const canvas = document.getElementById("canvas");
    canvas.width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;  // not fuzzy yay
    const resize = canvas.height/1000;
    ctx.scale(resize, resize);

    back = new Image();
    back.src = 'res/back.png';
    load(back);

    game();
}

function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(back, canvas.width/3, canvas.height/8, w, h);

    requestAnimationFrame(game)
}

function load(elem){        //      make        //
    elem.onload = () => {   //      sure        //
        draw(elem);         //      things      //
    }                       //      load!!!     //
}                           //      -—————-     //

const rat = 1.452;
const w = 250;
const h = w*rat;