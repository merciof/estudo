
//Crie uma classe chamada Autoridade que possui atributos como nome, sobrenome e uma instância de FormatadorNome. Essa classe deve possuir um método getTratamento() que delega a formatação do nome para a instância de FormatadorNome.

public class Autoridade {
	
	String _nome;
	
	String _sobrenome;
	
	FormatadorNome _formatadorNome;
	
	String getTratamento(String nome, String sobrenome) {
		
		_formatadorNome.formatarNome(nome, sobrenome);
		
		return nome;}

}
