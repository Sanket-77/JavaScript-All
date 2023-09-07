/*** Accept multiple parameter of number and do sum of it 

example: acceptparams(1,2,3,4,5,6)

****/

function acceptparams(...params){
    console.log("Parmas length", params.length)
    let result = 0;
    for(let itm of params){
        result += itm
    }
    // return result;

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    }).then((response) => response.json()).then((json) =>{
      console.log("json", json);
    })
}