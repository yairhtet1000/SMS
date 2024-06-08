document.addEventListener("DOMContentLoaded", () => {
  const program = document.getElementById("program");
  const level = document.getElementById("level");
  const showStudent = document.getElementById("student-info-container");
  const list_view = document.getElementById("list-view");
  const grid_view = document.getElementById("grid-view");

  const students = [
    {
      id: "NNU0001",
      name: "Hein Htet Kyaw",
      gender: "Male",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/HeinHtetKyaw.jpg",
      program: "NCC",
      level: 4,
    },
    {
      id: "NNU0002",
      name: "Htet Eaindra Aung",
      gender: "Female",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/MaHtet.jpg",
      program: "NCC",
      level: 4,
    },
    {
      id: "NNU0003",
      name: "Ngwe Zin Thaw",
      gender: "Female",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/NgweJin.jpg",
      program: "NCC",
      level: 5,
    },
    {
      id: "NNU0004",
      name: "Nang Noon Kham Si",
      gender: "Female",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/AhSii.jpg",
      program: "NCC",
      level: 4,
    },
    {
      id: "NNU0005",
      name: "Moh Moh Thant",
      gender: "Female",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/Olive.jpg",
      program: "NCC",
      level: 4,
    },
    {
      id: "NNU0006",
      name: "Phone Thet Naing Tun",
      gender: "Male",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/William.jpg",
      program: "NCC",
      level: 4,
    },
    {
      id: "NNU0007",
      name: "Yae Wint Aung",
      gender: "Male",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/YaeWint.jpg",
      program: "NCC",
      level: 4,
    },
    {
      id: "NNU0008",
      name: "Min Hein Htut",
      gender: "Male",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/MinHeinHtut.jpg",
      program: "NCC",
      level: 4,
    },
    {
      id: "NNU0009",
      name: "Pyae Sone Hein",
      gender: "Male",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/PyaeSoneHein.jpg",
      program: "NCC",
      level: 5,
    },
    {
      id: "NNU0010",
      name: "Si Thu Lin",
      gender: "Male",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/SiThuLin.jpg",
      program: "NCC",
      level: 4,
    },
    {
      id: "NNU0011",
      name: "Sut Seng Aung",
      gender: "Female",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/SutSengAung.jpg",
      program: "NCC",
      level: 3,
    },
    {
      id: "NNU0012",
      name: "Zaw Zaw Naing",
      gender: "Male",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/ZawZawNaing.jpg",
      program: "NCC",
      level: 4,
    },
    {
      id: "NNU0013",
      name: "Moe Hnin Wai",
      gender: "Female",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/MoeHninWai.jpg",
      program: "NCC",
      level: 3,
    },
    {
      id: "NNU0014",
      name: "GED Student",
      gender: "Female",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/ged-girl.jpg",
      program: "GED",
      // level: 3,
    },
    {
      id: "NNU0015",
      name: "Itic Lynn",
      gender: "Female",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/IticLynn.jpg",
      program: "ABE",
      level: 4,
    },
    {
      id: "NNU0016",
      name: "Khin Thu Zar",
      gender: "Female",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/KhinThuZar.jpg",
      program: "ABE",
      level: 4,
    },
    {
      id: "NNU0017",
      name: "May Tha Zin Nwe",
      gender: "Female",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/MayThaZinNwe.jpg",
      program: "ABE",
      level: 4,
    },
    {
      id: "NNU0018",
      name: "Mira",
      gender: "Female",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/Mira.jpg",
      program: "ABE",
      level: 4,
    },
    {
      id: "NNU0019",
      name: "Swan Saung",
      gender: "Male",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/SwanSaung.jpg",
      program: "GED",
      // level: 3,
    },
    {
      id: "NNU0020",
      name: "Zin Wai Yan Oo",
      gender: "Male",
      birthday: "01-01-2004",
      phone_number: "09959580804",
      address: "Mandalay",
      image: "../../public/images/ZinWaiYanOo.jpg",
      program: "ABE",
      level: 5,
    },
  ];

  program.addEventListener("change", (event) => {
    const selectedProgram = event.target.value;
    filterAndDisplayStudents(selectedProgram, level.value);
  });

  level.addEventListener("change", (event) => {
    const selectedLevel = event.target.value;
    filterAndDisplayStudents(program.value, selectedLevel);
  });

  const displayStudents = (studentsToDisplay) => {
    list_view.addEventListener("click", () => {
      showStudent.innerHTML = "";

      const table = document.createElement("table");
      table.classList.add("w-full", "table-auto", "text-center", "border-none");

      const tableHead = document.createElement("thead");

      const headContainer = document.createElement("tr");

      const headers = [
        "Image",
        "ID",
        "Name",
        "Address",
        "Phone Number",
        "Program",
      ];

      headers.forEach((headerText) => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headContainer.append(th);
      });

      const tableBody = document.createElement("tbody");
      table.append(tableHead, tableBody);
      tableHead.append(headContainer);

      studentsToDisplay.forEach((student) => {
        const listContainer = document.createElement("tr");
        listContainer.id = student.id;

        const imgTD = document.createElement("td");

        const imgStd = document.createElement("img");
        imgStd.src = student.image;
        imgStd.classList.add("size-24", "object-cover", "my-2", "rounded-full");
        imgTD.appendChild(imgStd);

        const idTD = document.createElement("td");
        idTD.textContent = student.id;

        const nameTD = document.createElement("td");
        nameTD.textContent = student.name;

        const addressTD = document.createElement("td");
        addressTD.textContent = student.address;

        const phNoTD = document.createElement("td");
        phNoTD.textContent = student.phone_number;

        const programTD = document.createElement("td");
        if (student.program === "GED") {
          programTD.textContent = student.program;
        } else {
          programTD.textContent = student.program + " Level " + student.level;
        }

        listContainer.append(imgTD, idTD, nameTD, addressTD, phNoTD, programTD);
        tableBody.append(listContainer);
      });

      showStudent.append(table);
    });

    grid_view.addEventListener("click", () => {
      showStudent.innerHTML = "";

      studentsToDisplay.forEach((student) => {
        const infoContainer = document.createElement("div");
        infoContainer.id = student.id;
        infoContainer.classList.add(
          "w-[18%]",
          "bg-[#173358]",
          "my-3",
          "p-5",
          "flex",
          "flex-col",
          "flex-shrink-0",
          "items-center",
          "rounded-lg"
        );

        const imgStd = document.createElement("img");
        imgStd.src = student.image;
        imgStd.classList.add("size-28", "object-cover", "my-2", "rounded-full");

        const name = document.createElement("span");
        name.textContent = student.name;
        name.classList.add("text-[#f1f1f1]");

        const program = document.createElement("span");
        if (student.program === "GED") {
          program.textContent = student.program;
        } else {
          program.textContent = student.program + " Level " + student.level;
        }
        program.classList.add("text-[#f1f1f1]");

        infoContainer.append(imgStd, name, program);
        showStudent.append(infoContainer);
      });
    });

    grid_view.click();
  };

  const filterAndDisplayStudents = (selectedProgram, selectedLevel) => {
    let filteredStudents = students;

    if (selectedProgram !== "ALL") {
      filteredStudents = filteredStudents.filter(
        (student) => student.program === selectedProgram
      );
    }

    if (selectedLevel !== "ALL") {
      filteredStudents = filteredStudents.filter(
        (student) => student.level == selectedLevel
      );
    }

    displayStudents(filteredStudents);
  };

  filterAndDisplayStudents("ALL", "ALL");
});
