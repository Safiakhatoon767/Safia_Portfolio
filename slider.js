window.onload = function () {
    let images = [
        "https://cdn.pixabay.com/photo/2025/06/16/11/04/utah-9663013_1280.jpg",
        "https://cdn.pixabay.com/photo/2025/06/28/07/34/waterfall-9684883_1280.jpg",
        "https://cdn.pixabay.com/photo/2025/06/28/17/56/forest-9685700_1280.jpg"
    ];

    let currentIndex = 0;

    let slider = document.querySelector("#slider");
    slider.setAttribute("src", images[currentIndex]);

    document.querySelector("#next").addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        slider.setAttribute("src", images[currentIndex]);
    });

    document.querySelector("#prev").addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        slider.setAttribute("src", images[currentIndex]);
    });
}
