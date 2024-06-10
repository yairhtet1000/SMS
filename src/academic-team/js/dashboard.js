document.addEventListener("DOMContentLoaded", () => {
  const table_body = document.getElementById("table-body");

  let studentData = [];

  const fetchData = async () => {
    try {
      const response = await fetch("../student-data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      studentData = await response.json();
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
