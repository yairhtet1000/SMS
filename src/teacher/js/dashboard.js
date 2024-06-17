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
