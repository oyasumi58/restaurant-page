const contentDiv = document.querySelector("#content");
console.log(contentDiv);

const buttons = document.querySelectorAll(".tab");
console.log(buttons);
for (let button of buttons) {
    console.log(button.getAttribute("id"));
    if (button.getAttribute("id") === "menu") {
        console.log(button);
        button.classList.add("selected");
    }
}

const menuTitle1 =  document.createElement("div");
menuTitle1.setAttribute("id","menuTitle1")
menuTitle1.textContent = "Our Menu";
contentDiv.appendChild(menuTitle1);

const flexCon1 = document.createElement("div");
flexCon1.setAttribute("class","flexCon");
contentDiv.appendChild(flexCon1);
    const holder1 = document.createElement("div");
    holder1.setAttribute("class","holder");
    flexCon1.appendChild(holder1);

const menuTitle2 =  document.createElement("div");
menuTitle2.setAttribute("class","menuTitle")
menuTitle2.textContent = "Our Mains";
holder1.appendChild(menuTitle2);

const gridCon = document.createElement("div");
gridCon.setAttribute("id","gridCon");
contentDiv.appendChild(gridCon);
console.log(gridCon);


class menuItem {
    constructor(title,desc) {
        this.title = title;
        this.desc = desc;
        
        this.item = document.createElement("div");
        this.item.setAttribute("class","mItem")
        this.item.innerHTML = `${this.title} <br><br> ${this.desc}`;
        // console.log(this.item);
    }
    
    apd(parent) {
        parent.appendChild(this.item);
    } 

    appendEmoji(emoji) {
        let emoteCon = document.createElement("div");
        emoteCon.setAttribute("class","emote");
        emoteCon.textContent = emoji;
        this.item.appendChild(emoteCon);
    }
}
const menuItem1 = new menuItem("Breakfast Set $10","A full course meal of bacon, scrambled eggs and pancakes!");
menuItem1.apd(gridCon);
menuItem1.appendEmoji("🥪");

const menuItem2 = new menuItem("Ham and Cheese Sandwich $6","A delicious combination of flavor and texture!");
menuItem2.apd(gridCon);
menuItem2.appendEmoji("🥪");

const menuItem3 = new menuItem("Egg Sandwich $5","A rich and nutritious sandwich stuffed with fluffy eggs!");
menuItem3.apd(gridCon);
menuItem3.appendEmoji("🥪");

const menuItem8 = new menuItem("Caesar Salad $5","A slightly healthy choice!");
menuItem8.apd(gridCon);
menuItem8.appendEmoji("🥗");

const flexCon2 = document.createElement("div");
flexCon2.setAttribute("class","flexCon");
contentDiv.appendChild(flexCon2);
    const holder2 = document.createElement("div");
    holder2.setAttribute("class","holder");
    flexCon2.appendChild(holder2);
const menuTitle3 =  document.createElement("div");
menuTitle3.setAttribute("class","menuTitle")
menuTitle3.textContent = "Our Desserts";
holder2.appendChild(menuTitle3);

const gridCon1 = document.createElement("div");
gridCon1.setAttribute("id","gridCon");
contentDiv.appendChild(gridCon1);


const menuItem4 = new menuItem("Strawberry Cake $4","A messy and scrumptious cake, go wild!");
menuItem4.apd(gridCon1);
menuItem4.appendEmoji("🍰");

const menuItem5 = new menuItem("Cupcake $2","An explosion of sweet and fruitiness in a small bite!");
menuItem5.apd(gridCon1);
menuItem5.appendEmoji("🧁");

//try keeping code dry next time
const flexCon3 = document.createElement("div");
flexCon3.setAttribute("class","flexCon");
contentDiv.appendChild(flexCon3);
    const holder3 = document.createElement("div");
    holder3.setAttribute("class","holder");
    flexCon3.appendChild(holder3);
const menuTitle4 =  document.createElement("div");
menuTitle4.setAttribute("class","menuTitle")
menuTitle4.textContent = "Our Drinks";
holder3.appendChild(menuTitle4);

const gridCon2 = document.createElement("div");
gridCon2.setAttribute("id","gridCon");
contentDiv.appendChild(gridCon2);

const menuItem6 = new menuItem("Orange Juice $2","Freshly squeezed, made to serve!");
menuItem6.apd(gridCon2);
menuItem6.appendEmoji("🍹");

const menuItem7 = new menuItem("Coffee $3","Our signature!");
menuItem7.apd(gridCon2);
menuItem7.appendEmoji("☕");
