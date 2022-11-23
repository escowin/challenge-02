// console.log(portfolio)

// logic
function randomize(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function displayPortfolio(apps) {
  // shuffle
  let shuffledArr = randomize(apps);
  // console.log(shuffledArr)
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

  let soloTemplate = displaySoloWork(soloWork);
  // displayCollaborations(collaborations);

  console.log(soloTemplate)
}

function displaySoloWork(soloWork) {
  let highlight = [];
  let apps = [];

  for (let i = 0; i < soloWork.length; i++) {
    if (soloWork[i].highlight === true) {
      highlight.push(soloWork[i]);
    } else {
      apps.push(soloWork[i]);
    }
  }

  let highlightEl = displayHighlight(highlight);
  return highlightEl
//   console.log(highlight)
//   let appElements = displayApps(apps);
//   console.log(apps);
};

function displayCollaborations(collaborations) {
    // console.log(collaborations);
};

function displayHighlight(highlight) {
  // console.log(highlight[0])
  return `
    <div class="project highlight" id="${highlight[0].id}">
        <div class="project-text">
            <h3>${highlight[0].name}</h3>
            ${links(highlight[0])}
            <p>${highlight[0].languages}</p>
            <p>${highlight[0].dialects}</p>
        </div>
    </div>`;
};

function displayApps(apps) {
    console.log(apps)
};

function links(app) {
    let repo = app.repo;
    let liveUrl = repo.liveUrl;

    console.log(app.repo)
    if (app.liveUrl === "") {
        console.log(`${app.name} has no live url`)
        // return `<p><a href="${app}`
    } else {
        return `
        <p>
            <a href="${repo}" target="_blank">repo</a> : <a href="${liveUrl} target="_blank">live url</a>
        </p>`;
    }
    let result;    
}

function currentYear() {
  let date = new Date().getFullYear();
  const dateEl = document.querySelector("#date");
  dateEl.textContent = date;
}

// calls
currentYear();
displayPortfolio(portfolio);
