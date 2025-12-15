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

threespades = new Image();
threespades.v = 3;
threespades.src = 'res/3spades.png';
threespades.frame = 0;
deck.push(threespades);
load(threespades);

fourspades = new Image();
fourspades.v = 4;
fourspades.src = 'res/4spades.png';
fourspades.frame = 0;
deck.push(fourspades);
load(fourspades);

fivespades = new Image();
fivespades.v = 4;
fivespades.src = 'res/5spades.png';
fivespades.frame = 0;
deck.push(fivespades);
load(fivespades);

queenspades = new Image();
queenspades.v = 10;
queenspades.src = 'res/queenspades.png';
queenspades.frame = 0;
deck.push(queenspades);
load(queenspades);