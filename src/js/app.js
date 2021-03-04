//= include 'zenscroll.js'

window.addEventListener('DOMContentLoaded', initPostJs);

function initPostJs() {
  let buttonAddInfo = Array.from(document.querySelectorAll('.content__section .buttons__item'));


  buttonAddInfo.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('clicked');
    });
  });



  let parallaxItems = document.querySelectorAll('.parallaxItem');

  parallaxItems.forEach((scene) => {
    var parallaxInstance = new Parallax(scene);
  });

  window.addEventListener('load', () => {
    AOS.init();
  });


  let itemTo = document.querySelectorAll("[data-to]");

  itemTo.forEach((item) => {
    item.addEventListener("click",() => {
      let elemInto = document.querySelector("." + item.dataset.to);

      zenscroll.to(elemInto);
    })
  });
}

window.addEventListener('beforeunload', (event) => {
  // // Отмените событие, как указано в стандарте.
  // event.preventDefault();
  // window.location.hash = '';
  // // Хром требует установки возвратного значения.
  // event.returnValue = '';
});
