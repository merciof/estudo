 import { Arquivo  } from "./classes/arquivo.js";

let dataCriacao = new Date(); 

//criação de um arquivo
//atributos: nome, data de criação, protegido ou não
let a = new Arquivo('arquivo0', dataCriacao, 0);


a.adicionarBloco('dado1');
console.log(a.head);
a.adicionarBloco('dado2');
console.log(a.head.ponteiro);
a.adicionarBloco('dado3');
console.log(a.head.ponteiro.ponteiro);
a.adicionarBloco('dado4');
console.log(a.head.ponteiro.ponteiro.ponteiro);







