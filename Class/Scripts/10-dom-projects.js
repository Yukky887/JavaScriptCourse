function toggleText() {

	const buttonElement = document.querySelector('.js-subscribe-button') 
	if (buttonElement.innerText === 'Subscribe') {
		buttonElement.innerText = 'Subscribed';
		buttonElement.classList.remove('subscribe-button');
		buttonElement.classList.add('is-subscribed');
	} else {
		buttonElement.innerText = 'Subscribe';
		buttonElement.classList.remove('is-subscribed');
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

	if (cost < 40 && cost >= 0) {
		cost += 10;
	} else if (cost >= 40) {
		document.querySelector('.js-total-cost')
		.innerHTML = `$${cost}`;
	}else if (cost < 0) {
		document.querySelector('.js-total-cost')
		.innerHTML = `Cost cannot be less than $0`;
	}
}

function checkEnter(event) {
	if (event.key === 'Enter') {
		calculateTotal();
	}
}