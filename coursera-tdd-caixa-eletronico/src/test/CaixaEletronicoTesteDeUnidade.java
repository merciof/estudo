package test;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import caixaEletronico.CaixaEletronico;

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
		assertEquals("retorno logar", caixaEletronico.logar());
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
