/**
Append special character in string for every word

input: My first javascript program
Output: @My @first @javascript @program

**/

function appendString(str){
    result = "";
    var splitstr = str.split(" ");
    //var splitstr = str.split(""); for every character 
    // for(let i=1; i < splitstr.length; i++){
    //     result = result + 
    // }
    result = splitstr.map(s => "@" + s).join(' ');

    return result;
}
