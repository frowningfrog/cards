function load(elem){        //      make        //
    elem.onload = () => {   //      sure        //
        draw(elem);         //      things      //
    }                       //      load!!!     //
}

const deck = [];
const discard = [];

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
fivespades.v = 5;
fivespades.src = 'res/5spades.png';
fivespades.frame = 0;
deck.push(fivespades);
load(fivespades);

sixspades = new Image();
sixspades.v = 6;
sixspades.src = 'res/6spades.png';
sixspades.frame = 0;
deck.push(sixspades);
load(sixspades);

sevenspades = new Image();
sevenspades.v = 7;
sevenspades.src = 'res/7spades.png';
sevenspades.frame = 0;
deck.push(sevenspades);
load(sevenspades);

eightspades = new Image();
eightspades.v = 8;
eightspades.src = 'res/8spades.png';
eightspades.frame = 0;
deck.push(eightspades);
load(eightspades);

ninespades = new Image();
ninespades.v = 9;
ninespades.src = 'res/9spades.png';
ninespades.frame = 0;
deck.push(ninespades);
load(ninespades);

tenspades = new Image();
tenspades.v = 10;
tenspades.src = 'res/10spades.png';
tenspades.frame = 0;
deck.push(tenspades);
load(tenspades);

jackspades = new Image();
jackspades.v = 10;
jackspades.src = 'res/jackspades.png';
jackspades.frame = 0;
deck.push(jackspades);
load(jackspades);

queenspades = new Image();
queenspades.v = 10;
queenspades.src = 'res/queenspades.png';
queenspades.frame = 0;
deck.push(queenspades);
load(queenspades);

kingspades = new Image();
kingspades.v = 10;
kingspades.src = 'res/kingspades.png';
kingspades.frame = 0;
deck.push(kingspades);
load(kingspades);

acehearts = new Image();
acehearts.vhigh = 11;
acehearts.vlow = 1;
acehearts.src = 'res/acehearts.png';
acehearts.frame = 0;
deck.push(acehearts);
load(acehearts);

twohearts = new Image();
twohearts.v = 2;
twohearts.src = 'res/2hearts.png';
twohearts.frame = 0;
deck.push(twohearts);
load(twohearts);

threehearts = new Image();
threehearts.v = 3;
threehearts.src = 'res/3hearts.png';
threehearts.frame = 0;
deck.push(threehearts);
load(threehearts);

fourhearts = new Image();
fourhearts.v = 4;
fourhearts.src = 'res/4hearts.png';
fourhearts.frame = 0;
deck.push(fourhearts);
load(fourhearts);

fivehearts = new Image();
fivehearts.v = 5;
fivehearts.src = 'res/5hearts.png';
fivehearts.frame = 0;
deck.push(fivehearts);
load(fivehearts);

sixhearts = new Image();
sixhearts.v = 6;
sixhearts.src = 'res/6hearts.png';
sixhearts.frame = 0;
deck.push(sixhearts);
load(sixhearts);

sevenhearts = new Image();
sevenhearts.v = 7;
sevenhearts.src = 'res/7hearts.png';
sevenhearts.frame = 0;
deck.push(sevenhearts);
load(sevenhearts);

eighthearts = new Image();
eighthearts.v = 8;
eighthearts.src = 'res/8hearts.png';
eighthearts.frame = 0;
deck.push(eighthearts);
load(eighthearts);

ninehearts = new Image();
ninehearts.v = 9;
ninehearts.src = 'res/9hearts.png';
ninehearts.frame = 0;
deck.push(ninehearts);
load(ninehearts);

tenhearts = new Image();
tenhearts.v = 10;
tenhearts.src = 'res/10hearts.png';
tenhearts.frame = 0;
deck.push(tenhearts);
load(tenhearts);

jackhearts = new Image();
jackhearts.v = 10;
jackhearts.src = 'res/jackhearts.png';
jackhearts.frame = 0;
deck.push(jackhearts);
load(jackhearts);

queenhearts = new Image();
queenhearts.v = 10;
queenhearts.src = 'res/queenhearts.png';
queenhearts.frame = 0;
deck.push(queenhearts);
load(queenhearts);

kinghearts = new Image();
kinghearts.v = 10;
kinghearts.src = 'res/kinghearts.png';
kinghearts.frame = 0;
deck.push(kinghearts);
load(kinghearts);

aceclubs = new Image();
aceclubs.vhigh = 11;
aceclubs.vlow = 1;
aceclubs.src = 'res/aceclubs.png';
aceclubs.frame = 0;
deck.push(aceclubs);
load(aceclubs);

twoclubs = new Image();
twoclubs.v = 2;
twoclubs.src = 'res/2clubs.png';
twoclubs.frame = 0;
deck.push(twoclubs);
load(twoclubs);

threeclubs = new Image();
threeclubs.v = 3;
threeclubs.src = 'res/3clubs.png';
threeclubs.frame = 0;
deck.push(threeclubs);
load(threeclubs);

fourclubs = new Image();
fourclubs.v = 4;
fourclubs.src = 'res/4clubs.png';
fourclubs.frame = 0;
deck.push(fourclubs);
load(fourclubs);

fiveclubs = new Image();
fiveclubs.v = 5;
fiveclubs.src = 'res/5clubs.png';
fiveclubs.frame = 0;
deck.push(fiveclubs);
load(fiveclubs);

sixclubs = new Image();
sixclubs.v = 6;
sixclubs.src = 'res/6clubs.png';
sixclubs.frame = 0;
deck.push(sixclubs);
load(sixclubs);

sevenclubs = new Image();
sevenclubs.v = 7;
sevenclubs.src = 'res/7clubs.png';
sevenclubs.frame = 0;
deck.push(sevenclubs);
load(sevenclubs);

eightclubs = new Image();
eightclubs.v = 8;
eightclubs.src = 'res/8clubs.png';
eightclubs.frame = 0;
deck.push(eightclubs);
load(eightclubs);

nineclubs = new Image();
nineclubs.v = 9;
nineclubs.src = 'res/9clubs.png';
nineclubs.frame = 0;
deck.push(nineclubs);
load(nineclubs);

tenclubs = new Image();
tenclubs.v = 10;
tenclubs.src = 'res/10clubs.png';
tenclubs.frame = 0;
deck.push(tenclubs);
load(tenclubs);

jackclubs = new Image();
jackclubs.v = 10;
jackclubs.src = 'res/jackclubs.png';
jackclubs.frame = 0;
deck.push(jackclubs);
load(jackclubs);

queenclubs = new Image();
queenclubs.v = 10;
queenclubs.src = 'res/queenclubs.png';
queenclubs.frame = 0;
deck.push(queenclubs);
load(queenclubs);

kingclubs = new Image();
kingclubs.v = 10;
kingclubs.src = 'res/kingclubs.png';
kingclubs.frame = 0;
deck.push(kingclubs);
load(kingclubs);

acediamonds = new Image();
acediamonds.vhigh = 11;
acediamonds.vlow = 1;
acediamonds.src = 'res/acediamonds.png';
acediamonds.frame = 0;
deck.push(acediamonds);
load(acediamonds);

twodiamonds = new Image();
twodiamonds.v = 2;
twodiamonds.src = 'res/2diamonds.png';
twodiamonds.frame = 0;
deck.push(twodiamonds);
load(twodiamonds);

threediamonds = new Image();
threediamonds.v = 3;
threediamonds.src = 'res/3diamonds.png';
threediamonds.frame = 0;
deck.push(threediamonds);
load(threediamonds);

fourdiamonds = new Image();
fourdiamonds.v = 4;
fourdiamonds.src = 'res/4diamonds.png';
fourdiamonds.frame = 0;
deck.push(fourdiamonds);
load(fourdiamonds);

fivediamonds = new Image();
fivediamonds.v = 5;
fivediamonds.src = 'res/5diamonds.png';
fivediamonds.frame = 0;
deck.push(fivediamonds);
load(fivediamonds);

sixdiamonds = new Image();
sixdiamonds.v = 6;
sixdiamonds.src = 'res/6diamonds.png';
sixdiamonds.frame = 0;
deck.push(sixdiamonds);
load(sixdiamonds);

sevendiamonds = new Image();
sevendiamonds.v = 7;
sevendiamonds.src = 'res/7diamonds.png';
sevendiamonds.frame = 0;
deck.push(sevendiamonds);
load(sevendiamonds);

eightdiamonds = new Image();
eightdiamonds.v = 8;
eightdiamonds.src = 'res/8diamonds.png';
eightdiamonds.frame = 0;
deck.push(eightdiamonds);
load(eightdiamonds);

ninediamonds = new Image();
ninediamonds.v = 9;
ninediamonds.src = 'res/9diamonds.png';
ninediamonds.frame = 0;
deck.push(ninediamonds);
load(ninediamonds);

tendiamonds = new Image();
tendiamonds.v = 10;
tendiamonds.src = 'res/10diamonds.png';
tendiamonds.frame = 0;
deck.push(tendiamonds);
load(tendiamonds);

jackdiamonds = new Image();
jackdiamonds.v = 10;
jackdiamonds.src = 'res/jackdiamonds.png';
jackdiamonds.frame = 0;
deck.push(jackdiamonds);
load(jackdiamonds);

queendiamonds = new Image();
queendiamonds.v = 10;
queendiamonds.src = 'res/queendiamonds.png';
queendiamonds.frame = 0;
deck.push(queendiamonds);
load(queendiamonds);

kingdiamonds = new Image();
kingdiamonds.v = 10;
kingdiamonds.src = 'res/kingdiamonds.png';
kingdiamonds.frame = 0;
deck.push(kingdiamonds);
load(kingdiamonds);