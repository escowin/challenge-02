// data
const aboutTextEl = document.getElementById("about-text-container");
const soloWorkEl = document.getElementById("solo-work-container");
const collaborationsEl = document.getElementById("collaborations-container");

// logic | about section
function displayAbout() {
  const aboutText = {
    h3: "Software engineer",
    body: "This is a visual representation of my work built with html, css, and vanilla javascript. I have since built a new portfolio to demonstrate my proficiency with React.",
    react: "react portfolio",
    link: "https://escowin.github.io/portfolio"
  };

  aboutTextEl.innerHTML = `<h3>${aboutText.h3}</h3>
  <div>
    <p>${aboutText.body}
      <br/><br/>
      
      <a href="${aboutText.link}" target="_blank">
        <i class="fa-solid fa-link"></i> ${aboutText.react}
      </a>
    </p>
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

// calls
displayAbout();
displayPortfolio(portfolio);
