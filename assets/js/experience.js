// data
const expertiseEl = document.getElementById("skills");
const experienceEl = document.getElementById("experience");
const educationEl = document.getElementById("education");
const endeavorsEl = document.getElementById("endeavors");

// data | objects & arrays correspond used to populate resume sections
const expertise = {
  languages: ["html", "css", "javascript", "es6", "json", "sql"],
  frameworks: {
    css: ["bootstrap"],
    js: [
      "bcrypt",
      "day",
      "moment",
      "handlebars",
      "inquirer",
      "jest",
      "jquery",
      "react",
      "redux",
      "sequelize",
      "node",
    ],
    db: ["mysql", "graphql", "nosql"],
  },
  paradigms: ["mvc", "oop", "orm", "rwd", "spa", "tdd"],
  tools: [
    "api",
    "git",
    "npm",
    "heroku",
    "insomnia",
    "jawsdb",
    "mongodb",
    "adobe&thinsp;cc",
    "corel&thinsp;painter",
    "wordpress",
    // "vscode",
  ],
};

const experience = [
  {
    company: "Vvh financial",
    role: "Site developer",
    year: "2022",
    duration: "present",
    location: "Dallas, TX",
    code: "bcrypt css express javascript mysql sequelize node react",
    description: [
      "Building an MVC app for company's clients and employees.",
      "Setting up the server, and routing its Rest API to faciliate frontend & backend communication.",
      "Writing great copy for a financial planner.",
    ],
    url: "https://github.com/escowin/vvh-financial",
  },
  {
    company: "2u, inc.",
    role: "Instructional specialist",
    year: "2022",
    duration: "present",
    location: "Houston, TX",
    code: "Rice University Coding Boot Camp Teacher's Assistant",
    description: [
      "Carrying out administrative tasks on behalf of the instructor.",
      "Helping students struggling with coursework during office hours.",
      "Recording and uploading Zoom classes to Canvas.",
    ],
    url: "#",
  },
  {
    company: "Escowin art",
    role: "Site developer",
    year: "2018",
    duration: "present",
    location: "Austin, TX",
    code: "html css javascript jquery adobe&thinsp;cc corel&thinsp;painter",
    description: [
      "Sole proprietorship to sell my art here in Austin. Built site to serve as my portfolio and business card.",
      //   "Initially built with wordpress, the site has since been rebuilt using html, css, javascript and jquery.",
      "Redesigning frontend using react.js",
      "Building sql database to re-incorporate e-commerce functionality.",
    ],
    url: "https://escowinart.com",
  },
  {
    company: "Blue strawberry",
    role: "Graphic novelist",
    year: "2017",
    duration: "5 years",
    location: "Austin, TX",
    code: "react.js css adobe&thinsp;suite corel&thinsp;painter",
    description: [
      "Wrote and illustrated a dialogue-less hero's journey narrative.",
      "Used Corel Painter to draw the artwork, and Adobe Suite for file formatting.",
      "Built site with CSS and React.js, passing props through components to display data dynamically.",
    ],
    url: "https://escowin.github.io/bluestrawberry/",
  },
  // {
  //     company: "",
  //     role: "",
  //     year: "",
  //     duration: "",
  //     location: "",
  //     code: "",
  //     description: [
  //         "",
  //         "",
  //     ]
  // },
];

const education = [
    {
        year: 2022,
        degree: "Coding bootcamp, Certificate of completion",
        major: "full-stack web development",
        school: "University of texas at austin",
        location: "Austin, TX"
    },
    {
        year: 2015,
        degree: "Undergraduate, Bachelor of fine arts",
        major: "illustration, screenwriting",
        school: "California state university, fullerton",
        location: "Fullerton, CA"
    },
    {
        year: 2011,
        degree: "Undergraduate, Associate of arts",
        major: "fine arts",
        school: "Orange coast college",
        location: "Costa Mesa, CA"
    },
];

const endeavors = [
  {
    year: 2023,
    role: "Texas rowing club athelete",
    details: "Mens novice single, mens masters-b straight pair",
    event: "The heart of texas regatta",
    location: "Austin, TX",
  },
  {
    year: 2022,
    role: "ACE Tutor",
    details: "U.S. history tutor, art club head, weightlifting coach",
    event: "Austin can academy",
    location: "Austin, TX",
  },
  {
    year: 2021,
    role: "Creative action teaching artist",
    details: "Extracurricular art instructor",
    event: "Hart elementary",
    location: "Austin, TX",
  },
  {
    year: 2017,
    role: "Mountaineer",
    details:
      "Mount wilson, cucamonga peak, mt baldy, san bernardino peak, san jacinto, san gorgonio",
    event: "Socal six-pack of peaks",
    location: "Southern California",
  },
  {
    year: 2012,
    role: "Finer things club founder",
    details: "President, cultural executor",
    event: "California state university, fullerton",
    location: "Fullerton, CA",
  },
  {
    year: 2010,
    role: "World passport instructor",
    details: "English as a foreign language instructor",
    event: "The ministry of education of taiwan",
    location: "聖功女子高級中學",
  },
  {
    year: 2009,
    role: "Teach and learn in korea scholar",
    details: "English as a second language instructor",
    event:
      "The ministry of education, science & technology,<span class='mobile-hide'></span><br class='small-laptop mobile-show print-hide' />republic of korea",
    location: "남상초등학교",
  },
];

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

// call
displayResume();