/*=============== SHOW MENU ===============*/
document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

  /* Menu show */
  if(navToggle){
      navToggle.addEventListener('click', () =>{
          navMenu.classList.toggle('show-menu');
      });
  }

  /* Menu hidden */
  if(navClose){
      navClose.addEventListener('click', () =>{
          navMenu.classList.remove('show-menu');
      });
  }

  /*=============== REMOVE MENU MOBILE ===============*/
  const navLink = document.querySelectorAll('.nav__link');

  const linkAction = () =>{
      navMenu.classList.remove('show-menu');
  }
  navLink.forEach(n => n.addEventListener('click', linkAction));
});

/*=============== SWIPER PROJECTS ===============*/
document.addEventListener('DOMContentLoaded', () => {
  let swiperProjects = new Swiper(".projects__container", {
      loop: true,
      spaceBetween: 24,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      breakpoints: {
          1200: {
              slidesPerView: 2,
              spaceBetween: -56,
          },
      }
  });
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
  e.preventDefault()

  // Check if the field has a value
};

contactForm.addEventListener('submit', sendEmail)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
