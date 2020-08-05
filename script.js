function game() {
	listOfQuestions = createList();
	listOfIndexes = []
	number = listOfQuestions[0]
	maxPoints = 10
	myPoints = 0
	maxQuestions = 10
	myQuestions = 1
	createList();
	getQuestion();
	getAnswers();
	document.getElementById("whereAmI").innerHTML = myQuestions + "/" + maxQuestions;
	document.getElementById("score").innerHTML = myPoints + "/" + maxPoints
	document.getElementById("A").onclick = () => checkA();
	document.getElementById("B").onclick = () => checkB();
	document.getElementById("C").onclick = () => checkC();
	document.getElementById("D").onclick = () => checkD();
	document.getElementById("next").onclick = () => next();
	quiz();
}

let listOfQuestions = createList();
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
 		document.getElementById("A").style.outlineColor = "green";
 		myPoints++
 		document.getElementById("score").innerHTML = myPoints + "/" + maxPoints
 	}
    else {
 		document.getElementById("userAnswer").innerHTML = "You're wrong!";
 		document.getElementById("A").style.outlineColor = "red";
 		if (values[number].B === true) {
 			document.getElementById("B").style.outlineColor = "green";
		}	
		else if (values[number].C === true) {
 			document.getElementById("C").style.outlineColor = "green";
		}
		else if (values[number].D === true) {
 			document.getElementById("D").style.outlineColor = "green";
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
 		document.getElementById("B").style.outlineColor = "green";
 		myPoints++
 		document.getElementById("score").innerHTML = myPoints + "/" + maxPoints
 	}
    else {
	 	document.getElementById("userAnswer").innerHTML = "You're wrong!";
	 	document.getElementById("B").style.outlineColor = "red";
	 	if (values[number].A === true) {
	 		document.getElementById("A").style.outlineColor = "green";
		}	
		else if (values[number].C === true) {
	 		document.getElementById("C").style.outlineColor = "green";
		}
		else if (values[number].D === true) {
	 		document.getElementById("D").style.outlineColor = "green";
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
 		document.getElementById("C").style.outlineColor = "green";
 		myPoints++
 		document.getElementById("score").innerHTML = myPoints + "/" + maxPoints
 	}
    else {
 		document.getElementById("userAnswer").innerHTML = "You're wrong!";
 		document.getElementById("C").style.outlineColor = "red";
 		if (values[number].A === true) {
 				document.getElementById("A").style.outlineColor = "green";
		}	
		else if (values[number].B === true) {
	 			document.getElementById("B").style.outlineColor = "green";
		}
		else if (values[number].D === true) {
	 			document.getElementById("D").style.outlineColor = "green";
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
 		document.getElementById("D").style.outlineColor = "green";
 		myPoints++
 		document.getElementById("score").innerHTML = myPoints + "/" + maxPoints
 	}
    else {
 		document.getElementById("userAnswer").innerHTML = "You're wrong!";
 		document.getElementById("D").style.outlineColor = "red";
 		 if (values[number].A === true) {
 			document.getElementById("A").style.outlineColor = "green";
		}	
		else if (values[number].B === true) {
	 		document.getElementById("B").style.outlineColor = "green";
		}
		else if (values[number].C === true) {
	 			document.getElementById("C").style.outlineColor = "green";
		}
 	}	
}
document.getElementById("start").onclick = () => createList();
document.getElementById("start").onclick = () => shuffle(listOfIndexes);
document.getElementById("start").onclick = () => (quiz());

function quiz() {
	document.getElementById("end-container").style.display = "none";
	document.getElementById("quiz").style.display = "";
	document.getElementById("start").style.display = "none";
	document.getElementById("start-container").style.display = "none";
	let number = listOfQuestions.shift();
	getIndex();

	document.getElementById("question").innerHTML = (getQuestion(number)["question"]);

	document.getElementById("A").innerHTML = (getAnswers(number)["A"]);
	document.getElementById("B").innerHTML = (getAnswers(number)["B"]);
	document.getElementById("C").innerHTML = (getAnswers(number)["C"]);
	document.getElementById("D").innerHTML = (getAnswers(number)["D"]);	

	document.getElementById("A").onclick = () => (checkA(number, values));
	document.getElementById("B").onclick = () => (checkB(number, values));
	document.getElementById("C").onclick = () => (checkC(number, values));
	document.getElementById("D").onclick = () => (checkD(number, values));

	document.getElementById("next").onclick = () => (next());
} 
//end of quiz function

function next() {
 	if (myQuestions < 10) {
 		document.getElementById("A").disabled = false;
		document.getElementById("B").disabled = false;
		document.getElementById("C").disabled = false;
		document.getElementById("D").disabled = false;
	 	document.getElementById("A").style.outlineColor = "";
	 	document.getElementById("B").style.outlineColor = "";
	 	document.getElementById("C").style.outlineColor = "";
	 	document.getElementById("D").style.outlineColor = "";
	 	document.getElementById("userAnswer").innerHTML = "What's your answer?";
	 	myQuestions++
	 	document.getElementById("whereAmI").innerHTML = myQuestions + "/" + maxQuestions;
		quiz();
 	}
 	else {
 		document.getElementById("quiz").style.display = "none";
 		document.getElementById("end-container").style.display = "";
 		document.getElementById("end-score").innerHTML = myPoints + "/" + maxPoints
 		document.getElementById("A").disabled = false;
		document.getElementById("B").disabled = false;
		document.getElementById("C").disabled = false;
		document.getElementById("D").disabled = false;
		document.getElementById("A").style.outlineColor = "";
	 	document.getElementById("B").style.outlineColor = "";
	 	document.getElementById("C").style.outlineColor = "";
	 	document.getElementById("D").style.outlineColor = "";
	 	document.getElementById("userAnswer").innerHTML = "What's your answer?";
 		document.getElementById("end").onclick = () => (game());
 	}
 } 
