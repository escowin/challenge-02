// data
const experienceEl = document.getElementById('experience')

const experience = [
  {
    company: "Vvh financial",
    role: "Site developer",
    year: "2022",
    duration: "present",
    location: "Dallas, TX",
    code: "bcrypt css express javascript mysql sequelize node react",
    description: [
      "Building a user-friendly frontend and its client database backend.",
      "Setting up and routing to a SQL database to store frontend user input.",
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
      "Helping students struggling with course work during office hours.",
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
    code: "html css javascript jquery adobe cc corel painter",
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
              <p class="position">${exp[i].role}r</p>
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
};

displayExperience();
console.log(displayExperience())