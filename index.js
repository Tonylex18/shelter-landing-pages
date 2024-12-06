document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const closeBtn = document.getElementById("closeBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    // Open mobile menu
    hamburgerBtn.addEventListener("click", function () {
      mobileMenu.classList.add("open");
      // Prevent body scrolling when menu is open
      document.body.style.overflow = 'hidden';
    });

    // Close mobile menu
    closeBtn.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      // Restore body scrolling
      document.body.style.overflow = '';
    });

    // Close menu if clicking outside of it (on overlay)
    mobileMenu.addEventListener("click", function (event) {
      if (event.target === mobileMenu) {
        mobileMenu.classList.remove("open");
        document.body.style.overflow = '';
      }
    });
  });