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

    const carousel = document.querySelector('.carousel')
    const arrowBts = document.querySelectorAll('.people-say__arrow')
    const firstCardWith = carousel.querySelector('.carousel__card').offsetWidth
    const carouselChildrens = [...carousel.children]


    let isDraging = false
    let startX = 0
    let startScrollLeft = 0

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWith)

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML('afterbegin', card.outerHTML)
    })
    carouselChildrens.slice(0, -cardPerView).forEach(card => {
        carousel.insertAdjacentHTML('beforeend', card.outerHTML)
    })

    arrowBts.forEach(btn => {
        btn.addEventListener('click', () => {
            carousel.scrollLeft += btn.id === 'left' ? -firstCardWith : firstCardWith
        })
    })

    const dragStart = (e) => {
        isDraging = true
        carousel.classList.add('dragging')
        startX = e.pageX
        startScrollLeft = carousel.scrollLeft
    }

    const dragging = (e) => {
        if (!isDraging) return
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
    }
    const dragStop = () => {
        isDraging = false
        carousel.classList.remove('dragging')
    }

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {

            carousel.classList.add('no-transition')
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth)
            carousel.classList.remove('no-transition')

        } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add('no-transition')
            carousel.scrollLeft = carousel.offsetWidth
            carousel.classList.remove('no-transition')
        }
    }

    carousel.addEventListener('mousedown', dragStart)
    carousel.addEventListener('mousemove', dragging)
    document.addEventListener('mouseup', dragStop)
    carousel.addEventListener('scroll', infiniteScroll)

})()