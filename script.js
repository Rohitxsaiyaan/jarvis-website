// JARVIS website interactions. Release metadata is intentionally a placeholder until a real release is published.
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('updateStatus').textContent = 'NOT CONNECTED';

// Future integration point:
// 1. Fetch a public, versioned release manifest over HTTPS.
// 2. Validate the manifest and package hash/signature in the desktop updater.
// 3. Download and stage updates outside the running application directory.
// 4. Verify the package before replacing files; keep rollback data.
// Never execute code or install an update solely because a remote JSON field says to.
