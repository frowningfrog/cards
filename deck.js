function load(elem){        //      make        //
    elem.onload = () => {   //      sure        //
        draw(elem);         //      things      //
    }                       //      load!!!     //
}

acespades = new Image();
acespades.vhigh = 11;
acespades.vlow = 1;
acespades.src = 'res/acespades.png';
acespades.frame = 0;
load(acespades);

twospades = new Image();
twospades.v = 2;
twospades.src = 'res/twospades.png';
twospades.frame = 0;
load(twospades);

queenspades = new Image();
queenspades.v = 10;
queenspades.src = 'res/queenspades.png';
queenspades.frame = 0;
load(queenspades);