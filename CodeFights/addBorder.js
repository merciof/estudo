/* Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"] */


function addBorder(picture) {

    let elemento = '';

    let func = function (element, index) {
        picture[index] = '*' + picture[index] + '*';
    };

    picture.forEach(func);

    for (let i = 0; i < picture[0].length; i = i + 1) {
        elemento = elemento + '*';
    }

    picture.push(elemento);
    picture.unshift(elemento);

    return picture;
}










