package caixaEletronico;

import java.util.HashMap;
import java.util.Map;

public class MockServicoRemoto implements ServicoRemoto {

	Map<Integer, ContaCorrente> listaDeContas;
	
	
	public MockServicoRemoto() {
		super();
		this.listaDeContas = new HashMap<>();
	}

	@Override
	public void persistirConta(ContaCorrente contaCorrente) {
	
		
	}

	@Override
	public ContaCorrente recuperarConta(int numeroContaCorrente) {
		return listaDeContas.get(numeroContaCorrente);
	}

}
