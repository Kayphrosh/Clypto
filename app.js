const topBar = document.querySelector('.top-bar');

window.addEventListener('scroll', fixBar);

function fixBar() {
  if (window.scrollY > topBar.offsetHeight + 50) {
    topBar.style.position = 'fixed';
    topBar.style.top = '0px';
    topBar.style.left = '0px';
    topBar.style.right = '0px';
    topBar.style.background = '#000';
    topBar.style.borderBottom = '1px solid #f2f2f250';
  } else {
    topBar.style.position = 'relative';
    topBar.style.backdropFilter = 'blur(0px)';
    topBar.style.background = 'none';
    topBar.style.borderBottom = 'none';
  }
}

// let toggleFaqstatus = false;
// const faqActive = document.querySelector('.faq-answer');
// const openFaq = document.querySelector('.faq-toggle .faq-open');
// const closeFaq = document.querySelector('.faq-toggle .faq-close');
// let toggleFaq = function () {
//   if (toggleFaqstatus === false) {
//     faqActive.style.display = 'flex';
//     openFaq.style.display = 'none';
//     closeFaq.style.display = 'flex';
//     toggleFaqstatus = true;
//   } else if (toggleNavstatus === true) {
//     closeFaq.style.display = 'none';
//     openFaq.style.display = 'flex';
//     toggleFaqstatus = false;
//   }
// };

const faqToggle = document.querySelectorAll('.faq')

faqToggle.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("faq-active")
  })
})

let toggleNavstatus = false;
const navbar = document.querySelector('.nav-links');
// const topbar = document.querySelector('.top-bar');
const opennav = document.querySelector('.hamburger #open');
const closeNav = document.querySelector('.hamburger #close');
let toggleNav = function () {
  if (toggleNavstatus === false) {
    navbar.style.display = 'flex';
    navbar.style.transform = 'translate(0%)';
    opennav.style.display = 'none';
    closeNav.style.display = 'flex';
    topBar.style.background = '#000';
    navbar.style.animation = 'animateNav 0.8s ease forwards 1';
    navbar.style.animationDelay = '0.1s';
    toggleNavstatus = true;
  } else if (toggleNavstatus === true) {
    navbar.style.display = 'none';
    topBar.style.background = 'none';
    navbar.style.transform = 'translate(100%)';
    closeNav.style.display = 'none';
    opennav.style.display = 'flex';
    toggleNavstatus = false;
  }
};
