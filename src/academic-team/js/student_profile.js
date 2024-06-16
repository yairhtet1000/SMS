const ctx = document.getElementById("attendance-chart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["OOSAD", "CS", "CN", "AMCC"],
    datasets: [
      {
        label: "Attendance by class ",
        data: [80, 30, 50, 60],
        borderWidth: 1,
        backgroundColor: "#173358",
      },
    ],
  },
  options: {
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
    maintainAspectRatio: false,
  },
});
