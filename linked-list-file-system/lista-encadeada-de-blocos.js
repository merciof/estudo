import { Bloco } from "./bloco-de-arquivo.js";

export class ListaEncadeada {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    adicionarBloco(dado){
        let novoBloco = new Bloco(dado, null);
        if(this.tail) {
            this.tail.ponteiro = novoBloco;
            this.tail = novoBloco;
        } else {
            this.head = novoBloco;
            this.tail = novoBloco;
        }  
    }
}