function quiz() {
	console.log(questions)
	console.log(answers)
	console.log(values)
	const number = Math.floor(Math.random() * questions.length);
	console.log(number)
	console.log(getQuestion(number))	
	document.getElementById("question").innerHTML = (getQuestion(number)["question"]);
	console.log(getAnswers(number))
	document.getElementById("A").innerHTML = (getAnswers(number)["A"]);
	document.getElementById("B").innerHTML = (getAnswers(number)["B"]);
	document.getElementById("C").innerHTML = (getAnswers(number)["C"]);
	document.getElementById("D").innerHTML = (getAnswers(number)["D"]);	

	document.getElementById("A").onclick = () => (checkA(number, values));
	document.getElementById("B").onclick = () => (checkB(number, values));
	document.getElementById("C").onclick = () => (checkC(number, values));
	document.getElementById("D").onclick = () => (checkD(number, values));

	document.getElementById("next").onclick = () => (next());

 	const A = document.getElementById("A").innerHTML
 	console.log(A)
 	const B = document.getElementById("B").innerHTML
 	console.log(B)
 	const C = document.getElementById("C").innerHTML
 	console.log(C)
 	const D = document.getElementById("D").innerHTML
 	console.log(D)
}
quiz();

function getQuestion(number) {
	return(questions[number]);
}
function getAnswers(number) {
	return(answers[number]);
}
function checkA(number, values) {
	document.getElementById("A").disabled = true;
	document.getElementById("B").disabled = true;
	document.getElementById("C").disabled = true;
	document.getElementById("D").disabled = true;
	if (values[number].A === true) {
 		document.getElementById("userAnswer").innerHTML = "You're right!";
 		document.getElementById("A").style.borderColor = "green";
 	}
    else {
 		document.getElementById("userAnswer").innerHTML = "You're wrong!";
 		document.getElementById("A").style.borderColor = "red";
 	}
}
function checkB(number, values) {
	document.getElementById("A").disabled = true;
	document.getElementById("B").disabled = true;
	document.getElementById("C").disabled = true;
	document.getElementById("D").disabled = true;
	if (values[number].B === true) {
 		document.getElementById("userAnswer").innerHTML = "You're right!";
 		document.getElementById("B").style.borderColor = "green";
 	}
    else {
 	document.getElementById("userAnswer").innerHTML = "You're wrong!";
 	document.getElementById("B").style.borderColor = "red";
 	}
}
function checkC(number, values) {
	document.getElementById("A").disabled = true;
	document.getElementById("B").disabled = true;
	document.getElementById("C").disabled = true;
	document.getElementById("D").disabled = true;
	if (values[number].C === true) {
 		document.getElementById("userAnswer").innerHTML = "You're right!";
 		document.getElementById("C").style.borderColor = "green";
 	}
    else {
 		document.getElementById("userAnswer").innerHTML = "You're wrong!";
 		document.getElementById("C").style.borderColor = "red";
 	}	
}
function checkD(number, values) {
	document.getElementById("A").disabled = true;
	document.getElementById("B").disabled = true;
	document.getElementById("C").disabled = true;
	document.getElementById("D").disabled = true;
	if (values[number].D === true) {
 		document.getElementById("userAnswer").innerHTML = "You're right!";
 		document.getElementById("D").style.borderColor = "green";
 	}
    else {
 		document.getElementById("userAnswer").innerHTML = "You're wrong!";
 		document.getElementById("D").style.borderColor = "red";
 	}	
} 	
 function next() {
 	document.getElementById("A").disabled = false;
	document.getElementById("B").disabled = false;
	document.getElementById("C").disabled = false;
	document.getElementById("D").disabled = false;
 	document.getElementById("A").style.borderColor = "";
 	document.getElementById("B").style.borderColor = "";
 	document.getElementById("C").style.borderColor = "";
 	document.getElementById("D").style.borderColor = "";
 	document.getElementById("userAnswer").innerHTML = "";
	quiz();
 } 	
