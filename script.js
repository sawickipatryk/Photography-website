const app = (function () {

    const navLinks = document.querySelector('.nav__links')
    const menuButton = document.querySelector('.toggle__menu')

    menuButton.addEventListener('click', () => {

        if (!navLinks.classList.contains('active')) {
            navLinks.classList.add('active')
            return
        }

        navLinks.classList.remove('active')
    })

})()