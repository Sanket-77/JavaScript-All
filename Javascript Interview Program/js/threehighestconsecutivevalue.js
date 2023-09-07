/**
3 highest consecutive numbers from array
input
let arr = [2, 3, 5, 7, 8, 9, 10, 3, 5, 7];

output
[7,8,9]

***/
let arr = [2, 3, 5, 7, 8, 9, 10, 3, 5, 7];
let results = [];
let largest = 0;
// for (var i = 1; i < arr.length -1; i++) {
//   let a = arr[i];
//   let b = arr[i+1];
//   let c = arr[i+2];
//   if(b === a+1 && c === b+1){
//     results.push(a);
//     results.push(b);
//     results.push(c);
//     // return results
//   }
// }
for(let item in arr){
  if(item > arr[item]){
    results.push(item)
  }else if(item < results[item]){
    results.push(item)
  }
}
console.log(results)

let arr2 = [2, 3, 5, 7, 8, 9, 10, 3, 5, 7];
function threeConsecutive(arrnum){
  let results = [];
  let largest = 0;

  for(let i=0; i < arrnum.length -1; i++){
      let a = arrnum[i];
      let b = arrnum[i + 1];
      let c = arrnum[i + 2];
      if(a === a+1 && c === b+1){
        results.push(a);
        results.push(b);
        results.push(c);
      }
    }
    return results
}

console.log(threeConsecutive(arr2)) 
