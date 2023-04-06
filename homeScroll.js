const images = document.querySelectorAll(".image");
const container = document.querySelector(".image-container");

function showImage() {
  const scrollPosition = window.pageYOffset;

  images.forEach((image) => {
    const imagePosition = image.offsetTop;
    if (scrollPosition >= imagePosition - container.offsetTop) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", showImage);
