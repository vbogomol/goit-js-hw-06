const textRef = document.querySelector("#text");
const sizeControlRef = document.querySelector("#font-size-control");
textRef.style.fontSize = sizeControlRef.value + "px";

sizeControlRef.addEventListener('input', onSizeChange);
    
    function onSizeChange () {
    textRef.style.fontSize = sizeControlRef.value + "px";
};
