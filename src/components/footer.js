export function loadFooter() {
  const year = new Date().getFullYear();
  const footerHTML = `
    <footer class="footer section fade-up">
      <div class="container grid grid-4">
        <div class="footer-col">
          <div class="footer-logo">
            <img src="public/images/logo.png" alt="Arasi Nursery And Primary School" onerror="this.style.display='none'">
            <h3>Arasi Nursery <br> & Primary School</h3>
          </div>
          <p class="mt-sm">Growing Bright Minds, One Day at a Time. A safe and caring environment for your child.</p>
        </div>

        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="/about.html">About Us</a></li>
            <li><a href="/programs.html">Programs</a></li>
            <li><a href="/admissions.html">Admissions</a></li>
            <li><a href="/contact.html">Contact Us</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="footer-contact">
            <li>Mana Madurai Main Road,<br>Sirugudalpatti 630212</li>
            <li><a href="mailto:sriramoffice03@gmail.com">sriramoffice03@gmail.com</a></li>
            <li><a href="tel:+916379037275">+91 63790 37275</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Follow Us</h4>
          <div class="social-icons">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom text-center">
        <p>&copy; ${year} Arasi Nursery And Primary School. All rights reserved.</p>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
}
