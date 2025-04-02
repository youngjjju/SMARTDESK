const alarms = [
  {
    time: "08:00",
    description: "Wake up",
  },
  {
    time: "12:00",
    description: "Call to Ella",
  },
];
const alarmsHTML = alarms
  .map(
    (alarms) => `
                <div>
                    <span>${alarms.time}</span>
                    <span>${alarms.description}</span>
                </div>
            `
  )
  .join("");
document.querySelector(".alarmList").innerHTML = alarmsHTML;
