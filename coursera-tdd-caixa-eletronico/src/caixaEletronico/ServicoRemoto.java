package caixaEletronico;

public interface ServicoRemoto {

	public ContaCorrente recuperarConta(int numeroContaCorrente);
	
	public void persistirConta(ContaCorrente contaCorrente);
	
}
