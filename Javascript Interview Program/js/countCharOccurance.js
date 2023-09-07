/***
Count every character occurance in string and return with numbers.

input = "hello"
output = h=1, e=1, l = 2, o=1

***/
// let str = "hello";
// getNoOfOccurences(str);
// function getNoOfOccurences(str){
//     var temp = {};
//     for(var oindex=0;oindex<str.length;oindex++){
//         if(typeof temp[str.charAt(oindex)] == 'undefined'){
//             temp[str.charAt(oindex)] = 1;
//         }else{
//             temp[str.charAt(oindex)] = temp[str.charAt(oindex)]+1;
//         }
//     }
//     return temp;
// }

var countArr = [2,2,2,2,3,3,3,2,2,1];
// var actualResult = [{2:4}, {3:3}, {2:2}, {1:1}];

const counts = {};

for (const num of countArr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log(counts);

// let resultObject = {};
// // debugger;
// for(let item=0;item < countArr.length; countArr++ ){
//   if(resultObject[countArr.indexOf(item) > 0]){
//       resultObject[item] = 1;
//   }else{
//       resultObject[item] = resultObject[item] + 1 
//   }
//   console.log(resultObject)
// }

// var count = countArr.reduce(function (acc, curr) {
//   return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
// }, {});

console.log(count)
// let empObject = [
//   {name: 'Test1', role: 'dev'},
//   {name: 'Test2', role: 'QA'},
//   {name: 'Test3', role: 'dev'}
// ]

// let resultEmp = "";
// for(let item=0; item < empObject.length; item++){
//   if(empObject[item].role === 'dev'){
//     resultEmp += " "+empObject[item].name
//   }
// }
// console.log(resultEmp);




