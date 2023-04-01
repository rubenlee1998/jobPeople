const jobContainer = document.querySelector(".job-container");
const scrollLeftButton = document.querySelector(".scroll-left-button");
const scrollRightButton = document.querySelector(".scroll-right-button");

scrollRightButton.addEventListener("click", () => {
  // Calculate the width of one job element
  const jobWidth = document.querySelector(".job").offsetWidth;

  // Calculate the current scroll position and add the width of one job element
  const newScrollPosition = jobContainer.scrollLeft + jobWidth;

  // Scroll to the new position with a smooth animation
  jobContainer.scrollTo({
    left: newScrollPosition,
    behavior: "smooth",
  });
});

scrollLeftButton.addEventListener("click", () => {
  // Calculate the width of one job element
  const jobWidth = document.querySelector(".job").offsetWidth;

  // Calculate the current scroll position and add the width of one job element
  const newScrollPosition = jobContainer.scrollLeft - jobWidth;

  // Scroll to the new position with a smooth animation
  jobContainer.scrollTo({
    left: newScrollPosition,
    behavior: "smooth",
  });
});
