(function () {
  const placeholder = document.getElementById('site-footer');
  if (!placeholder) return;

  const includeDonate = true;
  placeholder.innerHTML = `
<footer class="wrap foot">
  <span class="copyright">© 2026 Erwin Alegro. Made in the Philippines.</span>
  ${includeDonate ? `<span class="footer-donate"><span class="donate-label">Buy Me A Coffee:</span>
    <a class="donate-option paypal-link" href="https://www.paypal.com/donate/?business=ealegro%40gmail.com&amp;no_recurring=0&amp;item_name=Support%20Rosaryo&amp;currency_code=USD" target="_blank" rel="noopener noreferrer" aria-label="Donate with PayPal">PayPal</a>
    <button class="donate-option gcash-link" type="button" data-gcash-open aria-label="Donate with GCash">GCash</button>
  </span>` : ''}
  <nav class="footer-links" aria-label="Footer">
    <a href="/">Home</a>
    <a href="privacy.html">Privacy Policy</a>
    <a href="terms.html">Terms of Use</a>
    <a href="contact.html">Contact Us</a>
  </nav>
</footer>
<dialog id="gcash-dialog" class="gcash-dialog" aria-labelledby="gcash-title">
  <button class="gcash-close" type="button" data-gcash-close aria-label="Close GCash QR">×</button>
  <h2 id="gcash-title">Donate with GCash</h2>
  <div class="gcash-qr-wrap"><img src="assets/Gcash-ealegro.jfif" alt="GCash QR code for Erwin Alegro" loading="lazy" decoding="async"></div>
</dialog>`;
})();
