package caixaEletronico;
//
//Ao executar o método sacar(), e a execução for com sucesso, deve retornar a mensagem "Retire seu dinheiro". Se o valor sacado for maior que o saldo da conta, a classe CaixaEletronico deve retornar uma String dizendo "Saldo insuficiente".

public class CaixaEletronico {
	
	MockServicoRemoto _mockServicoRemoto = MockServicoRemoto.getInstance();
	
//	public CaixaEletronico() {
//		super();
//		_mockServicoRemoto = new MockServicoRemoto();
//	}

	public String logar(ContaCorrente contaCorrente, String login, String senha) {
		
		if (_mockServicoRemoto.recuperarConta(contaCorrente.numero).login == login
					&& _mockServicoRemoto.recuperarConta(contaCorrente.numero).senha  == senha) {
				return "Usuário Autenticado";
			}
		
			return "Não foi possível autenticar o usuário";
		
		//return "login ou senha invalidos";
	}

	public String sacar(ContaCorrente contaCorrente, float valor) {
		if(contaCorrente.getSaldo() < valor)
			return "Saldo insuficiente";
		
		return "Retire seu dinheiro";
	}

	public String depositar(ContaCorrente contaCorrente, float valor) {
		contaCorrente.setSaldo(contaCorrente.getSaldo() + valor);
		return "Depósito recebido com sucesso";
	}

	public Object saldo(ContaCorrente contaCorrente) {
		return "O saldo é R$" + contaCorrente.getSaldo();
	}

}
