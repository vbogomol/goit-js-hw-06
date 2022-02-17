const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener("input", onInputChange);

function onInputChange(event) {

    if (event.currentTarget.value === "") {
        nameOutputRef.textContent = "Anonymous"
    }
    nameOutputRef.textContent = event.currentTarget.value;
}

