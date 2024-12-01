const carouselContent = document.querySelector('.carousel-content');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function slideCarousel() {
        currentIndex = (currentIndex + 1) % carouselItems.length; // Loop back to the first item
        const offset = -currentIndex * 100; // Calculate the offset
        carouselContent.style.transform = `translateX(${offset}%)`; // Move carousel
    }

    setInterval(slideCarousel, 4000); // 4 seconds