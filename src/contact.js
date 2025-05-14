import catImg from "./imptStuff/cat.png";
import jamesImg from "./imptStuff/james.svg"

function displayContact() {
const contentDiv = document.querySelector("#content");
//console.log(contentDiv);

const buttons = document.querySelectorAll(".tab");
//console.log(buttons);
for (let button of buttons) {
    //console.log(button.getAttribute("id"));
    if (button.getAttribute("id") === "contact") {
        //console.log(button);
        button.classList.add("selected");
    }
}

const flexConTitle = document.createElement("div");
flexConTitle.setAttribute("class","flexCon");
contentDiv.appendChild(flexConTitle);
    const holderTitle = document.createElement("div");
    holderTitle.setAttribute("class","holder");
    flexConTitle.appendChild(holderTitle);
        const contactTitle = document.createElement("div");
        contactTitle.setAttribute("id","contactTitle");
        contactTitle.textContent = "Our Contacts";
        holderTitle.appendChild(contactTitle);
        
const flexConJames = document.createElement("div");
flexConJames.setAttribute("class","flexCon");
contentDiv.appendChild(flexConJames);
    const holderJames = document.createElement("div");
    holderJames.setAttribute("class","holder");
    flexConJames.appendChild(holderJames);
        const contactJames = document.createElement("div");
        contactJames.setAttribute("id","contact1");
        contactJames.innerHTML = "James(Owner) <br> No: 123-456-7890 <br> Email: james@cattiescafe.com";
        holderJames.appendChild(contactJames);
        // import jamesImg from "./imptStuff/james.svg"
        // let jamesImg = jamesIMG;
        const james = document.createElement("img");
        james.src = jamesImg;
        james.alt = "james";
        holderJames.appendChild(james);
        const flexConMilly = document.createElement("div");
flexConMilly.setAttribute("class","flexCon");
contentDiv.appendChild(flexConMilly);
    const holderMilly = document.createElement("div");
    holderMilly.setAttribute("class","holder");
    flexConMilly.appendChild(holderMilly);
        const contactMilly = document.createElement("div");
        contactMilly.setAttribute("id","contact1");
        contactMilly.innerHTML = "James(Owner) <br> No: 123-456-7890 <br> Email: james@cattiescafe.com";
        holderMilly.appendChild(contactMilly);
        // import catImg from "./imptStuff/cat.png"
        // let catImg = catIMG;
        const cat = document.createElement("img");
        cat.src = catImg;
        cat.alt = "cat";
        holderMilly.appendChild(cat);
}

export {displayContact};