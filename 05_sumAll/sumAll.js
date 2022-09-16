const sumAll = function(firstNumber, secondNumber) {
    if (typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number' || firstNumber * secondNumber < 0) {
        return 'ERROR'
    } else {
        let x = 0;
        for (i=Math.min(firstNumber, secondNumber); i<Math.max(firstNumber, secondNumber) + 1; i++) {
            x += i;
        }
        return x;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
