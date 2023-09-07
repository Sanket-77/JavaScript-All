/*****
Reverse the string

Input: Welcome to vision Input

output: tupnI noisiv ot emocleW

***/
function reverseEveryWord(string) {
  var arr = string.split("");
  var output = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i]);
  }
  return output.join("");
}

function reverse1(str) {
  debugger;
  str = str.trim();
  var res = "";
  for (var i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}