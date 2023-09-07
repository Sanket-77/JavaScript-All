/******
Sum of the digits using js

Input: 123456
output: 21
******/

function sumofDigits(value){
    var sum = value
    .toString()
    .split('')
    .map(Number)
    .reduce(function (a, b) {
        return a + b;
    }, 0);
    // console.log(sum);
    return sum;
}

/// take numbers from str and calculate it
// input : "test12 test34 test54"

function digitremoveandcal(val){
    debugger;
    var strwithnum = val.split("");
    var numval = [];
    // var mapstr = strwithnum.map(Number).reduce(function(a,b){return a + b});
    for(var i=0; i < strwithnum.length; i++){
        if(Math.floor(parseInt(strwithnum[i])) % 10){
            numval.push(Math.floor(parseInt(strwithnum[i])))
        }
    }
    return numval.map(Number).reduce(function(a, b){return a + b});
}