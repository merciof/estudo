//é assumido que não há pontuação e que todas as letras são minúsculas


function harmlessRansomNote(noteText, magazineText) {
    let noteArr = noteText.split(' ');
    let magazineArr = magazineText.split(' ');
    let magazineObj = {}; //hash table

    magazineArr.forEach(function(palavra){
        //caso a palavra nao esteja contida no objeto
        if (!magazineObj[palavra]) {
            //a propriedade referente a quantidade de ocorrencias
            //da palavra no texto recebe 0
            magazineObj[palavra] = 0;            
        }
        //a propriedade referente a quantidade de ocorrencias
        //da palavra no texto recebe + 1
        magazineObj[palavra] = magazineObj[palavra] + 1;
    });

    let noteIsPossible = true;
    noteArr.forEach(function(palavra){
        if(magazineObj[palavra]) {
            magazineObj[palavra]--;
            if(magazineObj[palavra] < 0) {
                noteIsPossible = false;
            }
        } else {
            noteIsPossible = false;
        }
        
    });
};

let noteText = 'this is a secret note for you from a secret admirer';
let magazineText = 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited';

console.log(harmlessRansomNote(noteText, magazineText));

