function start() {
    const canvas = document.getElementById("canvas");
    canvas.width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;  // not fuzzy yay
    const resize = 25;
    ctx.scale(resize, resize);

    game();
}

function game() {
    const rat = 1.452;
    const w = (canvas.width/100 < 7) ? canvas.width/100 : 7.5;
    const h = w*rat;
    const dhand = [
        acespades,
        queenspades
    ];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var x = w;
    ctx.drawImage(back, 0, 0, w, h);
    dhand.forEach(dcard => {
        ctx.drawImage(dcard, x, 0, w, h);
        x+=w;
    });
    ctx.rect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(game)
}