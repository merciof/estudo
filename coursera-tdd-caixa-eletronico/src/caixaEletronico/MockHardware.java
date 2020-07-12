package caixaEletronico;

public class MockHardware implements IHardware {

	boolean hardwareFalho;
	
	public MockHardware(boolean falha) {
		hardwareFalho = falha;
	}

	@Override
	public String pegarNumeroDaContaCartao() throws FalhaNoHardareException {
		// ler o número da conta do cartão para o login (retorna uma String com o número da conta)	
		if (hardwareFalho) {
			throw new FalhaNoHardareException("Falha na entrega do dinheiro.");
		}
		
		return "numero";
	}

	 
	@Override
	public void entregarDinheiro() throws FalhaNoHardareException {
		// entrega o dinheiro no caso do saque (retorna void)
		if (hardwareFalho) {
			throw new FalhaNoHardareException("Falha na entrega do dinheiro.");
		}
	}

	@Override
	public void lerEnvelope() throws FalhaNoHardareException {
		// recebe o envelope com dinheiro na operação de depósito (retorna void)
		if (hardwareFalho) {
			throw new FalhaNoHardareException("Falha na leitura do envelope.");
		}
	}

}
