const topBar = document.querySelector('.top-bar')

window.addEventListener('scroll', fixBar) 

function fixBar() {
    if(window.scrollY > topBar.offsetHeight + 50) {
        topBar.style.position = 'fixed'
        topBar.style.top = '0px'
        topBar.style.left = '0px'
        topBar.style.right = '0px'
        topBar.style.background = '#000'
        topBar.style.borderBottom = '1px solid #f2f2f250'

    } else {
        topBar.style.position = 'relative'
        topBar.style.backdropFilter = 'blur(0px)';
        topBar.style.background = 'none'
        topBar.style.borderBottom = 'none'
    }
}

const faqToggle = document.querySelectorAll('.faq-toggle')

faqToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle ('faq-active')
  })
})
const readmoreToggle = document.querySelectorAll('.read-more-btn')

readmoreToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle ('read-active')
  })
})