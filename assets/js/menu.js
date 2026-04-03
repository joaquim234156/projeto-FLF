/* ══════════════════════════════════════════════════════
   MENU.JS — Controle do menu FAB flutuante (mobile)
   e da navbar desktop (sem hambúrguer).
══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  const fab     = document.querySelector('.fab-menu');
  const fabBtn  = document.querySelector('.fab-menu__btn');
  const overlay = document.querySelector('.fab-overlay');

  if (!fab || !fabBtn) return;

  function openFab() {
    fab.classList.add('is-open');
    overlay && overlay.classList.add('is-open');
    fabBtn.setAttribute('aria-expanded', 'true');
  }

  function closeFab() {
    fab.classList.remove('is-open');
    overlay && overlay.classList.remove('is-open');
    fabBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleFab() {
    fab.classList.contains('is-open') ? closeFab() : openFab();
  }

  fabBtn.addEventListener('click', toggleFab);

  // Fecha ao clicar no overlay
  overlay && overlay.addEventListener('click', closeFab);

  // Fecha ao clicar em qualquer link
  fab.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeFab);
  });

});
