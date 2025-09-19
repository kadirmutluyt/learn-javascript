function clearHeader (){
    const h1 = document.querySelector("h1");
    h1.remove();
} 

// clearHeader();

function removeItem1(){
    const ul = document.querySelector("ul");
    const firstItem = document.querySelector("li:first-child");

    ul.removeChild(firstItem);
}

//removeItem1();

function removeItem2 (number){
    const ul = document.querySelector("ul");
    const item = document.querySelector(`li:nth-child(${number})`);

    ul.removeChild(item);
}

// removeItem2(1);
// removeItem2(1);


function removeAll (){
    const ul = document.querySelector("ul");
//    ul.innerHTML = "";  // İçerik temizlenir, element silinmez.
    while(ul.firstChild){
        // ul.removeChild(ul.firstChild);
        ul.firstChild.remove();
    }


}

removeAll();



