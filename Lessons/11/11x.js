
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList () {
	let todoListHTML = "";	

	for (let i = 0; i < todoList.length; i++) {
		const todoObject = todoList[i];
		const { name, dueDate } = todoObject;
		const html = `
			<div>${name}</div>
			<div>${dueDate}</div>
			<button
				class="
					delete-todo-button
				"
				onclick ="
					deleteTodo(${i})
			">Delete</button>
		`;
		todoListHTML += html;
	}

	document.querySelector('.js-todo-list')
		.innerHTML = todoListHTML;
}


function addTodo() {
	const inputElement = document.querySelector('.js-name-input');
	const name = inputElement.value;

	const dateInputElement = document.querySelector('.js-due-date-input');
	const dueDate = dateInputElement.value;

	todoList.push({
		name,
		dueDate
	});

	localStorage.setItem('todoList', JSON.stringify(todoList));

	renderTodoList();
	inputElement.value = '';
}

function deleteTodo(index) {
	todoList.splice(index, 1);
	localStorage.setItem('todoList', JSON.stringify(todoList));
	renderTodoList();
}