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
    const rat = 1.452;
    const w = (canvas.width > 600 && canvas.height > 1000) ? canvas.width/100 : 5;
    const h = w*rat;
    const dhand = [
        acespades,
        queenspades
    ];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var x = 0;
    var y = 0;
    let f = 0;
    
    dhand.forEach(dcard => {
        if(x==0){
            f = 500;
        }else{
            f = 0;
        };
        ctx.drawImage(dcard, f, 0, 500, 726, ((canvas.width/60)-((dhand.length*w)/2))+x, 1.5, w, h);
        x+=w;
    });

    deck.forEach(card => {
        ctx.drawImage(card, f, 0, 500, 726, ((canvas.width/60)-((deck.length*w)/2))+y, 11, w, h);
        y+=w;
    });

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.rect(0, 0, canvas.width/30, canvas.height/30);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = "green";
    ctx.rect(0, 0, canvas.width/30, canvas.height/30);
    ctx.stroke();

    ctx.font = "1px Arial";
    ctx.fillStyle = "green";
    ctx.fillText(canvas.width + " " + canvas.height, 1, 1);

    requestAnimationFrame(game)
}