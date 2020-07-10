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
	public void test() {
		fail("Not yet implemented");
	}

}
