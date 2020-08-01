package pacote;

public class MecanicaDeJogoFacil implements IMecanicaDoJogo {

	int _numeroMaximoDeTentativas;
	
	int _pontuacaoPorAcerto;
	
	int _pontuacaoDoJogador;
	

	public MecanicaDeJogoFacil() {
		super();
		_numeroMaximoDeTentativas = 3;
		_pontuacaoPorAcerto = 20;
		_pontuacaoDoJogador = 0;
	}
	

	public int get_pontuacaoDoJogador() {
		return _pontuacaoDoJogador;
	}


	@Override
	public int somarPonto() {
		// TODO Auto-generated method stub
		return _pontuacaoDoJogador += _pontuacaoPorAcerto;
	}



	@Override
	public int removerTentativa() {
		// TODO Auto-generated method stub
		return _numeroMaximoDeTentativas -= 1;
	}


	@Override
	public boolean fimDoJogo() {
		if ( _numeroMaximoDeTentativas > 0) 
			return false;
		
		return true;
	}

	@Override
	public boolean veriricarTentativa(String stringDoBancoDePalavras, String stringDigitadaPeloJogador) {
		
		return stringDoBancoDePalavras.equalsIgnoreCase(stringDigitadaPeloJogador);
	}

	
}
