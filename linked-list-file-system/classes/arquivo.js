import { Bloco } from "./bloco.js";

//Esta classe representa um arquivo estruturado numa lista escadeada
export class Arquivo {
    constructor(nome, dataCriacao, protegido) {
        //head e tail da lista escadeada
        this.head = null;
        this.tail = null;
        //atributos do arquivo
        this.nome = nome;
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

    //método que percorre a lista encadeada e retorna o conteudo do arquivo
    exibirArquivo(){
        let noAtual = this.head;
        let dados = '';
        
        if(noAtual === null) {
            window.console.log('arquivo vazio');
        } else {
            while(noAtual){
                dados+=noAtual.dado;
                noAtual = noAtual.ponteiro;
            } 
        }
        return dados;    
    }

    deletar(){
        
    }
}