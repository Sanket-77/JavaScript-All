/****
Reverse every word from string 

Input: Welcome to vision Input

output: emocleW ot noisiv tupnI

*****/

function reverseEveryWord(str){
    var result = "";

    var splitstr = str.split(" ");

    for(let i=0; i < splitstr.length; i++){
        result = result + " " +splitstr[i].split("").reverse().join("");
    }
    return result;
}

function reverseWithoutrev(str){
    var res = "";
    var spltstr = str.split(" ");
    var temparr = [];
    for(let i=0; i < spltstr.length; i++){
        res = spltstr[i].reverse();
        temparr.push(res)
    }
    return res;
}
