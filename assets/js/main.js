// Main page interactions: smooth scroll, simple GSAP reveal
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
});