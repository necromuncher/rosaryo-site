(function () {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('rosaryo-theme');
  const storedScale = Number(localStorage.getItem('rosaryo-font-scale'));

  if (storedTheme === 'light') root.dataset.theme = 'light';
  const scale = Number.isFinite(storedScale) && storedScale >= 90 && storedScale <= 130
    ? storedScale
    : 90;
  root.style.fontSize = `${scale}%`;

  const updateControls = () => {
    const fontMinus = document.getElementById('font-decrease');
    const fontPlus = document.getElementById('font-increase');
    const themeSwitch = document.getElementById('theme-switch');
    const current = parseInt(root.style.fontSize || '100', 10);
    if (fontMinus) fontMinus.disabled = current <= 90;
    if (fontPlus) fontPlus.disabled = current >= 130;
    if (themeSwitch) {
      const isLight = root.dataset.theme === 'light';
      themeSwitch.checked = isLight;
      themeSwitch.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    }
  };

  const showScaleTooltip = (button) => {
    const current = parseInt(root.style.fontSize || '100', 10);
    let tooltip = document.getElementById('font-scale-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('span');
      tooltip.id = 'font-scale-tooltip';
      tooltip.className = 'font-scale-tooltip';
      tooltip.setAttribute('role', 'tooltip');
      document.body.appendChild(tooltip);
    }
    tooltip.textContent = `${current}%`;
    const rect = button.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.bottom + 6}px`;
    tooltip.classList.add('visible');
  };

  const hideScaleTooltip = () => {
    document.getElementById('font-scale-tooltip')?.classList.remove('visible');
  };

  const updateHeaderState = () => {
    document.querySelectorAll('.bar').forEach((header) => {
      header.classList.toggle('scrolled', window.scrollY > 1);
    });
  };

  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('font-decrease')?.addEventListener('click', () => {
      const current = parseInt(root.style.fontSize || '100', 10);
      const next = Math.max(90, current - 10);
      root.style.fontSize = `${next}%`;
      localStorage.setItem('rosaryo-font-scale', String(next));
      updateControls();
      const button = document.getElementById('font-decrease');
      showScaleTooltip(button);
      setTimeout(hideScaleTooltip, 900);
    });

    document.getElementById('font-increase')?.addEventListener('click', () => {
      const current = parseInt(root.style.fontSize || '100', 10);
      const next = Math.min(130, current + 10);
      root.style.fontSize = `${next}%`;
      localStorage.setItem('rosaryo-font-scale', String(next));
      updateControls();
      const button = document.getElementById('font-increase');
      showScaleTooltip(button);
      setTimeout(hideScaleTooltip, 900);
    });

    document.getElementById('theme-switch')?.addEventListener('change', (event) => {
      if (event.target.checked) {
        root.dataset.theme = 'light';
        localStorage.setItem('rosaryo-theme', 'light');
      } else {
        delete root.dataset.theme;
        localStorage.removeItem('rosaryo-theme');
      }
      updateControls();
    });

    ['font-decrease', 'font-increase'].forEach((id) => {
      const button = document.getElementById(id);
      if (!button) return;
      button.addEventListener('mouseenter', () => showScaleTooltip(button));
      button.addEventListener('mouseleave', hideScaleTooltip);
      button.addEventListener('focus', () => showScaleTooltip(button));
      button.addEventListener('blur', hideScaleTooltip);
      button.addEventListener('pointerdown', () => showScaleTooltip(button));
      button.addEventListener('click', () => {
        requestAnimationFrame(() => showScaleTooltip(button));
        setTimeout(hideScaleTooltip, 900);
      });
    });

    updateControls();
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  });
})();
