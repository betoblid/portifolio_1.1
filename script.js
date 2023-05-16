//consigurando os slides
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
//contador
let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}
//configurando os botoes
function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}
//configurando os botoes
function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}
//adicionando os evendos do botoes nas funcoes e um intervalo de 2s
setInterval(prevSlider, 6000)
btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

ScrollReveal().reveal('.punchline', { reset: true, interval: 16, delay: 300 });
ScrollReveal().reveal('.titulo', {delay: 500})
