let buttonElement = document.querySelector('.js-class');

if (buttonElement.classList.contains('js-class') === true) {
    console.log('クラス名「js-class」を持っています。');
}

function clickButton(className) {
   let buttonSwitch = document.querySelector(`.${className}`);
   if (buttonSwitch.classList.contains('is-active') === false) {
    buttonSwitch.classList.add('is-active');
    } else {
        buttonSwitch.classList.remove('is-active');
    }
}