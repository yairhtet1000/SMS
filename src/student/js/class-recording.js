const sps_records = document.getElementById("sps-records");
const itp_records = document.getElementById("itp-records");
const dw_records = document.getElementById("dw-records");
const msfc_records = document.getElementById("msfc-records");
const itcs_records = document.getElementById("itcs-records");
const it_team_records = document.getElementById("it-team-records");

generateRecordings = (numberOfRecordings) => {
  const recordings = [];
  for (let i = 0; i < numberOfRecordings; i++) {
    let randomNum = randomNumber(15);
    let randomDate = randomNumber(31);

    recordings.push({
      video: `../../public/video/Video ${randomNum}.mp4`,
      title: `${randomDate}/1/2024`,
    });
  }
  return recordings;
};

const randomNumber = (max) => {
  return (random = Math.floor(Math.random() * max + 1));
};

createRecordings = (recording) => {
  const record = document.createElement("div");
  record.classList.add(
    "w-[230px]",
    "m-2",
    "p-1",
    "bg-gradient-to-b",
    "from-[#0C56C1]",
    "from-70%",
    "to-[#173358]",
    "flex-shrink-0",
    "rounded-lg"
  );

  const videoRecords = document.createElement("video");
  videoRecords.src = recording.video;
  videoRecords.controls = true;
  videoRecords.classList.add("min-w-full", "rounded-lg");

  const titleElement = document.createElement("h2");
  titleElement.textContent = recording.title;
  titleElement.classList.add("text-center", "text-[#f1f1f1]", "font-semi-bold");

  record.appendChild(videoRecords, titleElement);

  return record;
};

const arrayLoop = (course, numberOfRecordings) => {
  const recordings = generateRecordings(numberOfRecordings);
  for (const recording of recordings) {
    const recordElement = createRecordings(recording);
    course.appendChild(recordElement);
  }
};

arrayLoop(sps_records, 6);
arrayLoop(itp_records, 6);
arrayLoop(dw_records, 6);
arrayLoop(msfc_records, 6);
arrayLoop(itcs_records, 6);
arrayLoop(it_team_records, 6);
