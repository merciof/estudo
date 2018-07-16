import { Bloco } from "./bloco.js";

//Esta classe representa um arquivo estruturado numa lista escadeada
export class Arquivo {
    constructor(nomeArquivo, dataCriacao, protegido) {
        //head e tail da lista escadeada
        this.head = null;
        this.tail = null;
        //atributos do arquivo
        this.nomeArquivo = nomeArquivo;
        this.dataCriacao = dataCriacao;
        this.protegido = protegido;
    }

    
    //método para adição de mais um bloco na lista de blocos do arquivo
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