function displayHome(catIMG,catComIMG) {
const contentDiv = document.querySelector("#content");
console.log(contentDiv);

const buttons = document.querySelectorAll(".tab");
console.log(buttons);
for (let button of buttons) {
    console.log(button.getAttribute("id"));
    if (button.getAttribute("id") === "home") {
        console.log(button);
        button.classList.add("selected");
    }
}

//flexcon prevents the holder from flaring its style all to the left and right
const flexConTitle = document.createElement("div");
flexConTitle.setAttribute("class","flexCon");
contentDiv.appendChild(flexConTitle);
    const holderTitle = document.createElement("div");
    holderTitle.setAttribute("class","holder");
    flexConTitle.appendChild(holderTitle);
        const resTitle = document.createElement("div");
        resTitle.setAttribute("id","resTitle");
        resTitle.textContent = "Cattie's Cafe";
        holderTitle.appendChild(resTitle);
        // import catComImg from "./imptStuff/catCom.png";
        let catComImg = catComIMG;
        const catCom = document.createElement("img");
        catCom.setAttribute("id","catCom");
        catCom.src = catComImg;
        catCom.alt = "cat with computer";
        holderTitle.appendChild(catCom);

const flexConAppraisal = document.createElement("div");
flexConAppraisal.setAttribute("class","flexCon");
contentDiv.appendChild(flexConAppraisal);
    const holderAppraisal = document.createElement("div");
    holderAppraisal.setAttribute("class","holder");
    flexConAppraisal.appendChild(holderAppraisal);
        const appraisal = document.createElement("div");
        appraisal.setAttribute("id","appraisal");
        appraisal.textContent = "Cattie's cafe has lots of good food, drinks and cats to play with!";
        holderAppraisal.appendChild(appraisal);

const flexConInfo = document.createElement("div");
flexConInfo.setAttribute("class","flexCon");
contentDiv.appendChild(flexConInfo);
    const holderInfo = document.createElement("div");
    holderInfo.setAttribute("class","holder");
    flexConInfo.appendChild(holderInfo);
    // import catImg from "./imptStuff/cat.png";
        let catImg = catIMG;
        const cat = document.createElement("img");
        cat.setAttribute("id","cat");
        cat.src = catImg;
        cat.alt = "cat";
        holderInfo.appendChild(cat);    
        const info = document.createElement("div");
        info.setAttribute("id","info");
        info.innerHTML = "Hours: 8am - 6pm EVERYDAY <br><br> Location: Coming to places near you!";
        holderInfo.appendChild(info);
        
}

export {displayHome};