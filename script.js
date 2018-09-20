const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

let tasklist = document.querySelector("#todo-list");

const addToDo = (todoitem) => {
	let listitem = document.createElement('li');
	let textnode = document.createTextNode(todoitem);  
	listitem.appendChild(textnode);
	tasklist.appendChild(listitem);

	listitem.addEventListener("click", function(event) {
		listitem.classList.toggle('done')
	  });
}

const handleToDoAdd = () => {
	event.preventDefault(); 
    let inputText = inputTextField.value
    if (inputText == '') {
        alert ('Please enter your to-do')
	} 
	else {
		addToDo(inputText)
		inputTextField.value = ''
    }
}

for(var i=0; i < tasks.length; i++) {
	addToDo(tasks[i])
}

let submitElement = document.querySelector("button");
let inputTextField = document.querySelector("#inputField")

submitElement.addEventListener("click", function(event) {
	handleToDoAdd();
});

  inputTextField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        handleToDoAdd();
    }
});

