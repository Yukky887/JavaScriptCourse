function toggleText() {

	const button = document.querySelector('.js-subscribe-button') 
	if (button.innerText === 'Subscribe') {
		button.innerText = 'Subscribed';
	} else {
		button.innerText = 'Subscribe';
	}
}

	String(25);
	console.log('25' - 5);
	console.log('25' + 5);

	window.console.log('window')
	window.alert
 
function calculateTotal() {
	const inputElement = document.querySelector(`.js-cost-input`);

	let cost = Number(inputElement.value * 100);

	if (cost < 4000) {
		cost += 1000;
		cost = cost / 100;
	}

	document.querySelector('.js-total-cost')
		.innerHTML = `$${cost}`;
}

function checkEnter(event) {
	if (event.key === 'Enter') {
		calculateTotal();
	}
}

function typeText() {
	let someText = document.querySelector('.js-input');
	document.querySelector('.text-output')
		.innerHTML = `${someText.value}`;
}