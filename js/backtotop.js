const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

function scrollToTop() {
    backToTopBtn.classList.add("addt");
   

    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        backToTopBtn.classList.remove("addt");


    }, 600);
}

