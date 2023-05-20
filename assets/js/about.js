// This function takes an element and creates a hyperlink to it
function createLink(element) {
  var link = document.createElement("a");
  link.textContent = element.textContent;
  link.href = "#" + element.id;
  return link;
}

// This function adds a new item to the table of contents
function addToTableOfContents(element, depth) {
  var tocList = document.getElementById("tocList");
  var listItem = document.createElement("li");
  listItem.style.textIndent = depth + "em"; // Indent item based on heading level
  listItem.appendChild(createLink(element));
  tocList.appendChild(listItem);
}

// This function iterates over all headings in the document
function populateTableOfContents() {
  var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  headings.forEach(function (heading) {
    // Assume that the heading's tag name is of the form "Hn", where n is the depth
    var depth = parseInt(heading.tagName.slice(1));
    addToTableOfContents(heading, depth);
  });
}

// Call the function when the page is loaded
window.onload = populateTableOfContents;

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
