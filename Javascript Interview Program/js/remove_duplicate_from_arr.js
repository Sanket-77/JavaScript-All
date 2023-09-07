/***
CHeck similar word from array and remove it

input: ['test1', 'suhas', 'test2', 'test3', 'suhas']

*/

function removeduplicate(a) {
  // debugger;
//   var result = a.filter(res => res );
//   return result;
  var result = [];
  a.forEach(function (item) {
    if (result.indexOf(item) < 0) {
      result.push(item);
    }
  });
  return result;
}
