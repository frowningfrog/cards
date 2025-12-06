function start() {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;   canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;  // not fuzzy yay
    const resize = canvas.width/360;
    ctx.scale(resize, resize);      // scales to window nicely

    game();
}
function game() {
    
}