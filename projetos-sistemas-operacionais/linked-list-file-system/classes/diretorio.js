//classe que abstrai o conceito de diretorio
export class Diretorio {
    constructor(nomeDiretorio){
        this.nomeDiretorio = nomeDiretorio;
        this.arquivos = [];
    }

    listarArquivos(){
        let i = 0;
        window.console.log('Arquivos do diretório: ' + this.nomeDiretorio);
        while(this.arquivos[i] != undefined) {
            window.console.log(this.arquivos[i].nome + ' ');
            i++;
        }
    }

    deletarArquivo(nome){
        let i = 0;
        let aux = 0;
        if(this.arquivos[i] === undefined) {
            window.console.log('Diretório ' + this.nomeDiretorio + ' está vazio.');
        } else {
            while(this.arquivos[i] != undefined){
                if(this.arquivos[i].nome === nome) {
                    //remove o elemento de índice i do array
                    this.arquivos.splice(i, 1);
                    window.console.log('Arquivo de nome ' + nome + ' foi excluído.');
                    aux = 1;
                }
                i++;
            }
            if (aux === 0) {
                window.console.log('Arquivo não existe no diretório ' + this.nomeDiretorio);
            }
        }
        
    }

}

