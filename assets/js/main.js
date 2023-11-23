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
    const navButtons = document.querySelectorAll('.nav__link')
    const activePage = window.location.pathname

    console.log(activePage)
    navButtons.forEach((button) => {

        if (button.href.includes(`${activePage}`)) {
            button.classList.add('active')
        }

    })

})()