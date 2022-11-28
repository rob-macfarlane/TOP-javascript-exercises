const palindromes = function (inputString) {
    let inputArray = inputString.split("");
    let testArray = inputArray.reverse()
    
    if (testArray.toString() == inputArray.toString()) {
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
