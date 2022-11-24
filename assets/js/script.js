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
  // console.log(collaborations)

  let soloTemplate = displayWork(soloWork);
  let collaborationsTemplate = displayWork(collaborations);

  console.log(soloTemplate);
  console.log(collaborationsTemplate);
};

function displayWork(work) {
  // console.log(work)
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
};

function displayHighlight(highlight) {
    console.log(highlight)
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
  let templateArr = [];

  for (let i = 0; i < apps.length; i++) {
    // console.log(apps[i])
    let result = `
    <div class="project" id="${apps[i].id}>
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
    result = `<p><a href="${app.repo}" target="_blank">repo</a> : <a href="${app.liveUrl} target="_blank">live url</a></p>`;
    return result;
  }
}

function currentYear() {
  let date = new Date().getFullYear();
  const dateEl = document.querySelector("#date");
  dateEl.textContent = date;
}

// calls
currentYear();
displayPortfolio(portfolio);
