function loop() {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    const rat = 1.452;
    const w = (canvas.width > 600 && canvas.height > 1050) ? canvas.width/3.5 : 125;
    const h = w*rat;

    let ptotal = 0;
    let dtotal = 0;
    let dacecount = 0;
    let pacecount = 0;
    const dhand = [];
    const phand = [];
    dhand.push(draw());
    phand.push(draw());
    dhand.push(draw());
    phand.push(draw());

    function paint() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(let c=0; c<dhand.length; c++){
            if(c==0){
                ctx.drawImage(dhand[c], 500, 0, 500, 726, form(dhand)+space(dhand)*c, (canvas.height/2)/3.75, w, h);
            }else{
                ctx.drawImage(dhand[c], 0, 0, 500, 726, form(dhand)+space(dhand)*c, (canvas.height/2)/3.75, w, h);
                dtotal += dhand[c].v;
            };
        }
        for(let c=0; c<phand.length; c++){
            ctx.drawImage(phand[c], 0, 0, 500, 726, form(phand)+space(phand)*c, (canvas.height/2)*0.9, w, h);
            if(phand[c].v == 11){
                pacecount++;
            }
            ptotal += phand[c].v;
        }
        ctx.fillStyle = "gold";
        ctx.fillRect((canvas.width/2)-150, canvas.height*0.733, 115, 90);
        ctx.fillRect((canvas.width/2)+55, canvas.height*0.733, 115, 90);

        ctx.font = "33px Calibri";
        ctx.fillStyle = "black";
        ctx.fillText("Dealer: " + dtotal, (canvas.width/2)-((dhand.length*w)/2), (canvas.height/2)*0.25);
        ctx.fillText("Your hand: " + ptotal, (canvas.width/2)-((phand.length*w)/2), (canvas.height/2)*0.89);
        
        ctx.fillText("Stand", (canvas.width/2)-130, canvas.height*0.766);
        ctx.fillText("Hit", (canvas.width/2)+70, canvas.height*0.766);

        ctx.fillText(canvas.width + " " + canvas.height, (canvas.width/2)*0.6, (canvas.height/2)*1.8);

        ptotal = 0;
        dtotal = 0;
    }

    canvas.addEventListener('click', function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.pageX - rect.left;
        const y = event.pageY - rect.top;

        if(y >= canvas.height*0.733 && y <= (canvas.height*0.733)+90
            && x >= (canvas.width/2)+55 && x <= ((canvas.width/2)+55)+115){
                phand.push(draw());
                paint();
        }
    })

    function form(pile) {
        if((canvas.width/2)-(w*pile.length/2) > (canvas.width/2)/6){
            return ((canvas.width/2)-(w*pile.length)/2);
        }else{
            return (canvas.width/2)/6;
        }
    }
    function space(pile) {
        if((canvas.width/2)/pile.length*1.45 <= w) {
            return (canvas.width/2)/pile.length*1.45;
        }else{
            return w;
        }
    }

    function draw() {
        let num = Math.floor(Math.random() * deck.length);
        let randomCard = deck[num];
        deck.splice(num, 1);
        return randomCard;
    }
    paint();
}

requestAnimationFrame()