let num = [1, 4, 5, 3, 4, 1, 3, 5];
// {1:2, 2:2, 3:3}
var res = [];
// for(let i=0;i<=num.length;i++){
//     res =res[num[i]];
//     console.log(res)
// }
// var count = 0;
// for(let i=0;i<=num.length;i++){
//     for(let j=0; j < num.length; j++){
//         if(num[i] == num[j]){
//             count++;
//         }
//         console.log(count + " i value => ", i);
//         if(i )
//     }
    
// }

function CallApplyExample(name, phoneno){

    console.log("checking this of function", this)
    function child1(){
        console.log("checking this of function child", this)
        var testvariable = "Checking test"
        return testvariable
    }
    child1();
    this.name = name;
    this.phoneno = phoneno;
    this.usedetails = function(a, b, c){
        console.log("User name => ", this.name + " User phone => ", this.phoneno)
    }
}

// CallApplyExample()
var testCall = new CallApplyExample("Something", "test", "test2");
testCall.usedetails.bind();

// call will send parameter in array format
// apply will send parameter in string format

testCall;

var arrexample = [4, 5, 6, 7, 18, 90];
var res = Math.max.call(...arrexample);
console.log("res", res)

// function currying

// function step1(num1){
//     return function step2(num2){
//         return function step3(num3){
//             return num1 + num2 + num3
//         }
//     }
// }

function step1(num){
    return num
}

function step2(num, num2){
    return step1(num, num2)
}

function step3(num, num1, num2){
    return step2(num, num1) + num2
}

console.log(step3(10, 20, 30))

// callback hell and currying.

const data = [
    {name: "Mark", stock:"FB"},
    {name: "Bill", stock:"AAPL"},
    {name: "Gary", stock:"AAPL"}
];
// output : [{stock: "AAPL", name:["Bill", "Gary"], count: 2}]
const tempArray = [];
function convertData(data){

    for(let i=0; i < data.length; i++){
        
    }

}

