// nice selector 2
document.addEventListener("DOMContentLoaded", function (e) {
  var els = document.querySelectorAll(".selectize");
  els.forEach(function (select) {
    NiceSelect.bind(select);
  });
});

// Hero selider section
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Hot Product carousel
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  navigation: {
    nextEl: "#button-next-relacionados",
    prevEl: "#button-prev-relacionados",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

//Featured Product
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: "#button-next-relacionados1",
    prevEl: "#button-prev-relacionados1",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

//Just for you
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  navigation: {
    nextEl: "#button-next-relacionados2",
    prevEl: "#button-prev-relacionados2",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

//Featured Shop
var swiper4 = new Swiper(".mySwiper4", {
  navigation: {
    nextEl: "#button-next-relacionados3",
    prevEl: "#button-prev-relacionados3",
  },
});

//Featured Garage
var swiper5 = new Swiper(".mySwiper5", {
  navigation: {
    nextEl: "#button-next-relacionados4",
    prevEl: "#button-prev-relacionados4",
  },
});
