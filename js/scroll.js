const scrollContents = document.querySelectorAll('.scroll');

function checkScroll() {
    scrollContents.forEach((content) => {
        const position = content.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (position < viewportHeight - 100) {
            content.classList.add('visible');
        } else if(position > viewportHeight + 100){ 
            content.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);