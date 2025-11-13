
// Mobile menu
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.style.display === 'block';
    menu.style.display = open ? 'none' : 'block';
    toggle.setAttribute('aria-expanded', String(!open));
  });
}

// Contact form fallback (mailto prefill)
function contactFallback(e) {
  const form = e.target;
  if (form.action.startsWith('mailto:')) {
    const params = new URLSearchParams();
    ['name','phone','city','service','details'].forEach(id => {
      const el = document.getElementById(id);
      if (el && el.value) params.append(id, el.value);
    });
    form.action = form.action + '&body=' + encodeURIComponent(params.toString());
  }
  return true;
}
