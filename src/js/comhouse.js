window.onload = function () {
  // const preloader = document.querySelector('.preloader');
  // preloader.style.opacity = '0';

  // setTimeout(() => {
  //   preloader.remove();
  // }, 1000);

  const PDF = document.querySelectorAll('.link-pdf');

  for (let i = 0; i < PDF.length; i++) {
    const SPAN = PDF[i].querySelector('span').innerText;
    let k = 1 + i;
    PDF[i].innerHTML = `Инструкция по сборке №${k} <span>${SPAN}</span>`;
  }

  window.addEventListener("scroll", () => {
    const eugevinArrow = document.querySelector(".btn-gotop");
    if (pageYOffset > 300) {
      eugevinArrow.style.opacity = "1";
      eugevinArrow.style.marginBottom = "0";
    } else {
      eugevinArrow.style.opacity = "0";
      eugevinArrow.style.marginBottom = "-20px";
    }
  });  
}