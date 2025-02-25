// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Adjust the threshold as needed
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling
  });
});

// video
// wheat-grass-video
document.addEventListener("DOMContentLoaded", function () {
  let video = document.getElementById("myVideo");
  video.play().catch((error) => console.log("Autoplay blocked:", error));
});
//index-video
document.addEventListener("DOMContentLoaded", function () {
  let video = document.getElementById("index-video");
  video.play().catch((error) => console.log("Autoplay blocked:", error));
});
// cosmetic-video
document.addEventListener("DOMContentLoaded", function () {
  let video = document.getElementById("cosmetic-video");
  video.play().catch((error) => console.log("Autoplay blocked:", error));
});
// perfume-video
document.addEventListener("DOMContentLoaded", function () {
  let video = document.getElementById("perfume-video");
  video.play().catch((error) => console.log("Autoplay blocked:", error));
});
// juice-video
document.addEventListener("DOMContentLoaded", function () {
  let video = document.getElementById("juice-video");
  video.play().catch((error) => console.log("Autoplay blocked:", error));
});
// trending-product-video
document.addEventListener("DOMContentLoaded", function () {
  let video = document.getElementById("trending-product-video");
  video.play().catch((error) => console.log("Autoplay blocked:", error));
});
