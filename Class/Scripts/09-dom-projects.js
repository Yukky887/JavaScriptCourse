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

	let cost = Number(inputElement.value);

	if (cost < 40) {
		cost += 10;
	}

	document.querySelector('.js-total-cost')
		.innerHTML = `$${cost}`;
}

function checkEnter(event) {
	if (event.key === 'Enter') {
		calculateTotal();
	}
}