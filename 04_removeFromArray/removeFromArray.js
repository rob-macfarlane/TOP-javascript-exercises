const removeFromArray = function(array, ...removeValues) {
    for (const value of removeValues) {
        while (array.includes(value)) {
            array.splice(array.indexOf(value), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
