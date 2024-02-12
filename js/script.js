document.getElementById("bar-icon").addEventListener("click", () => {
  document.getElementById("nav-items").classList.toggle("hidden");
});

document.querySelectorAll(".parent-element").forEach((element) => {
  element.addEventListener("click", (element) => {
    element.currentTarget.nextElementSibling.classList.toggle("hidden");
  });
});

// Activities Swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
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
    }
  }
  
});

// Swiper for Testimonials
const swiperTestimonail = new Swiper('.swiper-testimonial', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-testimonial-pagination',
    clickable: true,
    
  },

  autoplay: {
    delay: 4000,
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
    }, 
    767: {
      slidesPerView: 2,
    },
    1145: {
      slidesPerView: 3,

    }
  }
  
});