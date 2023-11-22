
//menu
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }

    closeMenu() {
      const closeMenu = document.querySelector('.mobileMenu.active')
      closeMenu.addEventListener
    }
    init() {
      if (this.mobileMenu === '.mobileMenu.active') {
        this.closeMenu()
      } else {
        this.addClickEvent();
      }
      return this;
    }
  }

  const mobileNavbar = new MobileNavbar(
    ".mobileMenu", //ícone de menu
    ".navList", // o ul com todos os li da lista
    ".navList li", // os li da lista
  );
  mobileNavbar.init();



  


  //tela de carregamento
  const preloader = document.querySelector(".preload");
  window.addEventListener("load", ()=> {
    preloader.classList.add("loaded");
  });


//animação da timeline

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
  console.log(entry);
  if(entry.isIntersecting){
    entry.target.classList.add('show');
  }
})
});


  const hiddenElements = document.querySelectorAll('.hiddenLeft, .hiddenRight');
  console.log(hiddenElements);
  hiddenElements.forEach((el) => observer.observe(el));

  const heroSlider = document.querySelector('[data-hero-slider]');
  const heroSliderItems = document.querySelectorAll('[data-hero-sliderItem]');

  let currentSlidePos = 0;
  let lastActiveSliderItem = heroSliderItems[0]

  const updateSliderpos = () => {
    lastActiveSliderItem.classList.remove('active');
    console.log("herosliderItems", heroSliderItems)
    heroSliderItems[currentSlidePos].classList.add('active');
    console.log("testando", heroSliderItems[currentSlidePos])
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
  }


  const slideNext = () => {
    if(currentSlidePos >= heroSliderItems.length - 1){
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }
    updateSliderpos();
  }

  let autoSlideInterval;
  
  const autoSlide = () => {
    autoSlideInterval = setInterval ( () => {
      slideNext();
    }, 7000)

  }
  
  window.addEventListener('load', autoSlide)