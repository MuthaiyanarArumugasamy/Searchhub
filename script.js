```javascript
/* ==========================
   SearchHub Script
========================== */

document.addEventListener("DOMContentLoaded", function () {

    // Current Year
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Scroll To Top Button
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }

        });

        topBtn.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // Fade-in animation
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    });

    cards.forEach(card => observer.observe(card));

});
```
