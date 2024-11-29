document.addEventListener("DOMContentLoaded", () => {
    const sliderContainers = document.querySelectorAll(".slider-container");

    sliderContainers.forEach((container) => {
        const slides = container.querySelectorAll(".slide");
        const slider = container.querySelector(".slider");
        let currentSlide = 0;

        function moveSlide(direction) {
            currentSlide = (currentSlide + direction + slides.length) % slides.length;

            slider.style.transform = `translateX(-${currentSlide * 100}%)`;

            container.setAttribute("data-current-slide", currentSlide);
        }

        let autoSwipe = setInterval(() => moveSlide(1), 3000); // 3 seconds interval

        container.addEventListener("mouseover", () => clearInterval(autoSwipe));

        container.addEventListener("mouseout", () => {
            autoSwipe = setInterval(() => moveSlide(1), 3000);
        });
        container.querySelector(".prev").addEventListener("click", () => {
            moveSlide(-1);
        });

        container.querySelector(".next").addEventListener("click", () => {
            moveSlide(1);
        });
    });
});




function copyCode(codeId) {
    const code = document.getElementById(codeId).innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!");
    }).catch((err) => {
        console.error("Failed to copy: ", err);
    });
}
