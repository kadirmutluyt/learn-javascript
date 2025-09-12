const input = document.querySelector("#input");
const title = document.getElementById ("title");

const select = document.getElementById("select");
const checkbox = document.querySelector("#checkbox");

function onInput (e){
   title.textContent = e.target.value;  
}

function onFocus (e){
   // input.classList = "active";

    input.style.outlineStyle = "solid";
    input.style.outlineColor = "red";
    input.style.outlineWidth = "5px";
}

function onBlur (e) {
   // input.classList.remove("active");

   input.style.outlineStyle = "none";
}


function onChange (e){
    console.log(e.target.checked);
}

function onSelect (e){
    console.log(e.target.value  );
}

input.addEventListener("input", onInput);
input.addEventListener("focus", onFocus);
input.addEventListener("blur", onBlur);

checkbox.addEventListener("change", onChange);
select.addEventListener("change", onSelect);
