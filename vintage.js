document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.querySelector(".product-grid");
    const scrollLeft = document.querySelector(".scroll-button.left");
    const scrollRight = document.querySelector(".scroll-button.right");

    // Scroll left button
    scrollLeft.addEventListener("click", () => {
        productGrid.scrollBy({ left: -300, behavior: "smooth" });
    });

    // Scroll right button
    scrollRight.addEventListener("click", () => {
        productGrid.scrollBy({ left: 300, behavior: "smooth" });
    });
});
