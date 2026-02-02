var pytn = document.getElementById('pytn');
var odpw = document.getElementById('odpw');
var ptn = document.getElementById('ptn');

var klik = 0;
var tnie = ['Jesteś pewna?', 'Na pewno...?', 'No błagam...', 'No ej no...', 'Lusia wybuchnie...'];

function powie() {
    klik = klik + 1;

    var rozm = 18 + (klik * 6);
    var odgd = 8 + (klik * 2);
    var odlp = 16 + (klik * 6);

    var pnst = ptn.style;
    pnst.fontSize = rozm + 'px';
    pnst.padding = odgd + 'px ' + odlp + 'px';

    var idx = (klik - 1) % tnie.length;
    ptn.textContent = tnie[idx];
}

function pokaz() {
    pytn.style.display = 'none';
    odpw.style.display = 'block';
}

function przen() {
    var mxs = window.innerWidth - ptn.offsetWidth - 40;
    var mxw = window.innerHeight - ptn.offsetHeight - 40;

    var posx = Math.random() * mxs;
    var posy = Math.random() * mxw;

    var lewo = Math.max(20, posx);
    var gora = Math.max(20, posy);

    var pnst = ptn.style;
    pnst.position = 'fixed';
    pnst.left = lewo + 'px';
    pnst.top = gora + 'px';
}
