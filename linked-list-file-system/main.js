 import { ListaEncadeada  } from "./classes/lista-encadeada-de-blocos.js";

let d = new Date(); 
let ll = new ListaEncadeada('arquivo0', d);
ll.adicionarBloco('dado1');
console.log(ll.head);
ll.adicionarBloco('dado2');
console.log(ll.head.ponteiro);
ll.adicionarBloco('dado3');
console.log(ll.head.ponteiro.ponteiro);
ll.adicionarBloco('dado4');
console.log(ll.head.ponteiro.ponteiro.ponteiro);

window.document.body.innerHTML = ll.dataCriacao;





