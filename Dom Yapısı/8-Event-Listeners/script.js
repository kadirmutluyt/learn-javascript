const mesaj = document.getElementById("mesaj");
const button = document.querySelector("button");
const buttoncontainer = document.querySelector(".buttons");

function mesajgonder (){

    console.log(mesaj.value);
    mesaj.value = "";
}

function mesajgonder2 (){
    console.log("selam");
}

button.addEventListener ("click", mesajgonder);
button.addEventListener ("click", mesajgonder2);

// Bir tıklamayla iki fonksiyon aynı anda çalışabilir. Onu gösterdik burada.

for ( let i = 1; i <= 5; i++) {
    let button = document.createElement("button");

    button.className ="btn"+ i;
    button.innerText = "buton "+ i;
    button.addEventListener("click", mesajgonder);
    buttoncontainer.appendChild(button);
}

document.querySelector(".btn5").removeEventListener("click", mesajgonder);