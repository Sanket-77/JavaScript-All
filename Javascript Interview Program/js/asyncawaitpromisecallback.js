/***
Async/ await, Promises, callback


***/
// callback example

let datas = [
    {name: 'suhas'},
    {name: 'test2'},
]

function getData(){
    setTimeout(() => {
        let output = "";
        datas.forEach((item, index) =>{
            output += `<li>${item.name}</li>`
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createData(pushdata, callback){
    debugger
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            datas.push(pushdata)
            let error = false;
            if(!error){
                resolve()
            }else{
                reject("Nothing going is right")
            }
            callback()
        }, 2000);
    })
    // setTimeout(() => {
    //     datas.push(pushdata)
    //     callback()
    // }, 5000);
}

// createData({name: 'third party'},getData) // using callback

// createData({name: 'third party'}).then(getData).catch(error => console.warn(error)) using promise

// Async and await

async function start(){
    await createData({name: 'third party'}, getData)
    // getData()
}
start()