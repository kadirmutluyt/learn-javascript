let sonuc;

const parent = document.querySelector(".parent");

sonuc = parent.children;
sonuc = parent.children[0];
sonuc = parent.children [2].innerText;
sonuc = parent.children[0].className;

parent.children[1].style.color = "red";
parent.children[1].innerText = "değiştirilen çocuk";
sonuc = parent.firstElementChild;
sonuc = parent.lastElementChild;

const child = document.querySelector(".child");

sonuc = child;

sonuc = child.nextElementSibling;

sonuc = child.parentElement;
sonuc = child.parentElement.parentElement.parentElement;

sonuc = child.nextElementSibling.nextElementSibling;

sonuc = child.nextElementSibling.nextElementSibling.previousElementSibling;


console.log(sonuc);