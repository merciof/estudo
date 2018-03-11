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
       //Enquanto o elemento a esquerda do pivot for menor do que o pivot, avance um elemento a direita
        while(array[i] < pivot) {
            
            
            i++;
        } 
     
        //Enquanto o elemento a direita do pivot for maior do que o pivot, avance um elemento a esquerda  
        while(array[j] > pivot){           
            j--;
        }
        if (i <= j) {
            //swap values using destructuring
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }      
    }
    return i;
}


let array = [3,5,1,6,4,7,2];
console.log(quickSort(array));
