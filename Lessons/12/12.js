let add = function() {
	console.log(2 + 3)
}

console.log(add, add);

function runTwice(fun) {
	console.log(fun, fun);
}

runTwice(add);

document.querySelector('.js-start-button')
	.addEventListener('click', () => {
		changeButton();
	});

document.querySelector('.js-add-to-cart-button')
	.addEventListener('click', () => {
		addButton();
	});

document.querySelector('.js-add-message-button')
	.addEventListener('click', () => {
		addMessageButton('add');
	});

document.querySelector('.js-remove-button')
	.addEventListener('click', () => {
		addMessageButton('remove');
	});


function changeButton () {
	document.querySelector('.start-button')
		.innerHTML = 'Loading...';		
	setTimeout(() => {
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
	
	timerId = setTimeout(() => {
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
setInterval(() => {
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

const multiply = (param, param2) => param * param2;

console.log(multiply(2, 3));

function countPositive(array) {
	let i = 0;
	array.forEach(element => {
		if (element > 0 ) {
			i++;
		}
	});

	console.log(i);
}

countPositive([1, -3, 4]);


function addNum(array, num) {
	return array.map(element => element + num);
}

console.log(addNum([1, 1, 3], 2));


function removeEgg(array, word) {
	let i = 0;
	const arrayNoEgg = array.filter(element => {
		if(i < 2) {
			element !== word;
			i++;
			console.log(i)
		} else {
			return true;
		}
	});
	return arrayNoEgg;

}

console.log(removeEgg(['egg', 'egg', 'milk', 'egg', 'cucumber'], 'egg'));