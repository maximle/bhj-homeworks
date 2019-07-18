let sliderItem = document.querySelectorAll('div.slider__item');
console.log(sliderItem);
let arrPrev = document.querySelector('div.slider__arrow_prev');
let arrNext = document.querySelector('div.slider__arrow_next');
let activeDots = document.querySelectorAll('div.slider__dot');
let currentSlide = 0;

activeDots[currentSlide].className += ' slider__dot_active';

arrPrev.onclick = function() {
    sliderItem[currentSlide].className = sliderItem[currentSlide].className.replace(' slider__item_active', '');
    activeDots[currentSlide].className = activeDots[currentSlide].className.replace(' slider__dot_active', '');
    currentSlide -= 1;
    if (currentSlide === -1) {
        currentSlide = 4;
    };
    sliderItem[currentSlide].className += ' slider__item_active';
    activeDots[currentSlide].className += ' slider__dot_active';
};

arrNext.onclick = function() {
    sliderItem[currentSlide].className = sliderItem[currentSlide].className.replace(' slider__item_active', '');
    activeDots[currentSlide].className = activeDots[currentSlide].className.replace(' slider__dot_active', '');

    currentSlide += 1;
    if (currentSlide === 5) {
        currentSlide = 0;
    };
    sliderItem[currentSlide].className += ' slider__item_active';
    activeDots[currentSlide].className += ' slider__dot_active';
};

for (let i = 0; i < activeDots.length; i++) {
    activeDots[i].onclick = function() {
        sliderItem[currentSlide].className = sliderItem[currentSlide].className.replace(' slider__item_active', '');
        activeDots[currentSlide].className = activeDots[currentSlide].className.replace(' slider__dot_active', '');
        sliderItem[i].className += ' slider__item_active';
        activeDots[i].className += ' slider__dot_active';
        currentSlide = i;

    }
}