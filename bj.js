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

    let flag = "sh";

    let textsize = 33;
    if(canvas.width < 1000 && canvas.height > 1000){
        textsize = 66;
    }
    ctx.font = textsize+"px Tahoma";
    ctx.fillStyle = "orangered";

    let begin = true;
    
    paint();

    function paint() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dtotal = 0;

        if(flag == "sh"){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            buttons();
            if(begin == true){
                roundstart();
                begin = false;
            }

            dhanddisplay();
            phanddisplay();
            write();
            
        }else 
        if(flag == "end"){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            dhanddisplay();
            phanddisplay();

            if(ptotal == dtotal){
                ctx.fillText("Push", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
            }else
            if(ptotal > 21){
                ctx.fillText("You're meh...", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
            }else
            if(ptotal == 21 && dtotal != 21){
                ctx.fillText("You won1", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
            }else
            if(ptotal != 21 && dtotal == 21){
                ctx.fillText("You're meh...", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
            }else
            if(ptotal <= 21 && dtotal > 21){
                ctx.fillText("You won2", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
            }else
            if(ptotal > 21 && dtotal <= 21){
                ctx.fillText("You're meh...", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
            }else
            if(ptotal <= 21 && dtotal < 21 &&
                ptotal > dtotal){
                ctx.fillText("You won3", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
            }else{
                ctx.fillText("You're meh...", (canvas.width/2)*0.6, (canvas.height/2)*1.8);
            }
            ctx.drawImage(next, 0, 0, 500, 250, (canvas.width/2)-(w/2), canvas.height*0.733, w, h/3);
            write();

            for(let d=0; d<=dhand.length; d++){
                discard.push(dhand[0]);
            }
            for(let c=0; c<=phand.length; c++){
                discard.push(phand[0]);
            }
            dhand.length = 0;
            phand.length = 0;
            roundstart();
        }

        // canvas dimensions
        //ctx.fillText(canvas.width + " " + canvas.height, (canvas.width/2)*0.6, (canvas.height/2)*1.8);
        // deck and discard piles
        function write(){
            ctx.fillText(deck.length + " " + discard.length, (canvas.width/2), (canvas.height/2)*1.8);
            ctx.fillText("Dealer: " + dtotal, (canvas.width/2)-w, (canvas.height/2)*0.25);
            ctx.fillText("Your hand: " + ptotal, (canvas.width/2)-w, (canvas.height/2)*0.89);
        }

        // buttons
        function buttons() {
            ctx.drawImage(stand, 0, 0, 500, 250, (canvas.width/2)-55-w, canvas.height*0.733, w, h/3);
            ctx.drawImage(hit, 0, 0, 500, 250, (canvas.width/2)+55, canvas.height*0.733, w, h/3);
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
            let f = 0;
            run();
            function run() {
                let check = 0;
                dhand.forEach(card => {
                    check += card.v;
                })
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
                ctx.drawImage(dhand[c], f, 0, 500, 726, form(dhand)+space(dhand)*c, (canvas.height/2)/3.75, w, h);
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

        function roundstart() {
            dhand.push(draw());
            phand.push(draw());
            dhand.push(draw());
            phand.push(draw());
        }
    }
    function draw() {
        let num = Math.floor(Math.random() * deck.length);
        let randomCard = deck[num];
        deck.splice(num, 1);
        return randomCard;
    }
    function shuffle() {
        for(let q=0; q<discard.length; q++){
            deck.push(discard.splice(discard[q], 1));
        }
    }
    canvas.addEventListener('click', function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.pageX - rect.left;
        const y = event.pageY - rect.top;

        // draw a card if player hits
        if(flag == "sh" &&
            x >= (canvas.width/2)+55 && 
            x <= ((canvas.width/2)+55)+w && 
            y >= canvas.height*0.733 && 
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
            x >= (canvas.width/2)-(w/2) && 
            x <= (canvas.width/2)+(w/2) && 
            y >= (canvas.height*0.733) && 
            y <= (canvas.height*0.733)+(h/3)){

            flag = "sh";
        }
        paint();
    })
}