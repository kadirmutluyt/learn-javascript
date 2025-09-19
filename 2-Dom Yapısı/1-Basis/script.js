let sonuc;
/*
// 2 Çeşit tek element seçme aracımz var. getElementById ve querySelector. 


// 1 getElementById() Sadece ıd'ye göre seçim yapar.

document.getElementById("title").style.color = "red";  
document.getElementById("title").style.fontSize = "60px";
document.getElementById("newitem").style.fontSize = "30px";

sonuc = document.getElementById("title").className;
document.getElementById("title").classList.add("small");
document.getElementById("title").classList.remove("app-title");
sonuc = document.getElementById("title").classList; 

document.getElementById("title").innerText = "Baslik";
document.getElementById("title").innerHTML = "<h2>Baslik</h2>"; // Html içinde h, p vb. etiketlerini kullanabilmemizi sağlar.


// 2 querySelector() ıd, class ve elementname seçebilir.

sonuc = document.querySelector("#title");
sonuc = document.querySelector(".small");
sonuc = document.querySelector("h1"); // h1 elementlerin arasından ilk element gelir, bütün h1 için çoklu seçim yapmam gerek. 
sonuc = document.querySelector("input[type = 'submit']"); // [type = 'submit'] ifadesi ile input elementlerinden type = submit olanı al demiş olduk.
sonuc = document.querySelector("li:nth-child(3)");

const parentElement = document.querySelector("ul");

const secondElement = parentElement.querySelector("li:nth-child(2)");

secondElement.style.color = "blue";

console.log(parentElement);


// Çoklu seçim için 3 yöntem var. getElementsByClassName(), getElementsByTagName() ve querySelectorAll().  querySelectorAll() ile hepsine ulaşabiliyoruz.

sonuc = document.getElementsByClassName("item")[0];
sonuc = document.getElementsByClassName("item")[1];
sonuc = document.getElementsByClassName("item")[2];

const items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++ ) {
    console.log(items[i]);
}


sonuc = document.getElementsByTagName("h1");

*/

const items = document.querySelectorAll("#group2 .item");

for (let item of items) {
    item.style.color = "red";
    item.style.fontSize = "40px";
    item.innerText = "Eleman";
}




console.log(sonuc);
