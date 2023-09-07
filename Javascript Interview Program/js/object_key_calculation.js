/***
Input object with keys and change there value accordingly:

input : 
{
      a: 1234,
      b: "abc",
      c: [1, 2, 3, 4]
}

output:
{
      a: 1235,
      b: "abc AEE",
      c: [2, 3, 4, 5]
}

React code with sanbox:
https://codesandbox.io/s/funny-platform-25vyb7?file=/src/App.js

***/
function objvaluoperation(object1) {
    debugger;
    var keys = Object.keys(object1);
    keys.forEach((tm) => {
        // console.log(typeof object1[tm]);
        if (typeof object1[tm] === "number") {
            var checklastdigit = Math.floor(object1[tm]) % 10;
            var calclast = checklastdigit + 1;
            var rmlastone = object1[tm].toString().split("").slice(0, -1);
            rmlastone.push(calclast);
            var parseobj = rmlastone.join("");

            // Find first digit
            let digits = Math.floor(Math.log(object1[tm])/Math.log(10)),
            n = Math.floor(object1[tm] / Math.pow(10, digits));
            // n Return first digit
            //return n;

            return (object1[tm] = parseInt(parseobj, 0));
        } else if (typeof object1[tm] === "string") {
            return object1[tm] = object1[tm] + " AEE";
        } else if (Array.isArray(object1[tm])) {
            var spltstr = object1[tm].map((rs) => rs + 1);
            return (object1[tm] = spltstr);
        }
        console.log(object1);
        return object1;
    });
}

var objectParam = {
    a: 1234,
    b: "abc",
    c: [1, 2, 3, 4]
}

console.log(objvaluoperation(objectParam));