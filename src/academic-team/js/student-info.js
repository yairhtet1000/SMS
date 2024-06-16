document.addEventListener("DOMContentLoaded", () => {
  const program = document.getElementById("program");
  const level = document.getElementById("level");
  const showStudent = document.getElementById("student-info-container");
  const list_view = document.getElementById("list-view");
  const grid_view = document.getElementById("grid-view");

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
      filterAndDisplayStudents("ALL", "ALL");
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  fetchData();

  program.addEventListener("change", (event) => {
    const selectedProgram = event.target.value;
    filterAndDisplayStudents(selectedProgram, level.value);
  });

  level.addEventListener("change", (event) => {
    const selectedLevel = event.target.value;
    filterAndDisplayStudents(program.value, selectedLevel);
  });

  const displayStudents = (studentsToDisplay) => {
    showStudent.innerHTML = "";

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
        imgStd.classList.add(
          "size-16",
          "object-cover",
          "mx-auto",
          "my-2",
          "rounded-full"
        );
        imgTD.append(imgStd);

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
          "m-2",
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
        name.classList.add("text-[#f1f1f1]", "text-center");

        const program = document.createElement("span");
        if (student.program === "GED" || student.program === "IGCSE") {
          program.textContent = student.program;
        } else {
          program.textContent = student.program + " Level " + student.level;
        }
        program.classList.add("text-[#f1f1f1]", "text-center");

        infoContainer.append(imgStd, name, program);
        showStudent.append(infoContainer);
      });
    });

    grid_view.click();
  };

  const filterAndDisplayStudents = (Program, Level) => {
    let filteredStudents = studentData;

    if (Program !== "ALL") {
      filteredStudents = filteredStudents.filter(
        (student) => student.program === Program
      );
    }

    if (Level !== "ALL") {
      filteredStudents = filteredStudents.filter(
        (student) => student.level == Level
      );
    }

    displayStudents(filteredStudents);
  };
});
