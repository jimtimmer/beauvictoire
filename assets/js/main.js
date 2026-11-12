// Mobiel menu
(function () {
  var knop = document.querySelector('.menu-knop');
  var nav = document.getElementById('nav');
  if (!knop || !nav) return;
  knop.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    knop.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Beschikbaarheid: aan/uit via /config.json  ->  { "neemtClientenAan": true }
(function () {
  var balk = document.querySelector('.beschikbaar');
  if (!balk) return;
  var tekst = balk.querySelector('.beschikbaar-tekst');
  fetch('/config.json', { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (c) {
      if (!c || typeof c.neemtClientenAan !== 'boolean') return;
      if (c.neemtClientenAan) {
        tekst.textContent = c.tekstBeschikbaar || 'Er is op dit moment plek voor nieuwe cliënten.';
      } else {
        balk.classList.add('is-vol');
        tekst.textContent = c.tekstVol || 'Op dit moment zijn alle plekken bezet. Neem gerust contact op, dan kijken we samen naar de mogelijkheden.';
      }
      balk.classList.add('is-zichtbaar');
    })
    .catch(function () {});
})();
