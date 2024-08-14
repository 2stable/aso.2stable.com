document.addEventListener("DOMContentLoaded", function() {
  const elements = document.getElementById("__content__").getElementsByTagName("h4");

  for (let item of elements) {
    var href = document.createElement("a");
    href.className = "anchorjs-link ps-2";
    href.ariaLabel = "Anchor";
    href.setAttribute("data-anchorjs-icon", "#")
    href.href = "#" + item.id;

    item.appendChild(href);
  }
});