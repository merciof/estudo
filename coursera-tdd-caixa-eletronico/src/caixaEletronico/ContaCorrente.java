package caixaEletronico;

public class ContaCorrente {
	
	int numero;
	
	float saldo;
	
	String login;
	
	String senha;
	
	public void saque(float valorASerSacado) {
		this.saldo = this.saldo - valorASerSacado;
	}
	
	public void deposito(float valorASerDepositado) {
		this.saldo += valorASerDepositado;
	}

	public float getSaldo() {
		return saldo;
	}

	public void setSaldo(float saldo) {
		this.saldo = saldo;
	}
	
	

}
