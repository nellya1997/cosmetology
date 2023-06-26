// Виды услуг
const button = document.querySelector('#button');
const content = document.querySelector('#content');

button.addEventListener('click', function () {
  content.classList.toggle('none');
});

// faq открыть закрыть
const faqButton = document.querySelector('#faq-button');
const faqContent = document.querySelector('#faq-content');

faqButton.addEventListener('click', function () {
  faqContent.classList.toggle('none');
});

// faq аккордеон
const faqQuestion = document.querySelectorAll('[data-name="faq-question"]');

faqQuestion.forEach(function (item) {
  item.addEventListener('click', showAnswer);
});
function showAnswer(item) {
  this.nextElementSibling.classList.toggle('none');
}

//  swipers
/*
const exampleSwiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
*/
