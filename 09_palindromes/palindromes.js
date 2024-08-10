const palindromes = function (string) {
    const arrayOfChar = string.toLowerCase().split("");
    const newArray = arrayOfChar.map(element => element.replace(/[^a-zA-Z0-9]/g, ''));
    return newArray.join("") == newArray.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
