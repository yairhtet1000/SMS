const name_bar = document.getElementById("name-bar");
const name_bar_r = document.getElementById("name-bar-right");
let lastScrollTop = 0;

window.addEventListener("load", () => {
  name_bar.classList.remove("ms-[-600px]");
  name_bar.classList.add("ms-0");
  name_bar_r.classList.add("right-[-300px]");
  name_bar_r.classList.remove("right-0");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 130) {
    name_bar_r.classList.add("right-0");
    name_bar_r.classList.remove("right-[-300px]");
    name_bar.classList.add("ms-[-600px]");
    name_bar.classList.remove("ms-0");
  } else {
    name_bar.classList.remove("ms-[-600px]");
    name_bar.classList.add("ms-0");
    name_bar_r.classList.add("right-[-300px]");
    name_bar_r.classList.remove("right-0");
  }
});

const student_infos = [
  {
    image: "../../public/images/MSquare-YT-PFP.jpg",
    name: "Bruce Wayne",
    progress_amg: 92,
  },
  {
    image: "../../public/images/MSquare-YT-PFP.jpg",
    name: "Clark Kent",
    progress_amg: 85,
  },
  {
    image: "../../public/images/MSquare-YT-PFP.jpg",
    name: "Barry Allen",
    progress_amg: 70,
  },
];

const student_info = document.getElementById("student-informations");

for (let i = 0; i < student_infos.length; i++) {
  student_info.innerHTML += `
                <div class="flex p-2 justify-between items-center border-b">
                    <img class="w-16 rounded-full" src="${student_infos[i].image}" alt="" />
                    <h3>${student_infos[i].name}</h3>
                    <div class="progress-bar w-[30%] rounded-md h-3 bg-[#f1f1f1] overflow-auto" >
                      <div class="h-3 w-[${student_infos[i].progress_amg}%] bg-[#05ff00]"></div>
                    </div>
                    <span>${student_infos[i].progress_amg}%</span>
                </div>`;
}

const attendance = document.getElementById("attendance-report");

new Chart(attendance, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "March", "April", "May"],
    datasets: [
      {
        label: "NCC",
        data: [95, 85, 60, 75, 70],
        borderWidth: 1,
        backgroundColor: "#173358",
      },
      {
        label: "ABE ",
        data: [60, 59, 66, 81, 62],
        borderWidth: 1,
        backgroundColor: "#0D8989",
      },
      {
        label: "GED",
        data: [80, 83, 88, 70, 45],
        borderWidth: 1,
        backgroundColor: "#FF8A00",
      },
      {
        label: "IGCSE",
        data: [70, 50, 70, 80, 90],
        borderWidth: 1,
        backgroundColor: "#2196F3",
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

const news = [
  {
    title: "Pyin Oo Lwin Trip",
    start_date: "28, Mar, 2024",
    created_time: "50 min",
  },
  {
    title: "New Next’s Fresher Welcome",
    start_date: "6, June, 2024",
    created_time: "30 min",
  },
  {
    title: "Design Hackathon Highlights",
    start_date: "25, Dec, 2024",
    created_time: "5 min",
  },
];

const events = document.getElementById("events");

for (let i = 0; i < news.length; i++) {
  const event = news[i];

  events.innerHTML += `
                <div class="flex w-full justify-between items-center border-b-4 p-3" >
                    <div class="flex flex-col justify-between">
                      <span class="bg-[#257099] p-1 text-white rounded-sm w-[100px] text-center" >${event.start_date}</span >
                      <h3 class="pt-4">${event.title}</h3>
                    </div>
                    <span>${event.created_time}</span>
                </div> `;
}
