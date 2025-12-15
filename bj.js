function start() {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;  // not fuzzy yay
    const resize = 30;
    ctx.scale(resize, resize);

    game();
}

function game() {
    const midx = canvas.width/60;
    const midy = canvas.height/60;
    const rat = 1.452;
    const w = (canvas.width > 600 && canvas.height > 1000) ? canvas.width/100 : 5;
    const h = w*rat;
    const dhand = [
        acespades,
        queenspades
    ];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    function form(pile) {
        return midx-(w*(pile.length/2));
    }
    let f = 0;

    for(let c=0; c<dhand.length; c++){
        if(c==0){
            f = 500;
        }else{
            f = 0;
        };
        ctx.drawImage(dhand[c], f, 0, 500, 726, form(dhand)+(w*c), midy/6, w, h);
    }

    for(let c=0; c<deck.length; c++){
        ctx.drawImage(deck[c], f, 0, 500, 726, form(deck)+(w*c), midy, w, h);
    }

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.rect(0, 0, midx*2, midy*2);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = "green";
    ctx.rect(0, 0, midx*2, midy*2);
    ctx.stroke();

    ctx.font = "1px Arial";
    ctx.fillStyle = "green";
    ctx.fillText(canvas.width + " " + canvas.height + " " + midx, 1, 1);

    requestAnimationFrame(game)
}