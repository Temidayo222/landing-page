AOS.init();
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
let myBtn = document.getElementById('myBtn1');
let firstDiv = document.getElementById('first');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

navLink.forEach(n => n.addEventListener ('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}))


function remove() {
    firstDiv.parentElement.removeChild(firstDiv)
}

//$(window).scroll(function (e) {
  //  var scroll = $(window).scrollTop();
    //if (scroll >= 150) {
      //  $('.navbar').addClass('navbar-hide');
  //  } else {
    //    $('.navbar').removeClass('navbar-hide');
  //  }
//}) 

