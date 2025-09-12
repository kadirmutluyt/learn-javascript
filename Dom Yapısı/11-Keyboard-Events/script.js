// e = event demek, ikisi de kullanılıyor.

const input = document.getElementById("text");
const h2 = document.querySelector("h2");

function onKeyDown (e){
    if(e.key === "Backspace" ){
        h2.textContent = h2.textContent.slice(0,-1);
    }        
    else if (e.key.length === 1  )  {
        h2.textContent += e.key;
    }   

    else if (e.key === "Enter" && h2.textContent.trim() !== "") {

        let body = document.querySelector("body");        
        let newElement = document.createElement("p");
        newElement.textContent = h2.textContent;
        body.appendChild(newElement);

        h2.textContent = "";
        input.value = "";
        alert ("Yazı Eklendi!")
    }

    if (e.ctrlKey && e.key === "a") {
        alert("Ctrl + A yapıldı!");
    }

    if (e.repeat){
        alert("Tuslara uzun basma gardas!");
    }


}
input.addEventListener("keydown", onKeyDown);

function onKeyPress (){
    console.log("onKeyPress")
}

function onKeyUp (){
    console.log("onKeyUp")
}

// input.addEventListener("keyup", onKeyUp);
// input.addEventListener("keypress", onKeyPress);




