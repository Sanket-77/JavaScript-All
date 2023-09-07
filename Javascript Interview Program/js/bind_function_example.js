/******
When would you use the bind function?


****/

function fullName() {
  return "Hello, this is " + this.first + " " + this.last;
}

console.log(fullName()); // => Hello this is undefined undefined

// create a person object and pass its values to the fullName function
var person = {first: "Foo", last: "Bar"};
console.log(fullName.bind(person)()); // => Hello this is Foo Bar