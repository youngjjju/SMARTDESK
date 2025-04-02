const weather = document.querySelector(".weather");
const modal_weather = document.querySelector("#modal-weather");
const modal_weather_close = document.querySelector(".modal-weather-close");
weather.addEventListener("click", () => {
  modal_weather.classList.remove("modal-weather-hidden");
});
modal_weather_close.addEventListener("click", () => {
  modal_weather.classList.add("modal-weather-hidden");
});
