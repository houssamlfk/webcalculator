console.log("Hello world!");

var plus = document.getElementById("add");
var minus = document.getElementById("substract");
var times = document.getElementById("multiply");
var divide = document.getElementById("divide");
var erase = document.getElementById("erasebtn");

var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var zero = document.getElementById("0");

var text = document.getElementById("entry");

plus.addEventListener("click", () => { text.value += "+"; });
minus.addEventListener("click", () => { text.value += "-"; });
times.addEventListener("click", () => { text.value += "x"; });
divide.addEventListener("click", () => { text.value += "/"; });
erase.addEventListener("click", () => { text.value = ""; });

one.addEventListener("click", () => { text.value += "1" });
two.addEventListener("click", () => { text.value += "2" });
three.addEventListener("click", () => { text.value += "3" });
four.addEventListener("click", () => { text.value += "4" });
five.addEventListener("click", () => { text.value += "5" });
six.addEventListener("click", () => { text.value += "6" });
seven.addEventListener("click", () => { text.value += "7" });
eight.addEventListener("click", () => { text.value += "8" });
nine.addEventListener("click", () => { text.value += "9" });
zero.addEventListener("click", () => { text.value += "0" });

function Evaluate() {
	let idx = 0;
	for (let i = 0; i < text.value.length; i++) {
		var symbols = new Set(['+', '-', 'x', '/']);
		if (symbols.has(text.value[i])) {
			idx = i;
		}
	}
	let operation = text.value[idx];
	let operand1 = parseInt(text.value.substring(0, idx), 10);
	let operand2 = parseInt(text.value.substring(idx + 1, text.value.length), 10);
	switch (operation) {
		case '+':
			text.value = String(operand1 + operand2);
			break;
		case '-':
			text.value = String(operand1 - operand2);
			break;
		case 'x':
			text.value = String(operand1 * operand2);
			break;
		case '/':
			if (operand2 != 0) {
				text.value = String(operand1 / operand2);
			}
			break;
	}
}

var eval = document.getElementById("evalbtn");
eval.addEventListener("click", Evaluate);
