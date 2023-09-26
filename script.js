let theme = localStorage.getItem('theme')
if (theme == null) {
  setTheme('light')
}

let themeSwitches = document.getElementsByClassName("theme-switch");