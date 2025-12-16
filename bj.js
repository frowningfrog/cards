function start() {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    const resize = 30;
    ctx.scale(resize, resize);

    play();
}

function play() {
    const midx = canvas.width/60;
    const midy = canvas.height/60;
    const rat = 1.452;
    const w = (canvas.width > 600 && canvas.height > 1050) ? canvas.width/100 : 3.75;
    const h = w*rat;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ptotal = 0;
    let dtotal = 0;
    let dacecount = 0;
    let pacecount = 0;
    const dhand = [];
    const phand = [];
    deal1();

    for(let c=0; c<dhand.length; c++){
        if(c==0){
            ctx.drawImage(dhand[c], 500, 0, 500, 726, form(dhand)+space(dhand)*c, midy/3.75, w, h);
        }else{
            ctx.drawImage(dhand[c], 0, 0, 500, 726, form(dhand)+space(dhand)*c, midy/3.75, w, h);
            dtotal += dhand[c].v;
        };
    }

    for(let c=0; c<phand.length; c++){
        ctx.drawImage(phand[c], 0, 0, 500, 726, form(phand)+space(phand)*c, midy*0.9, w, h);
        if(phand[c].v == 11){
            pacecount++;
        }
        ptotal += phand[c].v;
    }

    if(ptotal > 21 && pacecount > 0){
        ptotal -= 10*pacecount;
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

    let textsize = 1.5;

    if(canvas.width > 1050 && canvas.height > 800){
        textsize = 4;
    }

    ctx.font = textsize+"px Calibri";
    ctx.fillStyle = "green";

    ctx.fillText("Dealer: " + dtotal, midx-((dhand.length*w)/2), midy*0.25);
    ctx.fillText("Your hand: " + ptotal, midx-((phand.length*w)/2), midy*0.89);

    ctx.fillText(canvas.width + " " + canvas.height, midx*0.6, midy*1.8);
    ctx.fillText("Stand", midx*0.6, midy*1.59);
    ctx.fillText("Hit", midx*1.3, midy*1.59);

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

    function deal1() {
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

requestAnimationFrame(play)