package caixaEletronico;

public interface IHardware {

	String pegarNumeroDaContaCartao() throws FalhaNoHardareException;
	void entregarDinheiro() throws FalhaNoHardareException;
	void lerEnvelope() throws FalhaNoHardareException;
}
