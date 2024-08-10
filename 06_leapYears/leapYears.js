const leapYears = function(year) {
    let lastTwoDigit = year.toString().split("").slice(-2).join("");
    if(lastTwoDigit % 4 == 0 && lastTwoDigit != "00"){
        return true;
    } else if(year % 400 == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
