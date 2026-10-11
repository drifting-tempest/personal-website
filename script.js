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


(function () {
  const container = document.querySelector('.snow');
  if (!container) return;

  const COUNT = 40;       
  const ROUND_CHANCE = 0.2; 

  for (let i = 0; i < COUNT; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot';

    const isRound = Math.random() < ROUND_CHANCE;
    if (isRound) dot.classList.add('round');

    const size = isRound ? Math.random() * 3 + 3 : Math.random() * 10 + 12;
    const fallTime = Math.random() * 5 + 5;
    const swayTime = Math.random() * 4 + 3;
    const delay = Math.random() * -20;

    dot.style.width = size + 'px';
    dot.style.height = size + 'px';
    dot.style.animationDuration = fallTime + 's, ' + swayTime + 's';
    dot.style.animationDelay = delay + 's, ' + delay + 's';
    dot.style.left = Math.random() * 100 + '%';
    dot.style.setProperty('--o', (Math.random() * 0.4 + 0.5).toFixed(2));

    container.appendChild(dot);
  }
})();

// ofc i had completely forgotten about this thing in the starting and i just had a random datestamp in my html omg 

(function showDateStamp() {
  var el = document.getElementById('dateStamp');
  if (!el) return;

  var now = new Date();

  var date = now.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).toLowerCase();

  var time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  }).toLowerCase();

  el.textContent = 'written on ' + date + ' at ' + time;
})();


//after stanning light mode for ages, now i HAVE to make a dark mode for mine

var themeBtn = document.getElementById('themeToggle');
var root = document.documentElement;

function showTheme(theme) {
  root.setAttribute('data-theme', theme);

  if (theme === 'dark') {
    themeBtn.textContent = '☀';
    themeBtn.setAttribute('aria-label', 'switch to light mode');
  } else {
    themeBtn.textContent = '☾';
    themeBtn.setAttribute('aria-label', 'switch to dark mode');
  }
}

// the theme will stay the same as what user decided even after reloadng

var currentTheme = root.getAttribute('data-theme');
showTheme(currentTheme);

themeBtn.addEventListener('click', function () {
  var theme = root.getAttribute('data-theme');

  if (theme === 'dark') {

    showTheme('light');
    localStorage.setItem('theme', 'light');
  } 
  
  else {
    showTheme('dark');
    localStorage.setItem('theme', 'dark');
  }
});