(function () {
  if (localStorage.getItem('rosaryo-cookie-choice') === 'accepted') return;

  const banner = document.createElement('aside');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Cookie notice');
  banner.innerHTML = `
    <p>We use limited browser storage for theme and text preferences. <a href="privacy.html">Privacy Policy</a></p>
    <button type="button">Accept</button>
  `;
  document.body.appendChild(banner);

  requestAnimationFrame(() => banner.classList.add('visible'));
  banner.querySelector('button').addEventListener('click', () => {
    localStorage.setItem('rosaryo-cookie-choice', 'accepted');
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 300);
  });
})();
