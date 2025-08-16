$(document).ready(function () {

    // Sticky navbar & scroll-up button
    $(window).scroll(function () {
        $('.navbar').toggleClass("sticky", this.scrollY > 20);
        $('.scroll-up-btn').toggleClass("show", this.scrollY > 500);
    });

    // Slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').removeClass("smooth-scroll");
    });

    // Smooth scroll on menu item click
    $('.navbar .menu li a').click(function () {
        $('html').addClass("smooth-scroll");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation script (merged for .typing & .typing-2)
    var typed = new Typed(".typing", {
    strings: ["Developer!", "Tester!", "Starter!"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
    });

    var typed = new Typed(".typing-2", {
    strings: ["Developer!   ", "Tester!", "Starter!"],
    typeSpeed: 300,
    backSpeed: 200,
    loop: true
    });

    // Owl Carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000, // fixed correct key name
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

  document.querySelectorAll(".skill-icon").forEach(icon => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("active");
    });
 });

   if (location.pathname.endsWith("main.html")) {
  // On refresh → go back to index.html
  window.addEventListener("load", () => {
    if (performance && performance.navigation && performance.navigation.type === 1) {
      location.replace("index.html");
    }
  });

  // Push state so back button triggers popstate
  history.pushState(null, null, location.href);

  // On back button → go to index.html
  window.addEventListener("popstate", () => {
    location.replace("index.html");
  });
}

});
