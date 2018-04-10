//função que retorna as cadeias mais longas
//de um array de cadeias de caracteres dado
//como entrada

function allLongestStrings(inputArray){
    let maxLength = 0;
    let resultArray = [];
    
    //guarda em maxLength o maior indice da string
    inputArray.forEach(function(element){
        if(element.length > maxLength) {
            maxLength = element.length;
        }
    });

    //guarda no resultArray os elementos de maior indice da string
    inputArray.forEach(function(element){
        if(element.length === maxLength) {
            resultArray.push(element);
        }
    });

    return resultArray;
    
}

let string = ["aba", "aa", "ad", "vcd", "aba"];
console.log(alllongestStrings(string));
