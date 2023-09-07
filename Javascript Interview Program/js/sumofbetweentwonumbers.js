/*** sum between given 2 number 

input: [1, 4] => return 10

input: [4, 1] => return 10

****/

function sumofdigit(num1, num2){
    if(num1 > num2){
        return ((num1-num2)+1) * (num2 + num1) / 2;
    }else if(num2 > num1){
        return ((num2-num1)+1) * (num1 + num2) / 2;
    }
}

function sumofbetweennu(no1, no2){
    if(no1 > no2){
        return ((no1-no2)+1) * (no2 + no1) / 2;
    }else if(no2 > no1){
        return ((no2-no1)+1) * (no1 + no2) / 2;
    }
}
