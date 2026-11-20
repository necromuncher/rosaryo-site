(function () {
  const dialog = document.getElementById('gcash-dialog');
  if (!dialog) return;

  document.querySelectorAll('[data-gcash-open]').forEach((button) => {
    button.addEventListener('click', () => {
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    });
  });

  const closeButton = document.querySelector('[data-gcash-close]');
  if (closeButton) closeButton.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
