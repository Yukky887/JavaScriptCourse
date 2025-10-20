let calculation = JSON.parse(localStorage.getItem('calculation')) || '';


function updateCalculator(element) {
    
    calculation += element;
    console.log(calculation);
    
    localStorage.setItem('calculation', JSON.stringify(calculation))

    return calculation;
}

function calculate(calculation) {
    calculation = eval(calculation)
    console.log(calculation)
    calculation = '';
    localStorage.removeItem('calculation')
}