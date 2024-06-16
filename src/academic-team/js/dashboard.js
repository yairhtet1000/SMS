document.addEventListener("DOMContentLoaded", () => {
  const name_bar = document.getElementById("name-bar");
  const name_bar_r = document.getElementById("name-bar-right");

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
      image: "../../public/images/PyaeSoneHein.jpg",
      name: "Pyae Sone Hein",
      progress_amg: 92,
    },
    {
      image: "../../public/images/YaeWint.jpg",
      name: "Yae Wint",
      progress_amg: 85,
    },
    {
      image: "../../public/images/HeinHtetKyaw.jpg",
      name: "Hein Htet Kyaw",
      progress_amg: 70,
    },
  ];

  const student_info = document.getElementById("student-information");

  for (let i = 0; i < student_infos.length; i++) {
    student_info.innerHTML += `
      <div class="flex p-2 justify-between items-center border-b">
        <img class="size-16 object-cover rounded-full" src="${student_infos[i].image}" alt="" />
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
                      <span class="bg-[#257099] p-1 text-white rounded-md w-[120px] text-center" >${event.start_date}</span >
                      <h3 class="pt-4">${event.title}</h3>
                    </div>
                    <span>${event.created_time}</span>
                </div> `;
  }

  const table_body = document.getElementById("table-body");

  let data = [];
  let studentData = [];

  const fetchData = async () => {
    try {
      const response = await fetch("../student-data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      data = await response.json();

      studentData = data.studentData;
      displayPaymentStudent(studentData.slice(0, 10));
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  fetchData();

  const displayPaymentStudent = (studentsToDisplay) => {
    table_body.innerHTML = "";

    studentsToDisplay.forEach((student) => {
      {
        const tr = document.createElement("tr");
        tr.id = student.id;
        tr.classList.add();

        const idTD = document.createElement("td");
        idTD.textContent = student.id;
        idTD.classList.add();

        const nameTD = document.createElement("td");
        nameTD.textContent = student.name;

        const feeTypeTD = document.createElement("td");
        feeTypeTD.textContent = student.fee_type;

        const feeAmountTD = document.createElement("td");
        feeAmountTD.textContent = student.amount;

        const statusTD = document.createElement("td");
        statusTD.textContent = student.fee_state;
        statusTD.classList.add("rounded-full", "bg-[#3DC84B]", "font-semibold");

        if (student.fee_state === "UNPAID") {
          statusTD.classList.remove("bg-[#3DC84B]");
          statusTD.classList.add("bg-[#DA3C3C]", "text-[#f1f1f1]");
        }

        tr.append(idTD, nameTD, feeTypeTD, feeAmountTD, statusTD);
        table_body.append(tr);
      }
    });
  };
});
