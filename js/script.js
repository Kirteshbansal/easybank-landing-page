const hamburger1 = document.getElementById("hamburger1");
const hamburger2 = document.getElementById("hamburger2");
const show = document.getElementById("show");

function openNav() {
  hamburger2.style.display = "block";
  hamburger1.style.display = "none";
  show.style.display = "block";
}
function closeNav() {
  hamburger1.style.display = "block";
  hamburger2.style.display = "none";
  show.style.display = "none";
}

hamburger1.addEventListener("click", openNav);
hamburger2.addEventListener("click", closeNav);
window.addEventListener("scroll", function () {
  if (window.innerWidth <= 1023) {
    closeNav();
  }
});
