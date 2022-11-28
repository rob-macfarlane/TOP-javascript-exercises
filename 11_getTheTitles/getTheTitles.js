const getTheTitles = function(array) {
    let justTitles =[];
    for (i =0; i < array.length; i++) {
        justTitles.push(array[i].title);
    }
    return justTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
