/**
 * Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.
 */

function areSimilar(a, b) {
    var temp;

    if (a.toString() === b.toString()) {
        return true;
    } else {
        for (let i = 0; i < a.length; i = i + 1) {
            for (let j = 1; j < a.length; j = j + 1) {
                if (j > i) {
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;

                    if (a.toString() === b.toString()) {
                        return true;
                    }
                    a[j] = a[i];
                    a[i] = temp;
                }

            }
        }
        
            return false;
        
    }

}

let a = [1, 2, 3];
let b = [2, 1, 3];


console.log(areSimilar(a,b));
