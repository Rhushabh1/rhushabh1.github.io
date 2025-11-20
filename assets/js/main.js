// Main page interactions: smooth scroll, GSAP reveal, and theme toggle persistence
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Simple GSAP reveal animations (if gsap available)
  if (window.gsap) {
    gsap.utils.toArray('.card, .project, .profile-card, .subscribe-card').forEach((el, i) => {
      gsap.from(el, {y: 20, autoAlpha: 0, duration: 0.7, delay: i * 0.06, ease: 'power2.out', scrollTrigger: {
        trigger: el,
        start: 'top 85%'
      }});
    });
  }

  // Theme toggle logic
  const THEME_KEY = 'theme';
  const toggleBtn = document.getElementById('theme-toggle');
  const iconSun = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');

  function currentTheme() {
    try {
      return document.documentElement.getAttribute('data-theme') || localStorage.getItem(THEME_KEY) || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } catch (e) { return 'dark'; }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    const isDark = theme === 'dark';
    if (toggleBtn) toggleBtn.setAttribute('aria-pressed', (isDark).toString());
    if (iconSun && iconMoon) {
      iconSun.style.display = isDark ? 'none' : 'inline';
      iconMoon.style.display = isDark ? 'inline' : 'none';
    }
  }

  function toggleTheme() {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  // Initialize UI state for the toggle
  applyTheme(currentTheme());

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  }
});