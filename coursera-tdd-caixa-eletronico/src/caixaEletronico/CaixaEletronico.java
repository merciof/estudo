package caixaEletronico;

public class CaixaEletronico {

	
	public String logar(ContaCorrente contaCorrente, String login, String senha) {
		
		if(contaCorrente.login == login && contaCorrente.senha == senha)
			return "Usuário Autenticado";
		
		return "login ou senha invalidos";
	}

	public String sacar() {
		return "retorno sacar";
	}

	public String depositar() {
		return "retorno depositar";
	}

	public Object saldo() {
		return "retorno saldo";
	}

}
