// Get the button element
var scrollToTopButton = document.getElementById("scroll-to-top");

// When the user clicks the button, scroll to the top of the page
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
