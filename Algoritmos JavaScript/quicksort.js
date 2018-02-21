function quickSort(array, left = 0, right = array.length - 1) {
    let index;
    if(array.length > 1) {
        //create the partition (split the array)
        index = partition(array, left, right);
    } 
    if(left < index - 1) {
        quickSort(array, left, index - 1);
    }
    if( index < right) {
        quickSort(array, index , right);
    }
    return array;
}
function partition(array, left, right) {
    //create pivot as middle value
    const pivot = array[Math.floor((right + left) / 2)];
    
    let i = left;//start left and go towards pivot
    let j = right;//start right and go towards pivor


    while(i <= j) {
        
        console.log(array[i] + '<' + pivot);
       //Enquanto o elemento a esquerda do pivot for menor do que o pivot, avance um elemento a direita
        while(array[i] < pivot) {
            console.log(`Indice i indo do elemento: ${array[i]} para o elemento ${array[i + 1]} `);
            
            i++;
        } 
        console.log('**************************************************************');
        console.log('\n');
        
        //Enquanto o elemento a direita do pivot for maior do que o pivot, avance um elemento a esquerda
        console.log(array[j] + '>' + pivot);
        while(array[j] > pivot){
            console.log(`Indice j voltando do elemento: ${array[j]} para o elemento ${array[j - 1]} `);
            j--;
        }
        console.log('\n');
        if (i <= j) {
            //swap values using destructuring
            console.log('**************************************************************');
            console.log(`Trocando elemento ${array[i]} por ${array[j]} `);
            
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
        console.log('\n');
    }
    return i;
}


let array = [3,8,15,6,9,2,1,12];
console.log(quickSort(array));
