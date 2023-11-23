
//menu
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
      this.disableClass = "disabled";
      this.handleClick = this.handleClick.bind(this);
    }
   
    closeMenu(){
      this.navList.classList.remove(this.activeClass);
      this.navList.classList.toggle(this.disableClass);
      this.mobileMenu.classList.remove(this.activeClass);
      
    }

    handleClick() {
      this.mobileMenu.classList.toggle(this.activeClass);
    
      
      if(this.mobileMenu.classList.contains(this.activeClass)) {
        const menuLinks = document.querySelectorAll(".menuItem");
        menuLinks.forEach(link => link.addEventListener("click", this.closeMenu.bind(this)));
        this.navList.classList.remove(this.disableClass);
        this.navList.classList.toggle(this.activeClass);
      } else {
        this.navList.classList.remove(this.activeClass)
        this.navList.classList.toggle(this.disableClass);
      }
    }


    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
      if (this.mobileMenu) {
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
  if(entry.isIntersecting){
    entry.target.classList.add("show");
  }
})
});


  const hiddenElements = document.querySelectorAll(".hiddenLeft, .hiddenRight");
  hiddenElements.forEach((el) => observer.observe(el));

  const heroSlider = document.querySelector("[data-hero-slider]");
  const heroSliderItems = document.querySelectorAll("[data-hero-sliderItem]");

  let currentSlidePos = 0;
  let lastActiveSliderItem = heroSliderItems[0];

  const updateSliderpos = () => {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
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
  
  window.addEventListener("load", autoSlide);

  // header e voltar ao topo
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  let lastScrollPos = 0;

  const hideHeader = () => {
    const isScrollBottom = lastScrollPos < window.scrollY

    if(isScrollBottom) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    lastScrollPos = window.scrollY;
  }

  window.addEventListener("scroll", () => {
    if(window.scrollY >= 50){
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");

    }
  })