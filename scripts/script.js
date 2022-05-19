// Header

let doc = document.documentElement
let header = document.querySelector('#header')

let currentScroll = previousScroll = window.scrollY || doc.scrollTop
let currentDirection = previousDirection = 0 

const checkScroll = () => {
    currentScroll = window.scrollY || doc.scrollTop

    if (currentScroll > previousScroll) {
        currentDirection = 2
    } else {
        currentDirection = 1
    }

    if (currentDirection !== previousDirection) {
        showHeader()
    }

    previousDirection = currentDirection
    previousScroll = currentScroll
}

const showHeader = () => {
    if(currentDirection === 2) {
        header.classList.add('hide')
    } else  if (currentDirection === 1) {
        header.classList.remove('hide')
    }
}

window.addEventListener('scroll', checkScroll)




// Animations 

gsap.registerPlugin(ScrollTrigger)


// Intro
gsap.from('.intro-content', {
    y: -30,
    ease: 'linear',
    duration: 0.6,
    scrollTrigger: '.intro-content'
})

gsap.from('.summary_box', {
    opacity: 0,
    x: -60,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.2,
    scrollTrigger: '.intro-content'
})


// Advertising

gsap.from('.advertising-img', {
    x: -160,
    ease: 'ease-in',
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
        trigger: '.advertising-img',
        start: 'top center'
    }
})

gsap.from('.advertising-paragraphs', {
    opacity:0,
    duration: 1,
    scaleY: 0.5, scaleX: 0.5,
    scrollTrigger: '#paid_advertising'
})


// Expert Content

gsap.from('.expert-content-subtitle', {
    opacity: 0.5,
    y: -40,
    duration: 1,
    scrollTrigger: '.expert-content-subtitle'
})

gsap.from('.expert-content-image', {
    opacity: 0,
    y: -20,
    duration: 1.2,
    scrollTrigger: '.expert-content-image'
})


// SEO Optimization

gsap.from('.seo-optimization-img', {
    x: -60,
    ease: 'ease-in',
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    scrollTrigger: '.seo-optimization-title'
})


// Social Media Marketing

gsap.from('.social-media-text', {
    y: -30,
    ease: 'ease-in',
    opacity: 0,
    duration: 1,
    scrollTrigger: '.social-media-text'
})



// Contact

gsap.from('.contact-container', {
    y: -30,
    ease: 'linear',
    opacity: 0,
    duration: 0.6,
    scrollTrigger: '#contact'
})