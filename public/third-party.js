// Central template for all external and third-party scripts.
(function () {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;
  gtag('js', new Date());

  const gtmId = 'GTM-P5KGGTKR';

  const existing = document.querySelector('script[data-third-party="google-tag-manager"]');
  if (existing) return;

  const script = document.createElement('script');
  script.async = true;
  script.dataset.thirdParty = 'google-tag-manager';
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
  document.head.appendChild(script);
})();
