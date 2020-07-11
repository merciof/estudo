package caixaEletronico;

import java.util.HashMap;
import java.util.Map;

public class MockServicoRemoto implements ServicoRemoto {

	public static Map<Integer, ContaCorrente> _listaDeContas = new HashMap<>();
	
	private static MockServicoRemoto _mockServicoRemoto = null; 
	
	
	private MockServicoRemoto() {
		super();
	}
	
	public static MockServicoRemoto getInstance() {
		if (_mockServicoRemoto == null)
			return new MockServicoRemoto();
		
		return _mockServicoRemoto;
	}

	//O método persistirConta() da interface ServicoRemoto deve ser chamado apenas no caso de ser feito algum saque ou depósito com sucesso.	
	@Override
	public void persistirConta(ContaCorrente contaCorrente) {
		_listaDeContas.put(contaCorrente.numero, contaCorrente);
		
	}

	@Override
	public ContaCorrente recuperarConta(int numeroContaCorrente) {
		return _listaDeContas.get(numeroContaCorrente);
	}

}
