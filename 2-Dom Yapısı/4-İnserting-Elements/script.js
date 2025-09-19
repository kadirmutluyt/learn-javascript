
/*
    beforeBegin
     <div>
            afterbegin
            beforeend
     <div>
    afterend
*/
// belli bir referansa göre elementlerimizi yerleştirebiliyoruz.

// 1- insertAdJacentElement

function insertElement () {
    const ul = document.querySelector("#myList");
    const h1 = document.createElement("h1");

    h1.textContent = "insert ad jacent element";

    ul.insertAdjacentElement("beforeend", h1);
} 

insertElement();

// 2- insertAdJacentText

function insertText () {
    const item = document.querySelector("li:first-child");
    item.insertAdjacentText("beforeend", "İnsert Ad Jacent Text");

}

insertText();

// 3- insertAdJacentHTML

function insertHtml (){

        const item = document.querySelector("li:nth-child(2)");
        item.insertAdjacentHTML("beforeend", "<h2>İnsert Ad Jacent Html</h2>");
}

insertHtml();

// 4- insertBefore

function insertBefore (){
    const ul = document.querySelector("#myList");
    const li = document.createElement("li");

    li.textContent = "İnsert Before";

    const secondLi = document.querySelector("li:nth-child(2)");
    
    ul.insertBefore(li, secondLi); // parent.eklenecekEleman(yeniEleman, referansEleman); hemen önüne ekler

}

insertBefore();