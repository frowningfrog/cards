function start() {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    const rat = 1.452;
    const w = (canvas.width > 600 && canvas.height > 1050) ? canvas.width/3.5 : 125;
    const h = w*rat;

    const dhand = [];
    const phand = [];
    let ptotal = 0;
    let dtotal = 0;

    let flag = "";

    let textsize = 33;
    if(canvas.width < 1000 && canvas.height > 1000){
        textsize = 66;
    }
    ctx.font = textsize+"px Tahoma";
    ctx.fillStyle = "orangered";

    paint();

    function paint() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if(phand.length < 1){
            dhand.push(draw());
            phand.push(draw());
            dhand.push(draw());
            phand.push(draw());
        }
        dtotal = 0;
        
        // display dealer hand before player stands
        for(let c=0; c<dhand.length; c++){
            if(c==0){
                ctx.drawImage(dhand[c], 500, 0, 500, 726, form(dhand)+space(dhand)*c, (canvas.height/2)/3.75, w, h);
            }else{
                ctx.drawImage(dhand[c], 0, 0, 500, 726, form(dhand)+space(dhand)*c, (canvas.height/2)/3.75, w, h);
                dtotal += dhand[c].v;
            };
        }
        // display player hand
        phanddisplay();

        // bust if player hand is over 21
        if(ptotal > 21){
            
        }

        buttons();

        // buttons
        function buttons() {
            ctx.drawImage(stand, 0, 0, 500, 250, (canvas.width/2)-55-w, canvas.height*0.733, w, h/3);
            ctx.drawImage(hit, 0, 0, 500, 250, (canvas.width/2)+55, canvas.height*0.733, w, h/3);
        }

        boring();

        if(flag != ""){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            phanddisplay();
            dhanddisplay();
            ctx.drawImage(next, 0, 0, 500, 250, (canvas.width/2)-(w/2), canvas.height*0.733, w, h/3);
            if(flag == "won"){
                ctx.fillText("You WIN!!!", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
            }else
            if(flag == "lost"){
                ctx.fillText("You're meh...", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
            }else
            if(flag == "push"){
                ctx.fillText("Push", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
            }
            boring();
        }

        // canvas dimensions
        //ctx.fillText(canvas.width + " " + canvas.height, (canvas.width/2)*0.6, (canvas.height/2)*1.8);
        //requestAnimationFrame(paint);

        function boring() {
            ctx.fillText("Dealer: " + dtotal, (canvas.width/2)-w, (canvas.height/2)*0.25);
            ctx.fillText("Your hand: " + ptotal, (canvas.width/2)-w, (canvas.height/2)*0.89);
        }

        function phanddisplay() {
            let pacecount = 0;
            ptotal = 0;
            for(let c=0; c<phand.length; c++){
                ctx.drawImage(phand[c], 0, 0, 500, 726, form(phand)+space(phand)*c, (canvas.height/2)*0.9, w, h);
                if(phand[c].v == 11){
                    pacecount++;
                }
                ptotal += phand[c].v;
            }

            if(ptotal > 21 && pacecount > 0){
                ptotal -= pacecount*10;
            }
        }

        function dhanddisplay() {
            let dacecount = 0;
            dtotal = 0;
            for(let c=0; c<dhand.length; c++){
                ctx.drawImage(dhand[c], 0, 0, 500, 726, form(dhand)+space(dhand)*c, (canvas.height/2)/3.75, w, h);
                if(dhand[c].v == 11){
                    dacecount++;
                }
                dtotal += dhand[c].v;
            }

            if(dtotal > 21 && dacecount > 0){
                dtotal -= dacecount*10;
            }
        }

        // hand cards beginning and spacing
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
        canvas.addEventListener('click', function(event) {
            const rect = canvas.getBoundingClientRect();
            const x = event.pageX - rect.left;
            const y = event.pageY - rect.top;

            // draw a card if player hits
            if(flag == "" && 
                x >= (canvas.width/2)+55 && 
                x <= ((canvas.width/2)+55)+w && 
                y >= canvas.height*0.733 && 
                y <= (canvas.height*0.733)+(h/3)){

                phand.push(draw());
            }else // stand
            if(flag == "" && 
                x >= (canvas.width/2)-55-w && 
                x <= (canvas.width/2)-55 && 
                y >= canvas.height*0.733 && 
                y <= (canvas.height*0.733)+(h/3)){

                if(ptotal == dtotal){
                    flag = "push";
                }else
                if(ptotal == 21 && dtotal != 21){
                    flag = "won";
                }else
                if(ptotal != 21 && dtotal == 21){
                    flag = "lost";
                }else
                if(ptotal <= 21 && dtotal > 21){
                    flag = "won";
                }else
                if(ptotal > 21 && dtotal <= 21){
                    flag = "lost";
                }else
                if(ptotal <= 21 && dtotal < 21 &&
                    ptotal > dtotal){
                    flag = "won";
                }else{
                    flag = "lost";
                }
            }else // next round
            if(flag != "" && 
                x >= (canvas.width/2)-(w/2) && 
                x <= (canvas.width/2)+(w/2) && 
                y >= canvas.height*0.733 && 
                y <= (canvas.height*0.733)+(h/3)){
                
                for(let c=0; c<=dhand.length; c++){
                    discard.push(dhand[c]);
                    dhand.splice(dhand[c], 1);
                }
                for(let c=0; c<=phand.length; c++){
                    discard.push(phand[c]);
                    phand.splice(phand[c], 1);
                }
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                flag = "";
                buttons();
                paint();
            }
            paint();
        })
    }
}