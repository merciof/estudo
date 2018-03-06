function caesarCipher(str, num) {
    num = num % 26;
    //lowerCaseString recebe a string dada como entrada em letras minúsculas
    let lowerCaseString = str.toLowerCase();
    //alphabet recebe um array com as letras do alfabeto, uma a uma
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    //variável que irá guardar a string cifrada
    let newString = ' ';

    for(let i = 0; lowerCaseString.length; i = i + 1) {
        let currentLetter = lowerCaseString[i];
        //se o elemento atual for um espaço vazio
        //adicione-o a nova string pule para a proxima iteração
        if(currentLetter === ' ') {
            newString += currentLetter;
            continue;
        }
        //variável currentIndex recebe o indice da letra atual referente 
        //a sua posição no array  alphabet
        let currentIndex = alphabet.indexOf(currentLetter);
        //indice ao qual a letra atual deve ser convertida
        let newIndex = currentIndex + num;

        if(newIndex > 25) {
            newIndex = newIndex - 26;
        }
        if(newIndex < 0) {
            newIndex = 26 + newIndex;
        }

        if(str[i] === str[i].toUpperCase()) {
            newString += alphabet[newIndex].toLocaleUpperCase();
        } else {
            newString += alphabet[newIndex];
        }
    }
    return newString;
}

console.log('teste');
