//algoritmo Fizz Buzz 
/*Recebe um número como parâmetro e imprime uma sequencia de naturais
de 1 até o número dado como entrada. Substituindo os divisíveis por
3 e 5 por fizzBuzz, os divisíveis por 3 por fizz e os divisíveis por
5 por Buzz*/

let num = 20;

for (let i = 1; i <= num; i = i + 1) {
    
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizBuzz');
        
    } else if (i % 3 === 0) {
        console.log('fizz');
        
    } else if(i % 5 === 0) {
        console.log('Buzz');
        
    } else {
        console.log(i);
        
    }
}


