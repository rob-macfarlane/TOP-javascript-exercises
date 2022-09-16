const reverseString = function(string) {
    let backwardString = '';
    let originalStringLength = string.length
    for (i=0; i<originalStringLength; i++) {
        backwardString += string.slice(-1);
        string = string.slice(0, -1);
    }
    return backwardString;

};

// Do not edit below this line
module.exports = reverseString;
