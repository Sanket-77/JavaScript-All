/***
1. Passed string as "CandidateId=10042&Name=Harish". Convert this string as object. If we write obj.name it should give Harish.

input = "CandidateId=10042&Name=Harish"
output = obj {CandidateId: 10042, Name: Harish }
while type obj.name should print Harish

***/

function convertStr(str){
    // var obj = eval('({' + str + '})');

    // let jsonparse = JSON.parse(str);
    // let spltStr = str.split("&");
    // let makeobj = Object.assign({}, spltStr);

    // let changevalue = makeobj[1].split("=");
    // let obj2 = Object.assign({}, changevalue)

    // console.log('obj2', obj2);
    var properties = str.split('&');
    var obj = {};
    properties.forEach(function(property) {
        var tup = property.split('=');
        obj[tup[0]] = tup[1];
    });
    console.log("obj => ", obj.Name)
}