function start() {
    const canvas = document.getElementById("canvas");
    canvas.width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;  // not fuzzy yay
    const resize = canvas.height/1000;
    //ctx.scale(resize, resize);

    back = new Image();
    back.src = 'res/back.png';
    load(back);
    acespades = new Image();
    acespades.v = 11;
    acespades.src = 'res/acespades.png';
    load(acespades);
    queenspades = new Image();
    queenspades.v = 10;
    queenspades.src = 'res/queenspades.png';
    load(queenspades);

    game();
}

function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(back, (canvas.width/4)-(w/2), canvas.height/8, w, h);
    ctx.drawImage(acespades, (canvas.width/6)*3-(w/2), canvas.height/8, w, h);
    ctx.drawImage(queenspades, (canvas.width/6)*4.5-(w/2), canvas.height/8, w, h);

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