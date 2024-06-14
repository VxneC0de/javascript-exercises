const number = Math.floor(Math.random() * 1000);

const repeatString = function(string, num) {
  let word = string;
  let array = "";
  let count = 0;
  

  if(num < 0){
    return 'ERROR';
  }

  while(count < num){
    array += word;
    count++;
  }
  return array;
};

repeatString("", number);

// Do not edit below this line
module.exports = repeatString;
