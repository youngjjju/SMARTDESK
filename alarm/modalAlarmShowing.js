const alarm = document.querySelector(".alarm");
const modal_alarm = document.querySelector("#modal-alarm");
const modal_alarm_close = document.querySelector(".modal-alarm-close");
alarm.addEventListener("click", () => {
  modal_alarm.classList.remove("modal-alarm-hidden");
});
modal_alarm_close.addEventListener("click", () => {
  modal_alarm.classList.add("modal-alarm-hidden");
});
