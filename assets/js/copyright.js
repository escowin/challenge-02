function currentYear() {
  let date = new Date().getFullYear();
  const dateEl = document.querySelector("#date");
  dateEl.textContent = date;

  console.log(`
  \u00a9 ${date} Edwin M. Escobar
  https://github.com/escowin/professional-portfolio`)
}

currentYear();