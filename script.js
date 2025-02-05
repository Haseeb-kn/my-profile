document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const backToTopBtn = document.getElementById("backToTop");

    // Function to handle section fade-in
    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show"); // Add 'show' class to trigger fade-in
            }
        });
    }

    // Function to handle the Back to Top button
    function toggleBackToTopButton() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block"; // Show button after scrolling 300px
        } else {
            backToTopBtn.style.display = "none"; // Hide the button when less than 300px
        }
    }

    // Smooth scroll to top
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // Check for fade-in and button visibility on scroll
    window.addEventListener("scroll", function () {
        revealSections();
        toggleBackToTopButton();
    });

    // Run once on page load for initial section visibility
    revealSections();
});
window.addEventListener("scroll", function () {
    const scrollProgress = document.getElementById("scroll-progress");
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = document.documentElement.scrollTop;

    const scrollPercentage = (scrollPosition / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercentage + "%";
});
