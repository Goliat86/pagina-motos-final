document.addEventListener("DOMContentLoaded", () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
      duration: 600,
      dist: -100,
      
      shift: 5,
      padding: 5,
      numvisible: 5,
      indicators: true,
      nowrap: false,



    });
});