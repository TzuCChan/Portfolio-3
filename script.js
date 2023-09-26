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