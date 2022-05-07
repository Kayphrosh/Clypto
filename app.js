const topBar = document.querySelector('.top-bar')

window.addEventListener('scroll', fixBar) 

function fixBar() {
    if(window.scrollY > topBar.offsetHeight + 50) {
        topBar.style.position = 'fixed'
        topBar.style.top = '0px'
        topBar.style.left = '0px'
        topBar.style.right = '0px'
        topBar.style.backdropFilter = 'blur(20px)';
        topBar.style.background = 'rgba(0, 0, 0, 0.8)'

    } else {
        topBar.style.position = 'relative'
        topBar.style.backdropFilter = 'blur(0px)';
        topBar.style.background = 'none'
    }
}