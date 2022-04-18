var options = {
   wrapAround: true,
  //  autoPlay: true,
   accessibility: true,
   prevNextButtons: true,
   pageDots: true,
   setGallerySize: false,
   arrowShape: {
     x0: 10,
     x1: 60,
     y1: 50,
     x2: 60,
     y2: 45,
     x3: 15
   }
 };
 
 var carousel = document.querySelector('[data-carousel]');
 var slides = document.getElementsByClassName('carousel-cell');
 var flkty = new Flickity(carousel, options);
 
 flkty.on('scroll', function () {
   flkty.slides.forEach(function (slide, i) {
     var image = slides[i];
     var x = (slide.target + flkty.x) * -1/3;
     image.style.backgroundPosition = x + 'px';
   });
 });

 const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


lightGallery(document.querySelector("#image-gallery"));


gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3
}
);

gsap.from('.animate-hero2', {
  scrollTrigger: '#box',
  duration: 0.3,
  opacity: 0,
  y: -100,
  stagger: 0.2
}
);

gsap.from('.animate-hero3', {
  scrollTrigger: '#serv-box',
  duration: 0.3,
  opacity: 0,
  y: -100,
  stagger: 0.2
}
);

gsap.from('.animate-hero4', {
  scrollTrigger: '#image-gallery',
  duration: 0.5,
  opacity: 0,
  x: -100,
  stagger: 0.2
}
);