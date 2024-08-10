const reverseString = function(word) {
    let wordArray = word.split('');
    let newArray = [];
    while(wordArray.length>0) {
        newArray.push(wordArray.pop());
    }
    return newArray.join('');

    /*
        a similar and shorter solution
        I forgot the reverse method and did not look into array methods to assist me in this exercise
        return string.split("").reverse().join("");
    */
};

// Do not edit below this line
module.exports = reverseString;
