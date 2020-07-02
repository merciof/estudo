package src;

//Respeitoso: deve receber em seu construtor a informação se é masculino ou feminino, e retornar "Sr." ou "Sra." seguido do sobrenome

public class Respeitoso implements FormatadorNome {

	String _sexo;
	
	public Respeitoso(String sexo) {
		_sexo = sexo;
	}
	
	@Override
	public String formatarNome(String nome, String sobrenome) {
		if(_sexo == "masculino")
			return "Sr." + nome;
		if(_sexo == "feminino")
			return "Sra." + nome;

		throw new GeneroInvalidoException("Genero invalido");
	
	}

}
