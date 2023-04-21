// Get the BACK-TO-TOP button
const backToTopButton = document.getElementById("back-to-top");

// Show the back-to-top button when the player scrolls down from the top of the page
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll back to the top of the page after the player clicks the back-to-top button
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Add a YEAR to the footer
const currentYear = new Date().getFullYear();
document.getElementById("current-year").innerHTML =
  "&copy; " +
  currentYear +
  " 'Rock Paper Scissors Lizard Spock' created by Victoria Kalenik";

  