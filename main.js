let icon = document.querySelector(".nav .icon");
let links = document.querySelectorAll(".nav .links a");

icon.addEventListener("click", function () {
  this.classList.toggle("change");

  links.forEach(function (link, index) {
    if (index === 0) {
      return;
    }
    if (link.style.display === "none" || link.style.display === "") {
      link.style.display = "block";
    } else {
      link.style.display = "none";
    }
  });
});

///###########################################################
