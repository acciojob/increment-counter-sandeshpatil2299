//your JS code here. If required.
let counter= document.querySelector("#counter");
let incrementBtn= document.querySelector("#incrementBtn");

function increment() {
	let incrementValue= parseInt(counter.textContent);
    counter.textContent= incrementValue+1;
	alert(incrementValue + 1);
}

incrementBtn.addEventListener("click", increment)