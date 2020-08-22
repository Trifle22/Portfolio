new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'project-bullet-active',
    clickable: true,
  },
  loop: true,
});

function scrollToContactMe() {
  document.querySelector('.footer').scrollIntoView();
}
