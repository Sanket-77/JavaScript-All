/***
Reverse the digit.

input: 123456
output: 654321

**/

function inputNo(num){
    var convertStr = num.toString();
    var spltstr = convertStr.split("");
    var result = "";
    for(let i= spltstr.length -1 ; i >= 0 ; i--){
        result = result + spltstr[i];
    }
    return parseInt(result);
}
