(function () {
  let accepted = false;
  try {
    accepted = localStorage.getItem('rosaryo-cookie-choice') === 'accepted';
  } catch (error) {
    accepted = false;
  }
  if (accepted) return;

  const banner = document.createElement('aside');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Cookie notice');
  banner.innerHTML = `
    <p>We use limited browser storage for theme and text preferences. <a href="privacy.html">Privacy Policy</a></p>
    <button type="button">Accept</button>
  `;
  document.body.appendChild(banner);

  banner.classList.add('visible');
  banner.querySelector('button').addEventListener('click', () => {
    try {
      localStorage.setItem('rosaryo-cookie-choice', 'accepted');
    } catch (error) {}
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 300);
  });
})();
