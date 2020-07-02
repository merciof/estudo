package src;


//ComTítulo: deve receber em seu construtor o título e retornar o título seguido de nome e sobrenome. Exemplo: "Magnífico Pedro Cabral"

public class ComTitulo implements FormatadorNome {

	String _titulo;
	
	
	public ComTitulo(String _titulo) {
		super();
		this._titulo = _titulo;
	}


	@Override
	public String formatarNome(String nome, String sobrenome) {
		
		return _titulo + nome + sobrenome;
	}

}
