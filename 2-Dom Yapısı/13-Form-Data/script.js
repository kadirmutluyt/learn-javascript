let form = document.getElementById("form");

function onSubmit (e) {
    e.preventDefault();

    const selectValue = document.getElementById("select").value;
    const inputValue = document.getElementById("input").value;
    const checkboxValue = document.getElementById("checkbox").checked;

    if ( inputValue === "" || selectValue === "0" ){
        alert("Form Doldurumadı.");
        return;
    }
    
    console.log(selectValue, inputValue, checkboxValue);

}

function onSubmit2 (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const selectValue = formData.get("select");
    const inputValue = formData.get("input");
    const checkboxValue = formData.get("checkbox") === "on";

    if ( inputValue === "" || selectValue === "0" ){
        alert("Form Doldurumadı.");
        return;
    }
    
    console.log(selectValue, inputValue, checkboxValue);

    const entries = formData.entries();
    for(let entry of entries){
        console.log(entry);
    }

}



// form.addEventListener("submit", onSubmit);

 form.addEventListener("submit", onSubmit2);

