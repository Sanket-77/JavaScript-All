/****
Call apply and bind 
***/

let name = {
    firstname: 'suhas',
    lastname: 'korhale',
    // printfullname: function(){
    //     console.log(this.firstname +" "+this.lastname)
    // }
}

let printfullname = function(hometown, city){
    console.log(this.firstname +" "+this.lastname+" "+ hometown +" "+ city);
}

// name.printfullname()

printfullname.call(name, "Pune", "Akolner")

let name1 = {
    firstname: "Vision",
    lastname: "Test"
}

let name3 = {
    firstname: "Sachin",
    lastname: "Waikar"
}

// call and apply is use to borrowing function

// name.printfullname.call(name1)
printfullname.call(name1, "Mumbai", "Thane")

printfullname.apply(name3, ["Nashik", "Nashik1"])

// bind method => use to give copy of method and invoke later 

let printMyname = printfullname.bind(name3, "Jhansi", "Meher")

console.log('printMyname', printMyname);


