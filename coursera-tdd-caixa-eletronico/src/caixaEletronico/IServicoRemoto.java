package caixaEletronico;

public interface IServicoRemoto {

	public ContaCorrente recuperarConta(int numeroContaCorrente);
	
	public void persistirConta(ContaCorrente contaCorrente);
	
}
