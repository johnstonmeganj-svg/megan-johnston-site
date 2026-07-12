/*
  Google Analytics 4 loader for meganjjohnston.com
  ---------------------------------------------------
  This file is the ONLY place you need to edit to activate analytics.

  1. Create a free Google Analytics 4 property at https://analytics.google.com
  2. Copy your "Measurement ID" (looks like G-ABC1234XYZ)
  3. Paste it below in place of 'G-XXXXXXXXXX'
  4. Every page on the site already includes this file, so this one edit
     turns on tracking site-wide.
*/

(function () {
  var GA_MEASUREMENT_ID = 'G-E4NT5TV743';

  if (GA_MEASUREMENT_ID.indexOf('XXXX') !== -1) {
    // Not configured yet — skip loading so no errors show in the console.
    return;
  }

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
})();
