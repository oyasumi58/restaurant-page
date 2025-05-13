import './style.css';
// import './home.js';
// import './menu.js';
// import './contact.js';
import catImg from "./imptStuff/cat.png";
import pawImg from './imptStuff/paw.png';
import catComImg from "./imptStuff/catCom.png";
import jamesImg from "./imptStuff/james.svg"
//tab switching logic:
import { displayMenu } from './menu';
import { displayHome } from './home';
import { displayContact } from './contact';

let selectedTab = "home";

if (selectedTab === "menu") {
    displayMenu();
} else if (selectedTab === "home") {
    displayHome(catImg,catComImg);
} else if (selectedTab === "contact") {
    displayContact(jamesImg,catImg);
}












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
