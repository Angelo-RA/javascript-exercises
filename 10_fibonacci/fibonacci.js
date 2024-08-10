const fibonacci = function(n) {
    n = +n;
    if(n<0) {
        return "OOPS";
    }
    if(n==0) {
        return 0;
    }
    const arr = [0,1];
    for(let i=0; i<n-1; i++) {
        arr.push(arr[i]+arr[i+1]);
    }
    return arr.pop();
};

// Do not edit below this line
module.exports = fibonacci;
