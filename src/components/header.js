export function loadHeader() {
  const headerHTML = `
    <nav class="navbar">
      <div class="container nav-container">
        <a href="/" class="logo-link">
          <img src="public/images/logo.png" alt="Arasi Nursery And Primary School Logo" class="nav-logo" onerror="this.src='https://placehold.co/150x50/FFB6C1/white?text=Arasi+School'">
          <span class="school-name">Arasi Nursery <br> & Primary School</span>
        </a>
        
        <button class="mobile-menu-btn" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-links">
          <li><a href="/" class="nav-link">Home</a></li>
          <li><a href="/about.html" class="nav-link">About Us</a></li>
          <li><a href="/programs.html" class="nav-link">Programs</a></li>
          <li><a href="/facilities.html" class="nav-link">Facilities</a></li>
          <li><a href="/admissions.html" class="nav-link">Admissions</a></li>
          <li><a href="/gallery.html" class="nav-link">Gallery</a></li>
          <li><a href="/events.html" class="nav-link">Events</a></li>
          <li><a href="/contact.html" class="nav-link btn btn-primary">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // Active State
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  // Mobile Menu
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navList = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
    menuBtn.classList.toggle("open");
  });
}
