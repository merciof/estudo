package caixaEletronico;
//
//Ao executar o método sacar(), e a execução for com sucesso, deve retornar a mensagem "Retire seu dinheiro". Se o valor sacado for maior que o saldo da conta, a classe CaixaEletronico deve retornar uma String dizendo "Saldo insuficiente".

public class CaixaEletronico {

	
	public String logar(ContaCorrente contaCorrente, String login, String senha) {
		
		if(contaCorrente.login == login && contaCorrente.senha == senha)
			return "Usuário Autenticado";
		
		return "login ou senha invalidos";
	}

	public String sacar(ContaCorrente contaCorrente, float valor) {
		if(contaCorrente.getSaldo() < valor)
			return "Saldo insuficiente";
		
		return "Retire seu dinheiro";
	}

	public String depositar() {
		return "retorno depositar";
	}

	public Object saldo() {
		return "retorno saldo";
	}

}
