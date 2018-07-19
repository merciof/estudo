import { Bloco } from "./bloco.js";

//Esta classe representa um arquivo estruturado numa lista escadeada
export class Arquivo {
    constructor(nome, dataCriacao, protegido, dado) {
        //head e tail da lista escadeada
        this.head = null;
        this.tail = null;
        //atributos do arquivo
        this.nome = nome;
        this.dataCriacao = dataCriacao;
        this.protegido = protegido;
        this.dado = dado;
    }

    exibirAtributos(){
        window.console.log('Atributos do arquivo: \n');
        window.console.log('Nome: ' + this.nome);
        window.console.log('Data de criação: ' + this.dataCriacao);
        window.console.log('Protegido: ' + this.protegido);
    }

    //aloca os dados inseridos na entrada, um bit por bloco 
    alocarBlocos(){
        let i = 0;
        while (this.dado.split('')[i] != undefined) {
            let novoBloco = new Bloco(this.dado.split('')[i], null);
            if (this.tail) {
                this.tail.ponteiro = novoBloco;
                this.tail = novoBloco;
            } else {
                this.head = novoBloco;
                this.tail = novoBloco;
            }
            i++;
        }
        
    }
    
    //método para adição de mais um bloco na lista de blocos do arquivo
    adicionarBloco(){
        let novoBloco = new Bloco(0, null);
        if(this.tail) {
            this.tail.ponteiro = novoBloco;
            this.tail = novoBloco;
        } else {
            this.head = novoBloco;
            this.tail = novoBloco;
        }  
    }

    //método que percorre a lista encadeada e retorna o conteudo do arquivo
    exibirConteudoDoArquivo(){
        let noAtual = this.head;
        let dados = '';
        
        if(noAtual === null) {
            window.console.log('arquivo vazio');
        } else {
            while(noAtual){
                dados+=noAtual.bit;
                noAtual = noAtual.ponteiro;
            } 
        }
        window.console.log(dados);    
    }

    exibirBlocos(){
        let noAtual = this.head;
        let cont = 0; 
        if(noAtual === null) {
            window.console.log('arquivo vazio');
        } else {
            while(noAtual){
               window.console.log('Bloco ' + cont); 
               window.console.log('Bit armazenado: ' + noAtual.bit + '\n');
               noAtual = noAtual.ponteiro;
               cont++;
            } 
        }
    }

    renomearArquivo(novoNome){
        this.nome = novoNome;
    }

    // deletarArquivo(){
    //     if(this.protegido === 1) {
    //         window.console.log('Impossível deletar. Arquivo protegido');
    //     } else {
    //         this.head = null;
    //         this.tail = null;
    //     }
    // }
}