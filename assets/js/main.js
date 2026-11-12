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
  var en = document.documentElement.lang === 'en';
  fetch('/config.json', { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (c) {
      if (!c || typeof c.neemtClientenAan !== 'boolean') return;
      if (c.neemtClientenAan) {
        tekst.textContent = en
          ? (c.tekstBeschikbaarEN || 'We currently have availability for new clients.')
          : (c.tekstBeschikbaar || 'Er is op dit moment plek voor nieuwe cliënten.');
      } else {
        balk.classList.add('is-vol');
        tekst.textContent = en
          ? (c.tekstVolEN || 'We are currently fully booked. Feel free to get in touch so we can look at the options together.')
          : (c.tekstVol || 'Op dit moment zijn alle plekken bezet. Neem gerust contact op, dan kijken we samen naar de mogelijkheden.');
      }
      balk.classList.add('is-zichtbaar');
    })
    .catch(function () {});
})();
