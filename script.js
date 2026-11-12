//your JS code here. If required.
let counter= document.querySelector("#counter");
let incrementBtn= document.querySelector("#incrementBtn");

function increment() {
    counter.textContent= parseInt(counter.textContent) + 1;
}

incrementBtn.addEventListener("click", increment)