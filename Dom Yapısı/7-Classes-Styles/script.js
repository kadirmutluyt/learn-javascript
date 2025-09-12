
const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const items = document.querySelectorAll(".items li");

function fn (){
    console.log(h1.className); // string olarak tüm classları yazdırır.
    console.log(h1.classList); //  Obje tipinde classlarını yazdırır.

//    h1.className = "f22"; // tüm class stringini siler, yerine yazılan stringi koyar.
//    h1.classList.add("f22"); // class ekler.
//    h1.classList.remove("title"); //class'ı siler.
//    h1.classList.toggle("red"); // Class yoksa ekler, varsa siler. 
    h1.classList.replace("f20", "f22"); //class'ı güncellemeyi sağlar, 1.değer silinecek olan, ikinci değer eklenecek olan class'tır.

    for (let i =0; i < items.length; i++ ) {
//        items[i].classList.add("active");

        items[i].style.color = "red";
        items[i].style.fontSize = "20px";
    }
 

}





button.addEventListener("click", fn);