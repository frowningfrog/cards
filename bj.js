function start() {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
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
    ctx.drawImage(back, canvas.width/3, canvas.height/8, cardsize, cardsize*1.452);

    requestAnimationFrame(game)
}

function load(elem){        //      make        //
    elem.onload = () => {   //      sure        //
        draw(elem);         //      things      //
    }                       //      load!!!     //
}                           //      -—————-     //

const cardsize = 250;