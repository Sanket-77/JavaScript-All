// obj1 = {
// name:'test value'
// }
// obj2 = {
// emp: []
// }
// obj3 = {
// address: {
// }
// }

function callfn(){
	console.log(this)
}

// console.log(" call testing",callfn.call(obj1));

const varfunction = function(){
	console.log("method print by bind call")
}

// console.log(varfunction.bind(obj2))

// console.log("test1")
// setTimeout(()=>{
//     console.log("test2")
// },1000);
// console.log("test3")
// async function testsync(){
// 	await setTimeout(() => {
// 		console.log("test async test1")
// 	}, 5000);

// 	await setTimeout(() => {
// 		console.log("test async test2")
// 	}, 5000);

// 	console.log("First print")
// }

let sptest = "str str2 str3";

function testSpread(abc, bcd, ...sptest){
	console.log("abc, bcd,", abc, bcd)
	console.log("SPread op", sptest)
}

// console.log(testSpread("test", "test2", sptest));

const obj1 = {
	name: 'object one'
}
const obj2 = {
	phone: '12112121'
}
const obj3 = {
	address: 'pune',
	extraobj: {
		city: {
			city1: 'pune',
			city2: 'mumbai'
		}
	}
}

let{extraobj:{city:{city2}}} = obj3;


console.log("city2 destruct", city2)

const finalRes = {
	...obj1,
	...obj2,
	...obj3
}

// console.log("finalRes spread", finalRes)
