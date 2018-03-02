//é assumido que não há pontuação e que todas as letras são minúsculas


function harmlessRansomNote(noteText, magazineText) {
    let noteArr = noteText.split(' ');
    let magazineArr = magazineText.split(' ');
    let magazineObj = {}; //hash table

    magazineArr.forEach(function(word){
        //caso a palavra nao esteja contida no objeto
        if (!magazineObj[word]) {
            //a propriedade referente a quantidade de ocorrencias
            //da palavra no texto recebe 0
            magazineObj[word] = 0;            
        }
        //a propriedade referente a quantidade de ocorrencias
        //da palavra no texto recebe + 1
        magazineObj[word] = magazineObj[word] + 1;
    });

    return magazineObj;
};

console.log(harmlessRansomNote('','ola, este eh um texto sobre o vazio sobre este este texto'));

