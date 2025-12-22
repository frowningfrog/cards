function start() {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight*0.80;
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    const rat = 1.452;
    const w = (canvas.width > 600 && canvas.height > 1050) ? canvas.width/3.5 : 125;
    const h = w*rat;

    const dhand = [];
    const phand = [];
    let ptotal = 0;
    let dtotal = 0;

    let won = 0;
    let ties = 0;
    let lost = 0;

    let flag = "sh";
    let wait = "true";

    let textsize = 33;
    if(canvas.width < 1000 && canvas.height > 1000){
        textsize = 66;
    }
    ctx.font = textsize+"px Tahoma";
    ctx.fillStyle = "orangered";

    let begin = true;

    nr.style.top = "10000px";
    nr.style.left = (canvas.width/2)-nr.width/2+"px";
    stay.style.top = canvas.height+"px";
    more.style.top = canvas.height+"px";
    stay.style.left = (canvas.width/2)-333+"px";
    more.style.left = (canvas.width/2)+75+"px";
    
    paint();

    function paint() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dtotal = 0;

        if(ptotal > 21 && flag != "end"){
            stay.style.display = 'none';
            more.style.display = 'none';
            nr.style.display = 'inline-block';
            flag="end";
        }

        if(flag == "sh"){
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            if(begin == true){
                roundstart();
                begin = false;
            }

            /*dhanddisplay();
            phanddisplay();*/
            
            ctx.fillText("Your hand: " + ptotal, (canvas.width/2)-w, (canvas.height/2)*1.13);
        }else 
        if(flag == "end"){
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            dhanddisplay();
            phanddisplay();

            if(ptotal == dtotal){
                ctx.fillText("Push", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
                if(wait==true){
                    ties++;
                } wait = false;
            }else
            if(ptotal > 21){
                ctx.fillText("You're meh...", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
                if(wait==true){
                    lost++;
                } wait = false;
            }else
            if(ptotal == 21 && dtotal != 21){
                ctx.fillText("You won1", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
                if(wait==true){
                    won++;
                } wait = false;
            }else
            if(ptotal != 21 && dtotal == 21){
                ctx.fillText("You're meh...", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
                if(wait==true){
                    lost++;
                } wait = false;
            }else
            if(ptotal <= 21 && dtotal > 21){
                ctx.fillText("You won2", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
                if(wait==true){
                    won++;
                } wait = false;
            }else
            if(ptotal <= 21 && dtotal < 21 &&
                ptotal > dtotal){
                ctx.fillText("You won3", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
                if(wait==true){
                    won++;
                } wait = false;
            }else{
                ctx.fillText("You're meh...", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
                if(wait==true){
                    lost++;
                } wait = false;
            }
            //ctx.drawImage(next, 0, 0, 500, 250, (canvas.width/2)-(w/2), canvas.height*0.733, w, h/3);
            ctx.fillText("Dealer: " + dtotal, (canvas.width/2)-w, (canvas.height/2)*0.275);
            ctx.fillText("Your hand: " + ptotal, (canvas.width/2)-w, (canvas.height/2)*1.13);
        }

        // canvas dimensions
        //ctx.fillText(canvas.width + " " + canvas.height, (canvas.width/2)*0.6, (canvas.height/2)*1.8);
        
        /* buttons
        function buttons() {
            ctx.drawImage(stand, 0, 0, 500, 250, (canvas.width/2)-55-w, canvas.height*0.733, w, h/3);
            ctx.drawImage(hit, 0, 0, 500, 250, (canvas.width/2)+55, canvas.height*0.733, w, h/3);
        }*/

        ctx.fillText(deck.length + " " + discard.length + "   Won: " + won + " Tied: " + ties + " Lost: " + lost, (canvas.width/2)-(w*1.33), (canvas.height/2)*1.9);

        dhanddisplay();
        phanddisplay();

        function phanddisplay() {
            let pacecount = 0;
            ptotal = 0;
            for(let c=0; c<phand.length; c++){
                ctx.drawImage(phand[c], 0, 0, 500, 726, form(phand)+space(phand)*c, (canvas.height/2)*1.15, w, h);
                if(phand[c].v == 11){
                    pacecount++;
                }
                ptotal += phand[c].v;
            }

            if(ptotal > 21 && pacecount > 0){
                ptotal -= pacecount*10;
            }
            /*if(ptotal > 21 && flag != "end"){
                stay.style.display = 'none';
                more.style.display = 'none';
                nr.style.display = 'inline-block';
                flag="end";
                paint();
            }*/
        }

        function dhanddisplay() {
            let dacecount = 0;
            dtotal = 0;
            let f = 0;
            run();
            function run() {
                let check = 0;
                for(let d=0; d<dhand.length; d++){
                    if(dhand[d].v == 11){
                        dacecount++;
                    }
                    check += dhand[d].v;
                }
                if(check > 21 && dacecount > 0){
                    check -= dacecount*10;
                }
                if(check<17 && flag=="end"){
                    dhand.push(draw());
                    run();
                }
            };
            for(let c=0; c<dhand.length; c++){
                if(c==0 && flag=="sh"){
                    f=500;
                }else{
                    f=0;
                }
                ctx.drawImage(dhand[c], f, 0, 500, 726, form(dhand)+space(dhand)*c, (canvas.height/2)/3.3, w, h);
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

        requestAnimationFrame(paint);
    }

    function draw() {
        if(deck.length < 1){
            for(let c=0; c<discard.length; c++){
                deck.push(discard[c]);
            }
            discard.length = 0;
        }
        let num = Math.floor(Math.random() * deck.length);
        let randomCard = deck[num];
        deck.splice(num, 1);
        return randomCard;
    }

    function roundstart() {
        dhand.push(draw());
        phand.push(draw());
        dhand.push(draw());
        phand.push(draw());
    }

    /*canvas.addEventListener('click', function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.pageX - rect.left;
        const y = event.pageY - rect.top;

        // draw a card if player hits
        if(flag == "sh" &&
            x >= (canvas.width/2)+55 && 
            x <= (canvas.width/2)+55+w && 
            y >= (canvas.height*0.733) && 
            y <= (canvas.height*0.733)+(h/3)){
            
            phand.push(draw());
        }else // stand
        if(flag == "sh" && 
            x >= (canvas.width/2)-55-w && 
            x <= (canvas.width/2)-55 && 
            y >= (canvas.height*0.733) && 
            y <= (canvas.height*0.733)+(h/3)){

            flag = "end";
        }else // next round
        if(flag == "end" && 
            x >= (canvas.width/2)-250 && 
            x <= (canvas.width/2)+250 && 
            y >= (canvas.height*0.733) && 
            y <= (canvas.height*0.733)+(h/3)){

            flag = "sh";
        }else{
            // do nothing
        }
        paint();
    })*/

    let standBtn = document.getElementById("stay");
    let hitBtn = document.getElementById("more");
    let nextRound = document.getElementById("nr");

    standBtn.addEventListener("click", function() {
        more.style.top = "10000px";
        stay.style.top = "10000px";
        nr.style.top = canvas.height+"px";
        flag="end";
        wait = true;
    });

    hitBtn.addEventListener("click", function() {
        phand.push(draw());
    });

    nextRound.addEventListener("click", function() {
        more.style.top = canvas.height+"px";
        stay.style.top = canvas.height+"px";
        nr.style.top = "10000px";
        for(let d=0; d<dhand.length; d++){
            discard.push(dhand[d]);
        }
        for(let c=0; c<phand.length; c++){
            discard.push(phand[c]);
        }
        flag="sh";
        dhand.length = 0;
        phand.length = 0;
        roundstart();
        flag="sh";
    });
}