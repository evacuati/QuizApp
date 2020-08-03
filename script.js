let listOfQuestions = createList()
let listOfIndexes = []
let number = listOfQuestions[0]
let maxPoints = 10
let myPoints = 0
let maxQuestions = 10
let myQuestions = 1

function shuffle(listOfIndexes) {
	for (let i = listOfIndexes.length - 1; i > 0; i--) {
    	let j = Math.floor(Math.random() * (i + 1));
    	[listOfIndexes[i], listOfIndexes[j]] = [listOfIndexes[j], listOfIndexes[i]];
	}
}

function createList() {	
	let listOfIndexes = []
	let listOfQuestions = []
	for (i=0; i < questions.length; i++) {
		listOfIndexes.push(i)
	}	
	shuffle(listOfIndexes);
	for(i=0; i<10; i++) {
		listOfQuestions.push(listOfIndexes[i])
	}
	return listOfQuestions;
}	

function getIndex(){
	let number = listOfQuestions[0]
	listOfQuestions.shift()
}	

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
 		myPoints++
 		document.getElementById("score").innerHTML = myPoints + "/" + maxPoints
 	}
    else {
 		document.getElementById("userAnswer").innerHTML = "You're wrong!";
 		document.getElementById("A").style.borderColor = "red";
 		if (values[number].B === true) {
 			document.getElementById("A").style.borderColor = "green";
		}	
		else if (values[number].C === true) {
 			document.getElementById("C").style.borderColor = "green";
		}
		else if (values[number].D === true) {
 			document.getElementById("D").style.borderColor = "green";
		}
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
 		myPoints++
 		document.getElementById("score").innerHTML = myPoints + "/" + maxPoints
 	}
    else {
	 	document.getElementById("userAnswer").innerHTML = "You're wrong!";
	 	document.getElementById("B").style.borderColor = "red";
	 	if (values[number].A === true) {
	 		document.getElementById("A").style.borderColor = "green";
		}	
		else if (values[number].C === true) {
	 		document.getElementById("C").style.borderColor = "green";
		}
		else if (values[number].D === true) {
	 		document.getElementById("D").style.borderColor = "green";
		}
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
 		myPoints++
 		document.getElementById("score").innerHTML = myPoints + "/" + maxPoints
 	}
    else {
 		document.getElementById("userAnswer").innerHTML = "You're wrong!";
 		document.getElementById("C").style.borderColor = "red";
 		if (values[number].A === true) {
 				document.getElementById("A").style.borderColor = "green";
		}	
		else if (values[number].B === true) {
	 			document.getElementById("B").style.borderColor = "green";
		}
		else if (values[number].D === true) {
	 			document.getElementById("D").style.borderColor = "green";
		}
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
 		myPoints++
 		document.getElementById("score").innerHTML = myPoints + "/" + maxPoints
 	}
    else {
 		document.getElementById("userAnswer").innerHTML = "You're wrong!";
 		document.getElementById("D").style.borderColor = "red";
 		 if (values[number].A === true) {
 			document.getElementById("A").style.borderColor = "green";
		}	
		else if (values[number].B === true) {
	 		document.getElementById("B").style.borderColor = "green";
		}
		else if (values[number].C === true) {
	 			document.getElementById("C").style.borderColor = "green";
		}
 	}	
}

createList();
quiz();
function quiz() {
	getIndex();
	console.log(questions)
	console.log(answers)
	console.log(values)
	console.log(listOfIndexes)
	console.log(number)
	console.log(getQuestion(number))	

	document.getElementById("question").innerHTML = (getQuestion(number)["question"]);

	document.getElementById("A").innerHTML = (getAnswers(number)["A"]);
	document.getElementById("B").innerHTML = (getAnswers(number)["B"]);
	document.getElementById("C").innerHTML = (getAnswers(number)["C"]);
	document.getElementById("D").innerHTML = (getAnswers(number)["D"]);	
	console.log(getAnswers(number))

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
} //end of quiz function	
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
 	myQuestions++
 	document.getElementById("whereAmI").innerHTML = myQuestions + "/" + maxQuestions;
 	getIndex();
	quiz();
 } 