// ═══════════════════════════════════════
//  DACRES & DUNBAR — Shared Components
// ═══════════════════════════════════════

function getHeader(activePage) {
  return `
  <header>
    <div class="header-inner">
      <a href="index.html" class="logo">
        <span class="logo-name">Dacres &amp; Dunbar Tax Service</span>
        <span class="logo-tagline">Professional Tax Preparation</span>
      </a>
      <button class="hamburger" id="menuToggle" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
      <nav id="mainNav">
        <a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a>
        <a href="services.html" ${activePage==='services'?'class="active"':''}>Services</a>
        <a href="about.html" ${activePage==='about'?'class="active"':''}>About</a>
        <a href="testimonials.html" ${activePage==='testimonials'?'class="active"':''}>Testimonials</a>
        <a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a>
        <a href="https://calendly.com/ddbacctgtax/30min" target="_blank" class="btn-book-header">Book Appointment</a>
      </nav>
    </div>
  </header>`;
}

function getFooter() {
  return `
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <div class="footer-brand-name">Dacres &amp; Dunbar Tax Service</div>
          <div class="footer-brand-tag">Reliable. Accurate. Trusted.</div>
          <a href="tel:9548952868" class="footer-contact-item">📞 (954) 895-2868</a>
          <a href="mailto:alicia.dunbar@hotmail.com" class="footer-contact-item">✉️ alicia.dunbar@hotmail.com</a>
          <a href="https://calendly.com/ddbacctgtax/30min" target="_blank" class="footer-book-btn">📅 Book an Appointment</a>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="testimonials.html">Testimonials</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="services.html">Individual Tax Prep</a></li>
            <li><a href="services.html">Business Tax Prep</a></li>
            <li><a href="services.html">Tax Planning</a></li>
            <li><a href="services.html">W-2 &amp; 1099 Filings</a></li>
            <li><a href="services.html">Filing Extensions</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="terms.html">Terms of Service</a></li>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="sms-policy.html">SMS Messaging Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span id="footer-year">2025</span> Dacres &amp; Dunbar Tax Service. All rights reserved.</span>
        <span>
          <a href="terms.html">Terms</a> &nbsp;·&nbsp;
          <a href="privacy.html">Privacy</a> &nbsp;·&nbsp;
          <a href="sms-policy.html">SMS Policy</a>
        </span>
      </div>
    </div>
  </footer>`;
}

function initShared() {
  // Inject header & footer immediately
  const headerSlot = document.getElementById('header-slot');
  const footerSlot = document.getElementById('footer-slot');
  if (headerSlot) headerSlot.innerHTML = getHeader(document.body.dataset.page);
  if (footerSlot) footerSlot.innerHTML = getFooter();

  // Dynamic year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Hamburger menu
  document.addEventListener('click', function(e) {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    if (!nav || !toggle) return;
    if (toggle.contains(e.target)) {
      nav.classList.toggle('open');
    } else if (!nav.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
}
