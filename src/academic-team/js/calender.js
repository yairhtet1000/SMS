const calendarEl = document.getElementById("calender");

const calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: "timeGridWeek",
});

calendar.render();
