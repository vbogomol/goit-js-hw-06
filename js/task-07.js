const textRef = document.querySelector("#text");
const sizeControlRef = document.querySelector("#font-size-control");

sizeControlRef.addEventListener('change', onSizeChange);
    
    function onSizeChange () {
    textRef.style.fontSize = sizeControlRef.value + "px";
};