const lazyElements = document.querySelectorAll(".lazy-load");

// create an observer instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // load the content when the element is in view
      //   entry.target.innerHTML = entry.target.dataset.content;
      observer.unobserve(entry.target);
    }
  });
});

// observe each lazy element
lazyElements.forEach((element) => {
  observer.observe(element);
});
