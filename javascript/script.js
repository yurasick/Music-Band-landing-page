// закриваємо бургер меню після кліку по ссилці.

document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".burger-checkbox").checked = false;
  });
});
