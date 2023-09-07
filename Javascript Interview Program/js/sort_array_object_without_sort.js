/***
Sort array object without inbuilt sort method.

***/
const arrObj = [
    {id: 2, name: 'Suhas', age: 20},
    {id: 3, name: 'Amar', age: 13},
    {id: 1, name: 'Vision', age: 25}
]

function sortArrayobject(arrObj){
    for(let i=0; i < arrObj.length; i++){
        let temparr = [];
        for(let j=i + 1; j < arrObj.length; j++){
            if(arrObj[i].name.toUpperCase() > arrObj[j].name.toUpperCase()){
                temparr = arrObj[i];
                arrObj[i] = arrObj[j];
                arrObj[j] = temparr
            }
        }
    }
    return arrObj;
}

