(function () {
  const placeholder = document.getElementById('site-header');
  if (!placeholder) return;

  placeholder.innerHTML = `
<div class="accessibility-toolbar" aria-label="Display settings">
  <span class="toolbar-label">Text</span>
  <button id="font-decrease" type="button" aria-label="Decrease text size">A−</button>
  <button id="font-increase" type="button" aria-label="Increase text size">A+</button>
  <span class="theme-label">Theme</span>
  <label class="theme-toggle" aria-label="Toggle light theme">
    <input id="theme-switch" type="checkbox">
    <span aria-hidden="true"></span>
  </label>
</div>
<a class="skip" href="#main">Skip to content</a>
<header class="wrap bar">
  <a class="mark" href="/">Rosaryo</a>
  <nav class="nav-links" aria-label="Site">
    <a href="/">Home</a>
    <a href="privacy.html">Privacy Policy</a>
    <a href="contact.html">Contact Us</a>
    <span class="donate-links"><span class="donate-label">Buy Me A Coffee:</span>
      <a class="donate-option paypal-link" href="https://www.paypal.com/donate/?business=ealegro%40gmail.com&amp;no_recurring=0&amp;item_name=Support%20Rosaryo&amp;currency_code=USD" target="_blank" rel="noopener noreferrer" aria-label="Donate with PayPal">PayPal</a>
      <button class="donate-option gcash-link" type="button" data-gcash-open aria-label="Donate with GCash">GCash</button>
    </span>
  </nav>
  <details class="mobile-menu">
    <summary aria-label="Open navigation menu"><span></span><span></span><span></span></summary>
    <nav aria-label="Mobile site">
      <a href="/">Home</a>
      <a href="privacy.html">Privacy Policy</a>
      <a href="contact.html">Contact Us</a>
    </nav>
  </details>
  <span class="mobile-donate">
    <span class="donate-label">Buy Me A Coffee:</span>
    <a class="donate-option paypal-link" href="https://www.paypal.com/donate/?business=ealegro%40gmail.com&amp;no_recurring=0&amp;item_name=Support%20Rosaryo&amp;currency_code=USD" target="_blank" rel="noopener noreferrer" aria-label="Donate with PayPal">PayPal</a>
    <button class="donate-option gcash-link" type="button" data-gcash-open aria-label="Donate with GCash">GCash</button>
  </span>
</header>`;
})();
