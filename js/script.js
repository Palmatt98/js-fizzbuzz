const rowElement = document.querySelector(".row"); //object |null
console.log(rowElement);
for (let i = 1; i <= 100; i++) {
	console.log(i);
	let bgClass;
	if (i % 2 === 0) {
		bgClass = "pari";
		console.log(bgClass);
	} else {
		bgClass = "dispari";
		console.log(bgClass);
	}
	if (i % 3 === 0 && i % 5 === 0) {
		bgClass = "fizzbuzz";
		console.log("fizzbuzz");
	} else if (i % 3 === 0) {
		bgClass = "fizz";
		console.log("fizz");
	} else if (i % 5 === 0) {
		bgClass = "buzz"
		console.log("buzz");
	}

	let boxElem = `<div class="box ${bgClass}">${i}</div> `;
	rowElement.innerHTML += boxElem;
}
