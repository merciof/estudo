 import { ListaEncadeada  } from "./lista-encadeada-de-blocos.js";

let ll = new ListaEncadeada();
ll.adicionarBloco('dado1');
console.log(ll.head);
ll.adicionarBloco('dado2');
console.log(ll.head.ponteiro);
ll.adicionarBloco('dado3');
console.log(ll.head.ponteiro.ponteiro);
ll.adicionarBloco('dado4');
console.log(ll.head.ponteiro.ponteiro.ponteiro);






