//esta classe representa um bloco de arquivo no disco
export class Bloco {
    constructor(dado, ponteiro) {
        this.dado = dado;
        this.ponteiro = ponteiro;      
    }
}