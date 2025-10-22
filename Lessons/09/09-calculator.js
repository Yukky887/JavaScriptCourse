let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

document.querySelector('.calculateResult')
        .innerHTML = calculation;

function updateCalculator(element) {
    
    calculation += element;
    document.querySelector('.calculateResult')
        .innerHTML = calculation;
    
    localStorage.setItem('calculation', JSON.stringify(calculation))

    return calculation;
}

function calculate(calculation) {
    calculation = eval(calculation);
    document.querySelector('.calculateResult')
        .innerHTML = calculation;
    calculation = '';
    localStorage.removeItem('calculation');
}