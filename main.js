const btn = document.querySelector(".toggle-btn");
const body = document.querySelector("body");

btn.addEventListener("click", function (e) {
  const clicked = e.target.closest(".toggle-btn");
  if (!clicked) return;

  clicked.classList.toggle("active");
  body.classList.toggle("dark");
});
