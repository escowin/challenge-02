// logic | display language data in expertise section
function displayExpertise() {}

// logic | displaying exp data in exp section
function generateExperience(exp) {
  let htmlArr = [];
  for (let i = 0; i < exp.length; i++) {
    let articleTemplate = `
        <article class="row">
            <div>
                <p class="year">${exp[i].year}</p>
                <p class="exp">${exp[i].duration}</p>
            </div>
            <div class="text-wrapper">
            <div class="left-text">
              <p class="position">${exp[i].role}</p>
              <p class="details">${exp[i].code}</p>
              <ul class="role details">
                ${generateDescription(exp[i].description)}
              </ul>
            </div>
            <div class="right-text">
              <p>
                <a href="${exp[i].url}" target="_blank">${exp[i].company}</a>
              </p>
              <p class="details">${exp[i].location}</p>
            </div>
          </div>
        </article>`;
    htmlArr.push(articleTemplate);
  }
  let result = htmlArr.toString().replace(/>,/g, ">");
  return result;
}

function generateDescription(description) {
  let htmlArr = [];
  for (let i = 0; i < description.length; i++) {
    let descriptionTemplate = `<li>${description[i]}</li>`;
    htmlArr.push(descriptionTemplate);
  }
  let result = htmlArr.toString().replace(/>,/g, ">");

  return result;
}

function displayExperience() {
  let template = generateExperience(experience);
  experienceEl.innerHTML = template;
  return experienceEl;
}

function displayResume() {

}

displayExpertise(expertise);
displayExperience(experience);
// displayResume();