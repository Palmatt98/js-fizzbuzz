const rowElement = document.querySelector(".row"); //object |null
console.log(rowElement);

//faccio 100 iterazioni
// let i = 1; --> dichiarazione e inizializzaizone della variabile i
// questa parte viene letta ed eseguita solo alla prima iterazione
// i <= 100; --> condizione che se é vera esegue l'iterazione, se falsa, esce dal for
// i++; --> i é un contatore che viene incrementato di 1 alla fine di ogni iterazione
for (let i = 1; i <= 100; i++) {
	console.log(i);
	let bgClass = "";
	let boxValue = i;

	if (i % 3 === 0 && i % 5 === 0) {
		// se il resto é 0 il numero i é divisibile per 3 o 5
		boxValue = "fizzbuzz";
		bgClass = "fizzbuzz";
		console.log("fizzbuzz");
	} else if (i % 3 === 0) {
		boxValue = "fizz";
		bgClass = "fizz";
		console.log("fizz");
	} else if (i % 5 === 0) {
		boxValue = "buzz";
		bgClass = "buzz";
		console.log("buzz");
	}

	// let boxElem = `<div class="box ${bgClass}">${boxValue}</div>`;
	// rowElement.innerHTML = rowElement.innerHTML + boxElem;
	// rowElement.innerHTML += boxElem; versione abbreviata!

	
	const boxElem = document.createElement("div"); //ho creato un div e l'ho salvato nella variabile boxElem
	boxElem.className = `box ${bgClass}`;
	boxElem.append(boxValue);

	rowElement.append(boxElem);
}

