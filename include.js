
function includeHTML(id, file) {
  const element = document.getElementById(id);
  fetch(file)
    .then(response => response.text())
    .then(data => {
      element.innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  includeHTML("header", "header.html");
  includeHTML("footer", "footer.html");
});
