// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Typing effect in Hero Code block
const codeElement = document.querySelector('.hero code');
if (codeElement) {
    const originalText = codeElement.textContent;
    codeElement.textContent = '';
    let i = 0;
    const speed = 80;

    function typeWriter() {
        if (i < originalText.length) {
            codeElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    // Delay before typing starts
    setTimeout(typeWriter, 1000);
}

// Show scrollbar only while the user is actively scrolling
let isScrolling;
document.addEventListener("scroll", () => {
    document.body.classList.add("show-scroll");
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        document.body.classList.remove("show-scroll");
    }, 2000); // hide after 2s of no scroll
});
