window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(s => {
        const top = s.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            s.style.opacity = "1";
            s.style.transform = "translateY(0)";
        }
    });
});
