/**
Output codes
What will be the output of the following code?
**/
// var x = 21;
// (function(){
// console.log(x);
// var x = 20;
// })();
// console.log(x)

// var Employee = {
//     company: 'xyz'
//   }
//   var emp1 = Object.create(Employee);
//   delete emp1.company
//   console.log(emp1.company);

/***
   Above code will output xyz as output. Here emp1 object got company as prototype property. delete operator doesn't delete prototype property.
    emp1 object doesn't have company as its own property. You can test it like:
    console.log(emp1.hasOwnProperty('company')); //output : false
*/
// debugger
// var output = (function(x) {
//     delete x;
//     return x;
// })(0);
  
// console.log(output);

/**
    Above code will output 0 as output. delete operator is used to delete a property from an object. Here x is not an object it's local variable. delete operator doesn't affect local variable.   
*/

var arr = [1,2,3,4,5,6,7,8,9,10];

for(var i=0; i < 10; i++){
    setTimeout(() => {
        console.log(arr[i]);
    }, 1000);
}

// 10;
//undefined // 9 times

/***
for(var i=0; i < 3; i++){
    callfunction(i)
} 
console.log(i)

function callfunction(a){
    http.get(){
        console.log(a)
    }
}
console.log(i)
*/

(function(){
    console.log("Test")
    var x = 43
    return function(){
        x++;
        console.log(x)
        var x = 21
    }
})()

    





