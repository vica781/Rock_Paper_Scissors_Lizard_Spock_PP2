// Add a YEAR to the footer
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").innerHTML = currentYear;
});
