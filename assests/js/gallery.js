function prevSlide(indicator) {
    let gallery = document.querySelector(indicator);
    let elementsOfGallery = gallery.childNodes;
    let currentSlide = parseInt(gallery.dataset.currentslide);
    let totalSlides = parseInt(gallery.dataset.totalslides);
    console.log(totalSlides);
    let carouselInner = undefined;
    for (let c of elementsOfGallery) {
        if (c.classList && c.classList.contains('carousel-inner')) {
            carouselInner = c;
        }
    }


    let prevSlide = ((currentSlide - 1) % totalSlides + totalSlides) % totalSlides;
    let slides = carouselInner.childNodes;
    let counter = 0;
    for (let slide of slides) {
        if (slide.classList && slide.classList.contains('carousel-item')) {
            if (counter == prevSlide) {
                slide.classList.add('active');
            } else if (slide.classList.contains('active')) {
                slide.classList.remove('active');
            }
            counter++;
        }
    }

    gallery.dataset.currentslide = prevSlide;
}


function nextSlide(indicator) {
    let gallery = document.querySelector(indicator);
    let elementsOfGallery = gallery.childNodes;
    let currentSlide = parseInt(gallery.dataset.currentslide);
    let totalSlides = parseInt(gallery.dataset.totalslides);
    console.log(totalSlides);
    let carouselInner = undefined;
    for (let c of elementsOfGallery) {
        if (c.classList && c.classList.contains('carousel-inner')) {
            carouselInner = c;
        }
    }


    let nextSlide = ((currentSlide + 1) % totalSlides + totalSlides) % totalSlides;
    let slides = carouselInner.childNodes;
    let counter = 0;
    for (let slide of slides) {
        if (slide.classList && slide.classList.contains('carousel-item')) {
            if (counter == nextSlide) {
                slide.classList.add('active');
            } else if (slide.classList.contains('active')) {
                slide.classList.remove('active');
            }
            counter++;
        }
    }

    gallery.dataset.currentslide = nextSlide;
}