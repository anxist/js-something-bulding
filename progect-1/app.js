const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })

    // Добавляем поддержку свайпов для мобильных устройств
    slide.addEventListener('touchstart', handleTouchStart, false)
    slide.addEventListener('touchmove', handleTouchMove, false)
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

let x1 = null

function handleTouchStart(event) {
    const firstTouch = event.touches[0]
    x1 = firstTouch.clientX
}

function handleTouchMove(event) {
    if (!x1) {
        return false
    }

    let x2 = event.touches[0].clientX
    let xDiff = x2 - x1

    if (xDiff > 0) {
        // Свайп вправо
        moveSlide('prev')
    } else {
        // Свайп влево
        moveSlide('next')
    }

    x1 = null
}

function moveSlide(direction) {
    const activeSlide = document.querySelector('.slide.active')
    let newIndex = Array.from(slides).indexOf(activeSlide)

    if (direction === 'next') {
        newIndex = (newIndex + 1) % slides.length
    } else if (direction === 'prev') {
        newIndex = (newIndex - 1 + slides.length) % slides.length
    }

    clearActiveClasses()
    slides[newIndex].classList.add('active')
}