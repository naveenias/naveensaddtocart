let containerEl = document.getElementById("container");
containerEl.classList.add("container", "row")

let headingEl = document.createElement("h1");
headingEl.textContent = "Add To Cart";
containerEl.appendChild(headingEl);
containerEl.classList.add("container")

let inputEl = document.createElement("input");
inputEl.type = "Text";
inputEl.classList.add("button");
inputEl.id = "cartItemTextInput";
containerEl.appendChild(inputEl);

let buttonEl = document.createElement("Button");
buttonEl.classList.add("btn", "btn-primary", "button");
buttonEl.textContent = "Add"
buttonEl.id = "addBtn";
containerEl.appendChild(buttonEl);



let ulEl = document.createElement("ul");
ulEl.textContent = "My cart iteams";
containerEl.appendChild(ulEl);

function addclick() {
    let liEl = document.createElement("li");
    liEl.textContent = inputEl.value;
    ulEl.appendChild(liEl);
}

buttonEl.onclick = function() {
    addclick();
    inputEl.value = " ";
}