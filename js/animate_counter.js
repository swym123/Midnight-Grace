function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const duration = 2000;
    const increment = target / (duration / 20);
    let current = 0;
    function updateCounter() {
        current += increment;
        if (current < target) {
            counter.innerText = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target.toLocaleString() + "+"; // Add "+" at the end
        }
    }

    updateCounter();
}

const counters = document.querySelectorAll(".number");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));
