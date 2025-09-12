const box = document.querySelector(".box");



function mousemovefunction (){
    console.log("mousemovefunction");
}

function mousedownfunction (){
    console.log("mousemovefunction");
}

function contextmenufunction () {
    console.log("contextmenufunction")
}
// box.addEventListener("mousemove", mousemovefunction);

// box.addEventListener("mousedown", mousedownfunction);

box.addEventListener("contextmenu", contextmenufunction);