console.log(document.querySelector('.button'));
document.querySelector('.button2')
	.innerHTML = 'ababa';

	
function choseButton(button) {
	document.querySelector('.result')
		.innerHTML = `You chose: ${button}`;
}

function myName() {
	let inputName = document.querySelector('.input-name')
	
	document.querySelector('.result-text')
		.innerHTML = `Your name is: ${inputName.value}`;
}

function keyDownEnter(event) {
	if (event.key === 'Enter') {
		myName();
	}
}