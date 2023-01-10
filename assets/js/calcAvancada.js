qsAll = function (e) {
    return document.querySelectorAll(e);
};
qs = function (e) {
    return document.querySelector(e);
};

// Variables
let value1 = '';
let value2 = '';
let value_result = '';
let explain_calcs = qs('.explain-calcs');
let result_calcs = qs('.result-calcs');
let my_grid = qsAll('.grid-item, .grid-item-zero');
let my_button_on_off = qs('#on-off');
let my_button_equal = qs('#equal');



my_grid.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e) {
            switch (e.target.textContent) {
                case '1':
                    value1 = 1;
                    result_calcs.innerHTML += value1;
                    break;
                case '2':
                    value1 = 2;
                    result_calcs.innerHTML += value1;
                    break;
                case '3':
                    value1 = 3;
                    result_calcs.innerHTML += value1;
                    break;
                case '4':
                    value1 = 4;
                    result_calcs.innerHTML += value1;
                    break;
                case '5':
                    value1 = 5;
                    result_calcs.innerHTML += value1;
                    break;
                case '6':
                    value1 = 6;
                    result_calcs.innerHTML += value1;
                    break;
                case '7':
                    value1 = 7;
                    result_calcs.innerHTML += value1;
                    break;
                case '8':
                    value1 = 8;
                    result_calcs.innerHTML += value1;
                    break;
                case '9':
                    value1 = 9;
                    result_calcs.innerHTML += value1;
                    break;
                case '0':
                    value1 = 0;
                    result_calcs.innerHTML += value1;
                    break;
                case "+":
                    value1 = "+";
                    result_calcs.innerHTML += value1;
                    break;
                case "-":
                    value1 = "-";
                    result_calcs.innerHTML += value1;
                    break;
                case "/":
                    value1 = "/";
                    result_calcs.innerHTML += value1;
                    break;
                case "X":
                    value1 = "*";
                    result_calcs.innerHTML += value1;
                    break;
                case ".":
                    value1 = ".";
                    result_calcs.innerHTML += value1;
                    break;
                case "RaizQ":
                    value2 = result_calcs.innerHTML;
                    value1 = Math.sqrt(value2);
                    result_calcs.innerHTML = value1;
                    break;
                case "%":
                    value2 = result_calcs.innerHTML;
                    value1 = value2 / 100;
                    result_calcs.innerHTML = value1;
                    break;
                case "x²":
                    value2 = result_calcs.innerHTML;
                    value1 = value2 * value2;
                    result_calcs.innerHTML = value1;
                    break;
                case "x³":
                    value2 = result_calcs.innerHTML;
                    value1 = value2 * value2 * value2;
                    result_calcs.innerHTML = value1;
                    break;
                case "10ª":
                    value2 = result_calcs.innerHTML;
                    let product = 1;
                    let fixo = 10;
                    for (let i = 0; i < value2; i++) {
                        product *= fixo;
                    }
                    result_calcs.innerHTML = product;
                    break;
                case "1/x":
                    value2 = result_calcs.innerHTML;
                    value1 = 1 / value2;
                    result_calcs.innerHTML = value1;
                    break;
                case "RaizC":
                    value2 = result_calcs.innerHTML;
                    value1 = Math.cbrt(value2);
                    result_calcs.innerHTML = value1;
                    break;
                case "ln":
                    value2 = result_calcs.innerHTML;
                    value1 = Math.log(value2);
                    result_calcs.innerHTML = value1;
                    break;
                case "log10":
                    value2 = result_calcs.innerHTML;
                    value1 = Math.log10(value2);
                    result_calcs.innerHTML = value1;
                    break;
                case "x!":
                    value2 = result_calcs.innerHTML;
                    let fatorial = value2;
                    let produto = fatorial;
                    if (value2 == 0) {
                        result_calcs.innerHTML = 1;
                    } else {
                        for (let i = 1; i < fatorial; i++) {
                            produto *= i;
                        }
                        result_calcs.innerHTML = produto;
                    }
                    break;
                case "sin":
                    value2 = result_calcs.innerHTML;
                    value1 = Math.sin(value2);
                    result_calcs.innerHTML = value1;
                    break;
                case "cos":
                    value2 = result_calcs.innerHTML;
                    value1 = Math.cos(value2);
                    result_calcs.innerHTML = value1;
                    break;
                case "tan":
                    value2 = result_calcs.innerHTML;
                    value1 = Math.tan(value2);
                    result_calcs.innerHTML = value1;
                    break;
                case "e":
                    result_calcs.innerHTML = Math.E;
                    break;
                case "Rad":
                    value2 = result_calcs.innerHTML;
                    value1 = value2 * (Math.PI / 180);
                    result_calcs.innerHTML = value1;
                    break;
                case "sinh":
                    value2 = result_calcs.innerHTML;
                    value1 = Math.sinh(value2);
                    result_calcs.innerHTML = value1;
                    break;
                case "cosh":
                    value2 = result_calcs.innerHTML;
                    value1 = Math.cosh(value2);
                    result_calcs.innerHTML = value1;
                    break;
                case "tanh":
                    value2 = result_calcs.innerHTML;
                    value1 = Math.tanh(value2);
                    result_calcs.innerHTML = value1;
                    break;
                case "Pi":
                    result_calcs.innerHTML = Math.PI;
                    break;
                case "Rand":
                    result_calcs.innerHTML = Math.floor(((Math.random() * 100) + 1));
                    break;
                case "(":
                    result_calcs.innerHTML += e.target.textContent;
                    break;
                case ")":
                    result_calcs.innerHTML += e.target.textContent;
                    break;
            }
        }
    });
});

my_button_on_off.addEventListener('click', (e) => {
    result_calcs.innerHTML = '';
})

my_button_equal.addEventListener('click', (e) => {
    let result = result_calcs.innerHTML;
    result_calcs.innerHTML = eval(result);
    value1 = '';
    value2 = '';
    value_result = '';
})