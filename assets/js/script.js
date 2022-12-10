// data
const aboutTextEl = document.getElementById("about-text-container");
const soloWorkEl = document.getElementById("solo-work-container");
const collaborationsEl = document.getElementById("collaborations-container");

// logic | about section
function displayAbout(details) {
  let languages = details.languages.toString().replace(/,/g, " ");

  let css = details.frameworks.css.toString().replace(/,/g, " ");
  let js = details.frameworks.js.toString().replace(/,/g, " ");
  let db = details.frameworks.db.toString().replace(/,/g, " ");
  let paradigms = details.paradigms.toString().replace(/,/g, " ");
  let tools = details.tools.toString().replace(/,/g, " ");

  aboutTextEl.innerHTML = `<h3>Software Engineer</h3>
  <div>
    <h4>Languages</h4> <p>${languages}</p>
  </div>
  <div>
    <h4>Libraries & frameworks<h4> <p>${css} ${js} ${db}<p>
  </div>
  <div>
    <h4>Paradigms<h4> <p>${paradigms}<p>
  </div>
  <div>
    <h4>Tools<h4> <p>${tools}<p>
  </div>`;

  return aboutTextEl.innerHTML;
}

// logic | solo work & collaborations
function randomize(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function displayPortfolio(apps) {
  // shuffles original array each time the page refreshes
  let shuffledArr = randomize(apps);
  let soloWork = [];
  let collaborations = [];

  // groups apps in two new arrays based on whether or not its a collaborative effort
  for (let i = 0; i < shuffledArr.length; i++) {
    if (shuffledArr[i].collaboration === false) {
      soloWork.push(shuffledArr[i]);
    } else {
      collaborations.push(shuffledArr[i]);
    }
  }

  let soloTemplate = displayWork(soloWork);
  let collaborationsTemplate = displayWork(collaborations);

  soloWorkEl.innerHTML = soloTemplate;
  collaborationsEl.innerHTML = collaborationsTemplate;
}

function displayWork(work) {
  let highlight = [];
  let apps = [];

  for (let i = 0; i < work.length; i++) {
    if (work[i].highlight === true) {
      highlight.push(work[i]);
    } else {
      apps.push(work[i]);
    }
  }

  let highlightEl = displayHighlight(highlight);
  let appElements = displayApps(apps);
  let result = highlightEl + appElements;

  return result;
}

function displayHighlight(highlight) {
  return `
  <div class="project highlight" id="${highlight[0].id}">
    <div class="project-text">
      <h3>${highlight[0].name}</h3>
      ${links(highlight[0])}
      <p>${highlight[0].languages}</p>
      <p>${highlight[0].dialects}</p>
    </div>
  </div>`;
}

function displayApps(apps) {
  let templateArr = [];

  for (let i = 0; i < apps.length; i++) {
    let result = `
    <div class="project" id="${apps[i].id}">
      <div class="project-text">
        <h3>${apps[i].name}</h3>
        ${links(apps[i])}
        <p>${apps[i].languages}</p>
        <p>${apps[i].dialects}</p>
      </div>
    </div>`;
    templateArr.push(result);
  }
  return templateArr.toString().replace(/>,/g, ">");
}

function links(app) {
  let result;

  if (app.liveUrl === null) {
    result = `<p><a href="${app.repo}" target="_blank">repo</a></p>`;
    return result;
  } else {
    result = `<p><a href="${app.repo}" target="_blank">repo</a> : <a href="${app.liveUrl}" target="_blank">live url</a></p>`;
    return result;
  }
}

function currentYear() {
  let date = new Date().getFullYear();
  const dateEl = document.querySelector("#date");
  dateEl.textContent = date;

  console.log(`
  \u00a9 ${date} Edwin M. Escobar
  https://github.com/escowin/professional-portfolio`)
}

// calls
currentYear();
displayAbout(expertise);
displayPortfolio(portfolio);
