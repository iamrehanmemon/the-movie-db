//Dom Elements

const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const theme = document.getElementById("theme");
const body = document.body;

// button Event Handler
darkButton.onclick = () => {
  body.classList.replace("light", "dark");
  // localStorage.setItem("theme", "dark");
};

lightButton.onclick = () => {
  body.classList.replace("dark", "light");

  // localStorage.setItem("theme", "light");
};

theme.onclick = () => {
  var x = document.getElementById("toggle-dropdown");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
};
