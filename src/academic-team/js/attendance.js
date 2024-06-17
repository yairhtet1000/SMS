document.addEventListener("DOMContentLoaded", () => {
  const ncc = document.getElementById("ncc");
  const abe = document.getElementById("abe");
  const ncc_level = document.getElementById("ncc-level");
  const abe_level = document.getElementById("abe-level");
  const igcse = document.getElementById("igcse");
  const ged = document.getElementById("ged");
  const attendance_table = document.getElementById("attendance-table");

  let data = [];
  let studentData = [];
  let program = "NCC";

  const fetchData = async () => {
    try {
      const response = await fetch("../student-data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      data = await response.json();
      studentData = data.studentData;
      filterStudent(program, ncc_level.value);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  fetchData();

  ncc.addEventListener("change", () => {
    if (ncc.checked) {
      program = "NCC";
      filterStudent(program, ncc_level.value);
    }
  });

  abe.addEventListener("change", () => {
    if (abe.checked) {
      program = "ABE";
      filterStudent(program, abe_level.value);
    }
  });

  ncc_level.addEventListener("change", (event) => {
    if (ncc.checked) {
      const selectedLevel = event.target.value;
      filterStudent(program, selectedLevel);
    }
  });

  abe_level.addEventListener("change", (event) => {
    if (abe.checked) {
      const selectedLevel = event.target.value;
      filterStudent(program, selectedLevel);
    }
  });

  igcse.addEventListener("change", () => {
    program = "IGCSE";
    filterStudent(program);
  });

  ged.addEventListener("change", () => {
    program = "GED";
    filterStudent(program);
  });

  const displayAttendance = (students) => {
    attendance_table.innerHTML = "";

    students.forEach((student) => {
      const tableRow = document.createElement("tr");
      tableRow.id = student.id;
      tableRow.classList.add("bg-[#bce1f9]");

      const tdImg = document.createElement("td");
      const Img = document.createElement("img");
      Img.src = student.image;
      Img.classList.add("size-10", "m-auto", "object-cover", "rounded-full");
      tdImg.append(Img);

      const tdName = document.createElement("td");
      tdName.textContent = student.name;

      const tdSubject = document.createElement("td");
      tdSubject.textContent = "OOSAD";

      const tdDate = document.createElement("td");
      tdDate.textContent = "11/06/2024 - 1:00pm";

      const tdBtn = document.createElement("td");
      tdBtn.classList.add("h-12", "flex", "justify-around", "items-center");

      const inputP = document.createElement("input");
      inputP.type = "radio";
      inputP.name = `attendance-${student.id}`;
      inputP.value = "Present";
      inputP.id = `present-btn-${student.id}`;
      inputP.classList.add("hidden");

      const labelP = document.createElement("label");
      labelP.htmlFor = `present-btn-${student.id}`;
      labelP.textContent = "Present";
      labelP.classList.add("bg-[#3DC84B]", "px-2", "py1", "rounded-md");

      const inputA = document.createElement("input");
      inputA.type = "radio";
      inputA.name = `attendance-${student.id}`;
      inputA.value = "Absent";
      inputA.id = `absent-btn-${student.id}`;
      inputA.classList.add("hidden");

      const labelA = document.createElement("label");
      labelA.htmlFor = `absent-btn-${student.id}`;
      labelA.textContent = "Absent";
      labelA.classList.add("bg-[#DA3C3C]", "px-2", "py1", "rounded-md");

      tdBtn.append(inputP, labelP, inputA, labelA);
      tableRow.append(tdImg, tdName, tdSubject, tdDate, tdBtn);
      attendance_table.append(tableRow);
    });
  };

  const filterStudent = (Program, Level) => {
    let filteredStudents = studentData;

    if (Program) {
      filteredStudents = filteredStudents.filter(
        (student) => student.program === Program
      );
    }

    if (Level) {
      filteredStudents = filteredStudents.filter(
        (student) => student.level == Level
      );
    }

    displayAttendance(filteredStudents);
  };
});
