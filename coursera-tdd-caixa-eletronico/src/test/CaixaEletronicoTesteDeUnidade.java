package test;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import caixaEletronico.CaixaEletronico;
import caixaEletronico.ContaCorrente;

public class CaixaEletronicoTesteDeUnidade {

	
	CaixaEletronico caixaEletronico;
	ContaCorrente contaCorrente;
	
	@Before
	public void criacaoDeObjetos() {
		this.caixaEletronico = new CaixaEletronico();
		this.contaCorrente = new ContaCorrente();
	}
	
	@Test
	public void testLogar() {
		contaCorrente.login = "usuario";
		contaCorrente.senha = "senha";
		assertEquals("Usuário Autenticado", caixaEletronico.logar(contaCorrente, "usuario", "senha"));
	}
	
	@Test
	public void testSacar() {
		assertEquals("retorno sacar", caixaEletronico.sacar());
	}
	
	@Test
	public void testDepositar() {
		assertEquals("retorno depositar", caixaEletronico.depositar());
	}
	
	@Test
	public void testSaldo() {
		assertEquals("retorno saldo", caixaEletronico.saldo());
	}

}
