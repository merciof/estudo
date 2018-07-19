import { Arquivo  } from "./classes/arquivo.js";
import { Diretorio } from "./classes/diretorio.js";

let root = new Diretorio();

let dataCriacao = new Date(); 

//criação de um arquivo
//atributos: nome, data de criação, protegido
let a = new Arquivo('arquivo0', dataCriacao, 0, 'mercio');

//inserção do arquivo no diretório root
root.arquivos.push(a);

a.alocarBlocos();
a.exibirBlocos();

// window.console.log(a.dataCriacao);











