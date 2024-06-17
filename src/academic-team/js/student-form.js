const nnu = document.getElementById("nnu");
const nna = document.getElementById("nna");
const nnu_page = document.getElementById("nnu-page");
const nna_page = document.getElementById("nna-page");
const title = document.getElementById("title");

let pageIsNNA = true;

nna.addEventListener("click", () => {
  nnu_page.classList.add("hidden");
  nna_page.classList.remove("hidden");
  title.textContent = "NNA Registeration Form";
});

nnu.addEventListener("click", () => {
  nnu_page.classList.remove("hidden");
  nna_page.classList.add("hidden");
  title.textContent = "NNU Registeration Form";
});
