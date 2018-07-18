import { Arquivo  } from "./classes/arquivo.js";
import { Diretorio } from "./classes/diretorio.js";

let root = new Diretorio();

let dataCriacao = new Date(); 

//criação de um arquivo
//atributos: nome, data de criação, protegido ou não
let a = new Arquivo('arquivo0', dataCriacao, 0);

//inserção do arquivo no diretório root
root.arquivos.push(a);


a.adicionarBloco('0');
a.adicionarBloco('1');
a.adicionarBloco('1');
a.adicionarBloco('0');

window.console.log(a.dataCriacao);
window.console.log(a.exibirArquivo());










