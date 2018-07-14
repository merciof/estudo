import { Bloco } from "./bloco-de-arquivo.js";

//Esta classe representa um arquivo estruturado numa lista encadeada
export class ListaEncadeada {
    constructor(nomeArquivo, dataCriacao, protegido) {
        this.head = null;
        this.tail = null;
        this.nomeArquivo = nomeArquivo;
        this.dataCriacao = dataCriacao;
        this.protegido = protegido;
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