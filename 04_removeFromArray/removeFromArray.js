/*
const removeFromArray = function(array, ...elements) {
    for(let i =0; i < elements.length; i++){
        const index = array.indexOf(elements[i]);
        if(index > -1){
            array.splice(index, 1);
        }
    };

    return array;
};
*/

const removeFromArray = function(array, ...elementsToRemove) {
    return array.filter(item => !elementsToRemove.includes(item));
};
  
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)); 

// Do not edit below this line
module.exports = removeFromArray;
