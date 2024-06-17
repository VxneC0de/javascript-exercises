const removeFromArray = function(array, ...elements) {
    for(let i =0; i < elements.length; i++){
        const index = array.indexOf(elements[i]);
        if(index > -1){
            array.splice(index, 1);
        }
    };

    return array;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
