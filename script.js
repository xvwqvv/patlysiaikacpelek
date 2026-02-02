var pytn = document.getElementById('pytn');
var odpw = document.getElementById('odpw');
var ptn = document.getElementById('ptn');
var klik = 0;
var tnie = ['Jesteś pewna?', 'Na pewno...?', 'No błagam...', 'No ej no...', 'Lusia wybuchnie...'];

function powie() {
  klik++;
  ptn.style.fontSize = (18 + klik * 6) + 'px';
  ptn.style.padding = (8 + klik * 2) + 'px ' + (16 + klik * 6) + 'px';
  ptn.textContent = tnie[(klik - 1) % tnie.length];
}

function pokaz() {
  pytn.style.display = 'none';
  odpw.style.display = 'block';
}

function przen() {
  ptn.style.position = 'fixed';
  ptn.style.left = Math.max(20, Math.random() * (window.innerWidth - ptn.offsetWidth - 40)) + 'px';
  ptn.style.top = Math.max(20, Math.random() * (window.innerHeight - ptn.offsetHeight - 40)) + 'px';
}
