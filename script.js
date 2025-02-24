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

document.getElementById("myVideo").play();
