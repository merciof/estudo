/*Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false. */


function isLucky(number) {
    let numberArr = number.toString().split('');
    let sum1 = 0;
    let sum2 = 0;
    numberArr.forEach(function(element,index){
        if(index < (numberArr.length / 2)){
            sum1 += parseInt(element);
        } else {
            sum2 += parseInt(element);
        }
    });

    if(sum1 === sum2) {
        return true;
    } else {
        return false;
    }
}

let number = 1230;

console.log(isLucky(number));
