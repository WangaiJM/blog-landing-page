const btn = document.querySelector(".hambuger-button");
const navs = document.querySelector(".navigation");

btn.addEventListener("click", () => {
  navs.classList.toggle("active");
});
