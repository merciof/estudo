package caixaEletronico;
//
//Ao executar o método sacar(), e a execução for com sucesso, deve retornar a mensagem "Retire seu dinheiro". Se o valor sacado for maior que o saldo da conta, a classe CaixaEletronico deve retornar uma String dizendo "Saldo insuficiente".

public class CaixaEletronico {
	
	MockServicoRemoto _mockServicoRemoto;
	boolean _autenticado;
	
	public CaixaEletronico() {
		super();
		_mockServicoRemoto = MockServicoRemoto.getInstance();
		_autenticado = false;
	}

	public String logar(ContaCorrente contaCorrente, String login, String senha) {
		
		if (_mockServicoRemoto.recuperarConta(contaCorrente.numero).login == login
					&& _mockServicoRemoto.recuperarConta(contaCorrente.numero).senha  == senha) {
				_autenticado = true;
				return "Usuário Autenticado";
			}
		
			return "Não foi possível autenticar o usuário";
		
		//return "login ou senha invalidos";
	}

	public String sacar(ContaCorrente contaCorrente, float valor) {
		
		if (_autenticado) {
			
			if(_mockServicoRemoto.recuperarConta(contaCorrente.numero).getSaldo() < valor)
				return "Saldo insuficiente";
			
			float saldo = _mockServicoRemoto.recuperarConta(contaCorrente.numero).getSaldo();
			
			_mockServicoRemoto.recuperarConta(contaCorrente.numero).setSaldo(saldo - valor);
			
			_mockServicoRemoto.persistirConta(contaCorrente);
			
			return "Retire seu dinheiro";
		}
		
		return "Usuário não logado";
		
	}

	public String depositar(ContaCorrente contaCorrente, float valor) {
		
		if (_autenticado) {
			
			float saldo = _mockServicoRemoto.recuperarConta(contaCorrente.numero).getSaldo();
			
			_mockServicoRemoto.recuperarConta(contaCorrente.numero).setSaldo(saldo + valor);
			
			_mockServicoRemoto.persistirConta(contaCorrente);
			
			return "Retire seu dinheiro";
		}
		
		contaCorrente.setSaldo(contaCorrente.getSaldo() + valor);
		return "Depósito recebido com sucesso";
	}

	public Object saldo(ContaCorrente contaCorrente) {
		return "O saldo é R$" + contaCorrente.getSaldo();
	}

}
