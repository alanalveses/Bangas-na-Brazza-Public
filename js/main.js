//Nav Active
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        console.log("Link clicado");
        navLinks.forEach(function(navLink) {
          navLink.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
  });

  
//Drop Login 
let loginBtn = document.querySelector('.login-btn')
let dropLogin = document.querySelector('.drop-login')

loginBtn.onclick = () => {
    dropLogin.classList.toggle('drop-login-open')
}

//Menu Open Close
let menu = document.querySelector('.menu-icon')
//let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('move');
}

//Header Background Change
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

//Home Swipper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 25000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

  //Accordion

  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion-header');

    accordionHeader.addEventListener('click', () => {
        const openItem =document.querySelector('.accordion-open');

        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    })
  })

  const toggleItem = (item) => {
    const accordionContent = item.querySelector(".accordion-content");

    if (item.classList.contains ("accordion-open")) {
        accordionContent.removeAttribute("style");
        item.classList.remove("accordion-open");
    } else{
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        item.classList.add("accordion-open");
    }
  };

//Control Swiper

var swiper = new Swiper(".control-images", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


//Botão para ir ao topo 

window.addEventListener("scroll", function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
