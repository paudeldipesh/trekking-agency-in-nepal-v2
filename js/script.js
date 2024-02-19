document.getElementById("bar-icon").addEventListener("click", () => {
  document.getElementById("nav-items").classList.toggle("hidden");
});

document.querySelectorAll(".parent-element").forEach((element) => {
  element.addEventListener("click", (element) => {
    element.currentTarget.nextElementSibling.classList.toggle("hidden");
  });
});

// Activities Swiper
new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 5,
    },
  },
});

// Swiper for Testimonials
new Swiper(".swiper-testimonials", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 80,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    900: {
      slidesPerView: 2,
      spaceBetween: 75,
    },
  },
});
