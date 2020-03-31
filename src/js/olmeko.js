// true input

const input = document.querySelector("#search");
const inputAdaptive = document.querySelector("#search2");

input.addEventListener("keyup", () => {
  inputAdaptive.value = input.value;
});

inputAdaptive.addEventListener("keyup", () => {
  input.value = inputAdaptive.value;
});

// scrollTop

window.addEventListener('scroll', () => {
  let tp = document.querySelector('.bx-title')
  let navButtons = document.querySelectorAll('.modern-page-navigation a');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      tp.scrollIntoView({ block: "start", behavior: "smooth" })
    })
  })
})

// remove my styles

console.log('\n\n\n\n\n\nPress "Alt + F1" to remove my styles from this site\n\n\n\n\n\n');

window.addEventListener('keyup', e => {
  if (e.code == 'F1' && e.altKey == true) {
    let styles = document.querySelector('#eugevin');

    styles.remove();
  }
})

// header

const intM = document.querySelector('.bx-inc-orginfo .type > div:first-child');

intM.remove();

// remove jivoSite

window.addEventListener('scroll', () => {
  if (localStorage.getItem('eugevin') == 'true') {
    let jdiv = document.querySelector('jdiv');

    jdiv.remove();
  }
})

// card

let addBasket = document.querySelector('.link_add-basket b');

addBasket.innerText = 'В корзину';

/*

let removes = document.querySelectorAll('.remove');

removes.forEach(remove => {
  remove.click();
})

*/

var element = document.querySelector('.form-horizontal .form-group input');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

var mask = IMask(element, maskOptions);

// number delete

// let popop = document.querySelector('.bx-inc-orginfo .worktime');

// popop.remove();