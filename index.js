const button = document.querySelector('#button');
const content = document.querySelector('#content');

button.addEventListener('click', function () {
   content.classList.toggle('none')
});


//  swipers

const swiper1 = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


