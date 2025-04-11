document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prev,next",
      center: "title",
      right: "today",
    },
    initialView: "dayGridMonth",
    editable: true,
    selectable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    // multiMonthMaxColumns: 1, // guarantee single column
    // showNonCurrentDates: true,
    // fixedWeekCount: false,
    // businessHours: true,
    // weekends: false,
    events: [
      {
        title: "Long Event",
        start: "2025-04-07",
        end: "2025-04-12",
      },
      {
        title: "Conference",
        start: "2025-04-11",
        end: "2025-04-13",
      },
      {
        title: "Conference",
        start: "2025-04-11",
        end: "2025-04-13",
      },
      {
        title: "Conference",
        start: "2025-04-11",
        end: "2025-04-13",
      },
      {
        title: "Meeting323232323",
        start: "2025-04-13",
        end: "2025-04-13",
      },
      {
        title: "Meeting",
        start: "2025-04-13",
        end: "2025-04-13",
      },
    ],
    eventColor: "#156efe",
    eventOrder: true,
    contentHeight: "auto",
  });

  calendar.render();
});
