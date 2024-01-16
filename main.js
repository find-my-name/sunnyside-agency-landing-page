const menuIcon = document.querySelector(".hamburger");

menuIcon.addEventListener("click", () => {
  document.querySelector(".menu-list").classList.toggle("menu-hidden");
});
