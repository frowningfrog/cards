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
    var t = 0;
    var b = 0;
    let f = 0;
    
    dhand.forEach(dcard => {
        if(t==0){
            f = 500;
        }else{
            f = 0;
        };
        ctx.drawImage(dcard, f, 0, 500, 726, (midx-((dhand.length*w)/2))+t, midy/5, w, h);
        t+=w;
    });

    deck.forEach(card => {
        ctx.drawImage(card, f, 0, 500, 726, (midx-((deck.length*w)/2))+b, midy*1.05, w, h);
        b+=w;
    });

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
    ctx.fillText(canvas.width + " " + canvas.height, 1, 1);

    requestAnimationFrame(game)
}