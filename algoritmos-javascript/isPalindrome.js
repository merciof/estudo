function isPalindrome(string) {
    //transforma a cadeia dada como entrada toda em letras minúsculas
    string = string.toLowerCase();
    //array que recebe os elementos, um a um, da cadeia de caracteres 'string'
    let charactersArr = string.split('');
    //validCharacters recebe, um a um, os caracteres tidos como validos
    let validCharacters = 'abcdefghijklmnopqrstuvwxz'.split('');
    let lettersArr = [];

    charactersArr.forEach(function(char){
        //se o caracter estiver contido na lista de caracteres validos
        if(validCharacters.indexOf(char) > -1) {
            //insira-o no arranjo letters
            lettersArr.push(char);
        }
    });

    //se a cadeia for igual a ela mesma na ordem inversa
    //ou seja, se é uma palíndrome, retorne true
    if(lettersArr.join('') === lettersArr.reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('casa'));
console.log(isPalindrome('asa'));


