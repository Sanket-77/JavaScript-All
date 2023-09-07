/****
Fetch data from api with fetch and promise

****/

var datastore = null;

function datausingfetch(){
    // debugger
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'GET',
        headers:{
            'Content-type':'application/json'
        }
    }).then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error))
}



function datausingpromise(){
    let datapromise = fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'GET',
        headers:{
            'Content-type':'application/json'
        }
    })
    debugger;
    let createpromise = new Promise((resolve, reject) => {
        resolve("TEst promise is resolved")
        reject("Reject promise test")
    }).then(response => response).then(data => console.log('data', data)).catch(error => console.log('error', error))

    console.log("createpromise", createpromise)
}

