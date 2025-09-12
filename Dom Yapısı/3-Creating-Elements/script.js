
function createListİtem (text) {

    const li = document.createElement("li");

    li.setAttribute("data-id", "5");
    li.className = "item";
    li.id = "item4";
    li.innerText = text;

    document.getElementById("myList").appendChild(li);

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.className = "chbox";

    li.appendChild(checkbox);
    document.getElementById("myList").appendChild(li);
}


// createListİtem ("item 5 ");
// createListİtem ("İtem 6 ");

function createListItem2 (text) {
    const li = document.createElement("li");
    li.className = "item";
    li.innerHTML = `${text} <input type ="checkbox"> <class = "chbox">`;
    document.getElementById("myList").appendChild(li);
}

createListItem2 ("item 5");
createListItem2 ("İtem 6");