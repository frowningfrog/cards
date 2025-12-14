function load(elem){        //      make        //
    elem.onload = () => {   //      sure        //
        draw(elem);         //      things      //
    }                       //      load!!!     //
}

const deck = [];

acespades = new Image();
acespades.vhigh = 11;
acespades.vlow = 1;
acespades.src = 'res/acespades.png';
acespades.frame = 0;
deck.push(acespades);
load(acespades);

twospades = new Image();
twospades.v = 2;
twospades.src = 'res/2spades.png';
twospades.frame = 0;
deck.push(twospades);
load(twospades);

queenspades = new Image();
queenspades.v = 10;
queenspades.src = 'res/queenspades.png';
queenspades.frame = 0;
deck.push(queenspades);
load(queenspades);