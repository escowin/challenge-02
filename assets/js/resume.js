// data
const expertiseEl = document.getElementById("skills");
const experienceEl = document.getElementById("experience");
const educationEl = document.getElementById("education");
const endeavorsEl = document.getElementById("endeavors");

// logic | display language data in expertise section
function generateExpertise(skillset) {
    // stringifies and styles the array />,/g, ">"
    const languages = skillset.languages.toString().replace(/,/g, " ");
    const cssFrameworks = skillset.frameworks.css.toString().replace(/,/g, " ");
    const jsFrameworks = skillset.frameworks.js
      .sort()
      .toString()
      .replace(/,/g, " ");
    const databases = skillset.frameworks.db.sort().toString().replace(/,/g, " ");
    const paradigms = skillset.paradigms.toString().replace(/,/g, " ");
    const tools = skillset.tools.toString().replace(/,/g, " ");
  
    return `
      <p>Languages</p><p class="skillset">${languages}</p>
      <p>Frameworks</p><p class="skillset">${cssFrameworks} ${jsFrameworks} ${databases}</p>
      <p>Paradigms</p><p class="skillset">${paradigms}</p>
      <p>Tools</p><p class="skillset">${tools}</p>`;
  }
  
  function displayExpertise() {
    let template = generateExpertise(expertise);
    expertiseEl.innerHTML = template;
  
    return expertiseEl;
  }
  
  // logic | displays exp data in #exp
  function generateExperience(exp) {
    let htmlArr = [];
    for (let i = 0; i < exp.length; i++) {
      let html = `
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
      htmlArr.push(html);
    }
    let result = htmlArr.toString().replace(/>,/g, ">");
    return result;
  }
  
  function generateDescription(description) {
    let htmlArr = [];
    for (let i = 0; i < description.length; i++) {
      let html = `<li>${description[i]}</li>`;
      htmlArr.push(html);
    }
    let result = htmlArr.toString().replace(/>,/g, ">");
  
    return result;
  }
  
  function displayExperience() {
    let template = generateExperience(experience);
    experienceEl.innerHTML = template;
    return experienceEl;
  }
  
  // logic | displays education data in #education
  function generateEducation(education) {
      let htmlArr = [];
      for (let i = 0; i < education.length; i++) {
          let html = `<article class="row">
          <p class="year">${education[i].year}</p>
          <div class="text-wrapper">
            <div class="left-text">
              <p>${education[i].degree}</p>
              <p class="details">${education[i].major}</p>
            </div>
            <div class="right-text">
              <p>${education[i].school}</p>
              <p class="details">${education[i].location}</p>
            </div>
          </div>
        </article>`;
  
        htmlArr.push(html);
      }
      let result = htmlArr.toString().replace(/>,/g, ">");
  
      return result;
  };
  
  function displayEducation() {
      let template = generateEducation(education);
      educationEl.innerHTML = template;
      return educationEl;
  };
  
  // logic | displays extracurricular data in #endeavors
  function generateEndeavors(endeavor) {
    let htmlArr = [];
    for (let i = 0; i < endeavor.length; i++) {
      let html = `<article class="row">
              <p class="year">${endeavor[i].year}</p>
              <div class="text-wrapper">
                  <div class="left-text">
                    <p>${endeavor[i].role}</p>
                    <p class="details">${endeavor[i].details}</p>
                  </div>
                  <div class="right-text">
                      <p>${endeavor[i].event}</p>
                      <p class="details">${endeavor[i].location}</p>
                  </div>
              </div>
          </article>`;
  
      htmlArr.push(html);
    }
  
    let result = htmlArr.toString().replace(/>,/g, ">");
    return result;
  };
  
  function displayEndeavors() {
    let template = generateEndeavors(endeavors);
    endeavorsEl.innerHTML = template;
    return endeavorsEl;
  };
  
  // logic | displays call returns
  function displayResume() {
      console.log(`
      \u00A9 ${new Date().getFullYear()} Edwin M. Escobar
      https://github.com/escowin/professional-portfolio
      `);
  
      displayExpertise();
      displayExperience();
      displayEducation();
      displayEndeavors();
  }
  
  function currentYear() {
    let date = new Date().getFullYear();
    const dateEl = document.querySelector("#date");
    dateEl.textContent = date;
  
    console.log(`
    \u00a9 ${date} Edwin M. Escobar
    https://github.com/escowin/professional-portfolio`)
  }

  // call
  currentYear()
  displayResume();