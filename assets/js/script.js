// data
const apps = [
    {
        name: "Escowin art",
        id: "escowinart",
        repo: "https://github.com/escowin/escowinart",
        liveUrl: "https://escowinart.com/",
        languages: "html css js",
        dialects: "jquery",
        highlight: false,
        collaboration: true
    },
    {
        name: "Bluestrawberry",
        id: "bluestrawberry",
        repo: "https://github.com/escowin/bluestrawberry",
        liveUrl: "https://escowin.github.io/bluestrawberry",
        languages: "css js es6",
        dialects: "react.js",
        highlight: true,
        collaboration: false
    },
    {
        name: "Solar weather",
        id: "solar-weather",
        repo: "https://github.com/escowin/solar-weather-app",
        liveUrl: "https://escowin.github.io/solar-weather-app",
        languages: "html css js api",
        dialects: "jquery moment",
        highlight: false,
        collaboration: false
    },
    {
        name: "team profile generator",
        id: "team-profile-generator",
        repo: "https://github.com/escowin/team-profile-generator",
        liveUrl: "",
        languages: "html css js api",
        dialects: "jquery moment",
        highlight: false,
        collaboration: false
    },
];

// logic
function displayPortfolio(apps) {
    // filter the app array to produce two new arrays (solo work & collaborations) depending on collaboration boolean value
    soloWork = [];
    collaborations = [];
    console.log(apps);
};

function currentYear() {
    let date = new Date().getFullYear();
    const dateEl = document.querySelector("#date");
    dateEl.textContent = date; 
};

// calls
currentYear();
displayPortfolio(apps);