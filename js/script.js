const open = document.querySelector('.open_icon');
const close = document.querySelector('.close_icon');
const side = document.querySelector('.close');
open.addEventListener('click', function() {
  side.classList.add('open');
  side.classList.remove('close');

})
close.addEventListener('click', function() {
  side.classList.remove('open');
  side.classList.add('close');
})



(function () {
  const slides = document.querySelectorAll('.slider');
  const activeClass = "slider-active";
  let index = 0;
  setInterval(function () {
      slides[index].classList.remove(activeClass);
      index++;
      if (index + 1 > slides.length) {
          index = 0;
      }
      slides[index].classList.add(activeClass);
  }, 5000);
}())
