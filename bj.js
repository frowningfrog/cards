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
    const w = (canvas.width > 600 && canvas.height > 1000) ? canvas.width/100 : 6;
    const h = w*rat;
    const dhand = [
        acespades,
        queenspades
    ];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var x = 0;
    //ctx.drawImage(back, 0, 0, w, h);
    dhand.forEach(dcard => {
        ctx.drawImage(dcard, dcard.frame, 0, 500, 726, x, 0, w, h);
        x+=w;
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