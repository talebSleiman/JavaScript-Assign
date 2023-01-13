
function calculate(firstNum, secondNum, operation) {
    if (secondNum === undefined) {
        console.log(`Second Number Not Found`);
        return;
    }
    if (operation === undefined) {
        console.log(firstNum + secondNum);
    } else {
        switch (operation) {
            case 'add':
                console.log(firstNum + secondNum);
                break;
            case 'subtract':
                console.log(firstNum - secondNum);
                break;
            case 'multiply':
                console.log(firstNum * secondNum);
                break;
        }
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600