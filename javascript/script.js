// закриваємо бургер меню після кліку по ссилці.

document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".burger-checkbox").checked = false;
  });
});

// текст, який виводиться в poput в залежності від вибраної кнопки
const buttons = document.querySelectorAll(".button-js");
const popupContent = document.querySelector(".content");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const concertItem = this.closest(".concert_info");
    const day = concertItem.querySelector(".concert-info__day").textContent;
    const city = concertItem.querySelector(".concert-info__city").textContent;
    popupContent.innerHTML = `
  <p>
    Ваше замовлення квитка на концерт гурту «Грим та Грім»
  </p>
  <p>
    📅 ${day}
  </p>
  <p>
    📍 ${city}
  </p>
`;
  });
});
