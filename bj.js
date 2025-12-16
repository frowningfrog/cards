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
    const w = (canvas.width > 600 && canvas.height > 1000) ? canvas.width/100 : 4;
    const h = w*rat;
    const dhand = [];
    const phand = [];

    round();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    function form(pile) {
        if(midx-(w*pile.length/2) > midx/6){
            return (midx-(w*pile.length)/2);
        }else{
            return midx/6;
        }
    }
    function space(pile) {
        if(midx/pile.length*1.45 <= w) {
            return midx/pile.length*1.45;
        }else{
            return w;
        }
    }
    let f = 0;

    for(let c=0; c<dhand.length; c++){
        if(c==0){
            ctx.drawImage(dhand[c], 500, 0, 500, 726, form(dhand)+space(dhand)*c, midy/3.75, w, h);
        }else{
            ctx.drawImage(dhand[c], 0, 0, 500, 726, form(dhand)+space(dhand)*c, midy/3.75, w, h);
        };
    }

    for(let c=0; c<phand.length; c++){
        ctx.drawImage(phand[c], 0, 0, 500, 726, form(phand)+space(phand)*c, midy*0.9, w, h);
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

    ctx.font = midx/11+"px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("greetings, programs", midx*0.63, midy*1.6);

    function round() {
        dhand.push(draw());
        phand.push(draw());
        dhand.push(draw());
        phand.push(draw());
    }

    function draw() {
        let num = Math.floor(Math.random() * deck.length);
        let randomCard = deck[num];
        deck.splice(num, 1);
        return randomCard;
    }
}

requestAnimationFrame(game)