/***
Factorial function in javascript

****/
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 6;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);

  // program to find the factorial of a number
function factorialnum(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorialnum(x - 1);
    }
}

// take input from the user
const num = prompt('Enter a positive number: ');

// calling factorial() if num is positive
if (num >= 0) {
    const result = factorialnum(num);
    console.log(`The factorial of ${num} is ${result}`);
}
else {
    console.log('Enter a positive number.');
}