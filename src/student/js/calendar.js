const calendarEl = document.getElementById("calender");

const calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: "timeGridWeek",
  slotMinTime: "08:00:00", // Start time of the day
  slotMaxTime: "18:00:00", // End time of the day
  slotDuration: "00:30:00",
  timeZone: "UTC",
  height: 645,
  events: [
    {
      id: "a",
      title: "IT Team,Tr.Myat Mon Aye",
      start: "2024-06-10T15:00:00",
      end: "2024-06-10T17:00:00",
    },
    {
      id: "a",
      title: "OOSAD",
      start: "2024-06-11T13:00:00",
      end: "2024-06-11T15:00:00",
    },
    {
      id: "a",
      title: "AMCC",
      start: "2024-06-11T15:00:00",
      end: "2024-06-11T17:00:00",
    },
    {
      id: "a",
      title: "CN",
      start: "2024-06-14T10:00:00",
      end: "2024-06-14T12:00:00",
    },
    {
      id: "a",
      title: "CS",
      start: "2024-06-14T15:00:00",
      end: "2024-06-14T17:00:00",
    },
  ],
});

calendar.render();

const pie_chart = document.getElementById("pie-chart");
const pie_chart2 = document.getElementById("pie-chart2");

new Chart(pie_chart, {
  type: "doughnut",
  data: {
    labels: ["SPS", "empty"],
    datasets: [
      {
        label: "Attendance by class ",
        data: [80, 20],
        borderWidth: 1,
        backgroundColor: ["#173358", "#f1f1f1"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        max: 100,
        min: 0,
        ticks: {
          stepSize: 20,
        },
      },
    },
    maintainAspectRatio: false,
  },
});
