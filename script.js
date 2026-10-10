document.querySelectorAll('.poem-card').forEach(function (card) {
  var toggle = card.querySelector('.poem-toggle');
  var body = card.querySelector('.poem-full');
  if (!toggle || !body) return;

  toggle.setAttribute('role', 'button');
  toggle.setAttribute('tabindex', '0');
  toggle.setAttribute('aria-expanded', 'false');

  function setOpen(open) {
    card.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'show less' : 'read more';
    body.style.maxHeight = open ? body.scrollHeight + 'px' : '';
  }

  toggle.addEventListener('click', function () {
    setOpen(!card.classList.contains('is-open'));
  });

  toggle.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(!card.classList.contains('is-open'));
    }
  });
});


var WORDS = ["threnody", "ephemeral", "evanescence", "sunstruck", "lullaby", "cinderella", "tinder", "wisteria", "beauteous", "isolate", "almost", "nadir", "zenith", "love", "lovable"];

(function showWordOfTheDay() {
  var titleEl = document.getElementById('wordTitle');
  if (!titleEl || !WORDS.length) return;

  var now = new Date();
  var dayNumber = Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000);

  titleEl.textContent = WORDS[dayNumber % WORDS.length];
})();