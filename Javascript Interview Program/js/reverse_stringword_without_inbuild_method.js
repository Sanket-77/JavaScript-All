/****
Reverse string every word without inbuild methods in js

usecase: 1
input: "Welcome to IT"
output: "TI ot emocleW"

usecase: 2
input: "Welcome to IT"
output: "TI ot emocleW ot TI"

*****/

function convertStrSce1(str){

//  var spltstr = str.split(" ");
// console.log("spltstr", spltstr);
var everyobjrev = "";
var storearr = [];
debugger
    for(var i=0; i < str.length; i++){
        storearr.push(str[i]);
    }
 
    console.log("storearr", storearr)
    for(var j = storearr.length - 1; j >= 0; j--){
        everyobjrev += storearr[j];
    }

    console.log("resultarr", everyobjrev)
    return everyobjrev
}

// console.log(convertStrSce1("Welcome to IT"));

function convertStrSce2(str){
    debugger;
    var saveword = [];
    var onlyword = [];
    var saveText = "";
    for(let i=0; i < str.length; i++){
        if(str.indexOf(" ") > -1){
            saveword.push(str[i]);
        }
    }

    console.log(" saveword =>", saveword)
}

console.log(convertStrSce2("Welcome to IT"));