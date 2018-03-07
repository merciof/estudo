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
