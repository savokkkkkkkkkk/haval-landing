document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    const swiperContainer = card.querySelector('.swiper');
    const colorButtons = card.querySelectorAll('.colors div');
    const slidesCount = swiperContainer?.querySelectorAll('.swiper-slide').length || 0;

    if (!swiperContainer || slidesCount === 0) return;

    const swiper = new Swiper(swiperContainer, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      allowTouchMove: true,
    });


    function updateActiveColor() {
      const realIndex = swiper.realIndex;
      colorButtons.forEach((btn, i) => {
        if (i === realIndex) {
          btn.classList.add('clicked');
        } else {
          btn.classList.remove('clicked');
        }
      });
    }

    colorButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        swiper.slideToLoop(index);
        updateActiveColor();
      });
    });

    swiper.on('slideChange', () => {
      updateActiveColor();
    });

    if (colorButtons.length > 0) {
      updateActiveColor();
    }
  });
});
