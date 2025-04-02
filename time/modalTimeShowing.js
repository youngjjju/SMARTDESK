const time = document.querySelector(".time");
const modal_time = document.querySelector("#modal-time");
const modal_time_close = document.querySelector(".modal-time-close");
time.addEventListener("click", () => {
  modal_time.classList.remove("modal-time-hidden");
});

modal_time_close.addEventListener("click", () => {
  modal_time.classList.add("modal-time-hidden");
});
