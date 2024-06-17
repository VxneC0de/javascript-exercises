const reverseString = function(word) {
    let expression = word.split("").reverse().join("");
    return expression;
};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
