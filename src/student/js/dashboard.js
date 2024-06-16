const name_bar = document.getElementById("name-bar");
const name_bar_r = document.getElementById("name-bar-right");

window.addEventListener("load", () => {
  name_bar.classList.remove("ms-[-600px]");
  name_bar.classList.add("ms-0");
  name_bar_r.classList.add("right-[-300px]");
  name_bar_r.classList.remove("right-[-0.5px]");
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

const class_rec = document.getElementById("class-rec");
const scroll_btn = document.querySelectorAll(".scroll-btn");

let classRecordings = [
  {
    image: "../../public/images/sps.jpg",
    title: "Study and Presentation Skills",
  },
  {
    image: "../../public/images/dw.jpg",
    title: "Digital World",
  },
  {
    image: "../../public/images/dw.jpg",
    title: "Mathematical Skills For Computing",
  },
  {
    image: "../../public/images/itp.jpg",
    title: "Introduction To Programming",
  },
  {
    image: "../../public/images/itcs.jpg",
    title: "Introduction To Computer Science",
  },
  {
    image: "../../public/images/itcs.jpg",
    title: "IT Team",
  },
];

for (let i = 0; i < classRecordings.length; i++) {
  const classRec = classRecordings[i];

  class_rec.innerHTML += `
    <div class="card w-[225px] flex flex-col items-center overflow-hidden rounded-md select-none cursor-pointer ">
        <img class="select-none w-full h-[100px] object-cover object-center" src="${classRec.image}" draggable="false"/>
        <div class="w-full p-3 h-[100px] bg-gradient-to-b from-[#0C56C1] from-30% to-[#173358]  text-white flex items-center justify-center" >
            <h2>${classRec.title}</h2>
        </div>
    </div>
    `;
}

const course_material = document.getElementById("courses");

let courseMaterials = [
  {
    image: "../../public/images/document.jpg",
    title: "Document",
  },
  {
    image: "../../public/images/soft-copy.jpg",
    title: "Textbooks & Soft Copy",
  },
  {
    image: "../../public/images/old-question.jpg",
    title: "Old Questions",
  },
  {
    image: "../../public/images/learning-resources.jpg",
    title: "Online learning Resources",
  },
];

for (let i = 0; i < courseMaterials.length; i++) {
  const course = courseMaterials[i];

  course_material.innerHTML += `
        <div class="flex flex-col rounded-lg overflow-hidden relative text-white shadow-lg" >
          <img class="w-14 h-14 rounded-full absolute translate-x-[-50%] translate-y-[-50%] left-8 top-[50%]" src="${course.image}" />
          <div class="bg-gradient-to-b from-[#173358] to-[#0C56C1] p-5">
            <h2 class="text-end text-[11px]">${course.title}</h2>
          </div>
          <div class="p-5">
            <span class="text-end text-black">21 files</span>
          </div>
        </div>
        `;
}

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["SPS", "DW", "ITP", "MSFC", "ITCS"],
    datasets: [
      {
        label: "Attendance by class ",
        data: [10, 13, 5, 8, 19],
        borderWidth: 1,
        backgroundColor: "#0C56C1",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  },
});

//calendar

const current_date = document.getElementById("current-date");
const daysTag = document.querySelector(".days");
const preNextBtn = document.querySelectorAll(".calender-btn");

let date = new Date(),
  currentYear = date.getFullYear();
currentMonth = date.getMonth();

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const updateCalender = () => {
  let lastDateOfCurrentMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  let firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1).getDay();
  let lastDayOfMonth = new Date(
    currentYear,
    currentMonth,
    lastDateOfCurrentMonth
  ).getDay();
  let lastDayOfPreMonth = new Date(currentYear, currentMonth, 0).getDate();

  let liTag = "";
  for (let i = firstDayOfCurrentMonth; i > 0; i--) {
    liTag += `<li class=" disable-text">${lastDayOfPreMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfCurrentMonth; i++) {
    let current_day =
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "current-day"
        : "";
    liTag += `<li class="${current_day}">${i}</li>`;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class=" disable-text">${i - lastDayOfMonth + 1}</li>`;
  }

  current_date.innerHTML = `${months[currentMonth]} , ${currentYear}`;
  daysTag.innerHTML = liTag;
};

preNextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentMonth = btn.id === "pre" ? currentMonth - 1 : currentMonth + 1;

    if (currentMonth > 0 || currentMonth < 11) {
      date = new Date(currentYear, currentMonth);
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    } else {
      date = new Date();
    }
    updateCalender();
  });
});

updateCalender();

const pie_chart = document.getElementById("pie-chart");

new Chart(pie_chart, {
  type: "doughnut",
  data: {
    labels: ["Empty", "Grade"],
    datasets: [
      {
        label: ["Empty", "Grade"],
        data: [20, 80],
        borderWidth: 1,
        backgroundColor: ["#f1f1f1", "#0C56C1"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  },
});
