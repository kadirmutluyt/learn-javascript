const divs = document.querySelectorAll("div");

function onClick (e){
//    console.log(e);
//    console.log(e.button);
//    console.log(e.cancelable);

//    console.log(e.timeStamp);

//    console.log(e.clientX + " X");  // Client kullanımı Tarayıcı penceresine göre X ve Y kordinatını verir.
//    console.log(e.clientY + " Y");

  console.log(e.offsetX);  // offset kullanımı içeriğin kendi içindeki X ve Y kordinatlarını verir.
  console.log(e.offsetY);

}

divs[0].addEventListener("click", onClick);
divs[1].addEventListener("click", onClick);
divs[2].addEventListener("click", onClick);

document.querySelector("a").addEventListener("click", function(e){
    e.preventDefault;
    console.log("siteye tiklandı");
})