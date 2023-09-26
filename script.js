let theme = localStorage.getItem('theme')
if (theme == null) {
  setTheme('light')
}

let themeSwitches = document.getElementsByClassName("theme-switch");

for (let i = 0; themeSwitches.length > i; i++) {
  themeSwitches[i].addEventListener("click", function () {
    let mode = this.dataset.mode
    setTheme(mode)
  })
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "style.css";
  }

  if (mode == "dark") {
    document.getElementById("theme-style").href = "darkStyle.css";
  }
}