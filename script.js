document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-next]').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = btn.getAttribute('data-next');
      if (next) window.location.href = next;
    });
  });
});