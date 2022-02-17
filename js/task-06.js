const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    this.classList.add("invalid");

    if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
        this.classList.add("valid");
        this.classList.remove("invalid");
    }
}