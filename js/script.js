const rowElement = document.querySelector(".row"); //object |null
console.log(rowElement);
for (let i = 1; i <= 100; i++) {
	console.log(i);
	let bgClass;
	if (i % 2 === 0) {
		bgClass = "even";
		console.log(bgClass);
	} else {
		bgClass = "odd";
		console.log(bgClass);
	}
	

	let boxElem = `<div class="box ${bgClass}">${i}</div> `;
	rowElement.innerHTML += boxElem;
}
