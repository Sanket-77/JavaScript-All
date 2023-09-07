/******
 * Sort array and find out missing number
 */
debugger;
let a1 = [5, 7],
  count = 10,
  missingcnt = []

for (let i = 1; i <= count; i++) {
  if (a1.indexOf(i) === -1) {
    missingcnt.push(i)
  }
}

let resultarr = [...a1, ...missingcnt];
debugger
console.log(resultarr.sort(function(a, b){return a - b}))

var a = [10,1,4,7];
a.sort(function(a, b) {return a - b;});
count = a[a.length - 1];
var missing = [];

for ( var i = 1; i <= count; i++ ) {
	if (a.indexOf(i) == -1) {
		missing.push(i);
	}
}

console.log(missing.toString());