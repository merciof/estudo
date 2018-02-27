
/*Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.*/


function isIncreasingSequence(acc, element, indice, sequence) {
    if (indice != sequence.length - 1 && acc === true) {
        //se o elemento for maior ou igual que o proximo da sequencia
        if (element > sequence[indice + 1] || element === sequence[indice + 1] ) {
            return acc = false;
        } else {
            return acc;
        }
    } else {
        return acc;
    }
}

function almostIncreasingSequence(sequence) {
    
    let result = false;
    let i = 0;
    let aux;
       
    if(sequence.reduce(isIncreasingSequence, true) === false) {
        while (result != true && i < sequence.length) {
            aux = sequence.splice(i, 1);
            if (sequence.reduce(isIncreasingSequence, true)) {
                result = true;
            } else {
                sequence.splice(i, 0, aux[0]);
            }
            i = i + 1;
        }   
        return result;
    } else {
        return true;
    }
}
    

console.log(almostIncreasingSequence(sequence));



    











