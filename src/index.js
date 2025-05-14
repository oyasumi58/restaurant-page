import './style.css';
// import './home.js';
// import './menu.js';
// import './contact.js';
// import catImg from "./imptStuff/cat.png";
// import catComImg from "./imptStuff/catCom.png";
// import jamesImg from "./imptStuff/james.svg"
import pawImg from './imptStuff/paw.png';

//tab switching logic:
import { displayMenu } from './menu';
import { displayHome } from './home';
import { displayContact } from './contact';

displayHome();

let selectedTab = "home";

const hb = document.querySelector("#home");
const mb = document.querySelector("#menu");
const cb = document.querySelector("#contact");

function appendEvents() {
    hb.addEventListener("click", () => {
        if (selectedTab === "home") {
            return;
        }
        displayTab("home");
    })

    mb.addEventListener("click", () => {
        if (selectedTab === "menu") {
            return;
        }
        displayTab("menu");
    })

    cb.addEventListener("click", () => {
        if (selectedTab === "contact") {
            return;
        }
        displayTab("contact");
    })
}
appendEvents();

function displayTab(tab) {
    //remove display
    const content = document.querySelector("#content");
    while (content.lastChild) {
        content.removeChild(content.lastChild);
    }
    //rid button sel functionality:
    let prevSelButton = document.querySelector(".selected");
    //console.log(prevSelButton);
    prevSelButton.removeEventListener("click",displayTab);
    prevSelButton.classList.remove("selected");
    //tab switch logic
    if (tab === "menu") {
        selectedTab = "menu";
        displayMenu();
    } else if (tab === "home") {
            selectedTab = "home";
        displayHome();
        
    } else if (tab === "contact") {
            selectedTab = "contact";
        displayContact();
    }
}


displayTab("home");

//paw stuff
const paw1 = document.createElement("img");
paw1.setAttribute("id","paw-1");
paw1.src = pawImg;
paw1.alt = "cat paw";

const paw2 = document.createElement("img");
paw2.setAttribute("id","paw-2");
paw2.src = pawImg;
paw2.alt = "cat paw";

const paw3 = document.createElement("img");
paw3.setAttribute("id","paw-3");
paw3.src = pawImg;
paw3.alt = "cat paw";

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(paw1);
contentDiv.appendChild(paw2);
contentDiv.appendChild(paw3);
