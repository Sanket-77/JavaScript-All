/**
Anagram check using js

input: Mary, Army

output: Anagram

**/

function anagramcheck(s1, s2){
    return s1.toLowerCase().split("").sort().join("") === s2.toLowerCase().split("").sort().join("");
}

/**
 * 
input : ['kmno', 'okmn', 'omkn', 'dell', 'ledl', 'ok', 'ko'] 


 Output:
{
    dell: ['dell', 'ledl'],
    kmno: ['kmno', okmn', 'omkn'],
    ko: ['ok', ko']
}

 * 
 */
 function anagramOrganize(array) {
    debugger
    var organized = {};
    for (var i = 0; i < array.length; i++) {
        var word = array[i].split('').sort().join('');
        if (!organized.hasOwnProperty(word)) {
            organized[word] = [];
        }
        organized[word].push(array[i]);
    }    
    return organized;
}


anagramOrganize(['kmno', 'okmn', 'omkn', 'dell', 'ledl', 'ok', 'ko']) // Example