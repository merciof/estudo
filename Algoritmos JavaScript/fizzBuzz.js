

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


