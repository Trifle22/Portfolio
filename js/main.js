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

maskPhone('#tel')

const formButton = document.querySelector('.form-button');
const contactsForm = document.querySelector('.contacts-form');
const inputName = document.querySelector('.input-name');
const inputPhone  = document.querySelector('.input-phone');

formButton.disabled = true;


const formValidation = () => {

  const formElements = [...contactsForm.elements].filter(item => item.tagName.toUpperCase() === 'INPUT');
  console.log(formElements);
  contactsForm.addEventListener('change', event => {
    const target = event.target;
    if (target.matches('.input-name') && target.value.trim() == '') {
      alert('Введите корректные данные')
    } else if (target.matches('.input-phone') && target.value.length !== 18) {
      alert('Введите корректный номер телефона')
    }
    else if (formElements[0].value.trim() !== '' && formElements[1].value.length === 18) {
      formButton.disabled = false;
    }
  })

}

formValidation();


