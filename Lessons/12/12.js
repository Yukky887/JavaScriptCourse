let add = function() {
	console.log(2 + 3)
}

console.log(add, add);

function runTwice(fun) {
	console.log(fun, fun);
}

runTwice(add);

function changeButton () {
	document.querySelector('.start-button')
		.innerHTML = 'Loading...';		
	setTimeout(function startButton() {
		document.querySelector('.start-button')
			.innerHTML = 'Finished!';
		}, 1000)
}

let timerId;

function addButton() {
	let responseHTML = `<p>Added</p>`;
	
	if (timerId) {	
		clearTimeout(timerId);	
	}

	document.querySelector('.add-to-cart')
		.innerHTML = responseHTML;
	
	timerId = setTimeout(function() {
		document.querySelector('.add-to-cart')
		.innerHTML = '';
	}, 2000);
	
}

let message = 0;

function addMessageButton(command) {
	if (command === 'add') {
		message++;
	} else if (command === 'remove') {
		message--;
	}
	return message;
}

let isTrue = true
setInterval(function() {
	if (isTrue && message > 0) {
		document.querySelector('.title')
			.innerHTML = `(${message}) New message`;
			isTrue = false;
	} else {	
		document.querySelector('.title')
			.innerHTML = 'App';
		isTrue = true;
	}
}, 1000);