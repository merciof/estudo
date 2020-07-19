package test;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import pacote.EmbaralhadorUm;
import pacote.IEmbaralhador;

public class EmbaralhadorUmTesteDeUnidade {

	EmbaralhadorUm _embaralhador;
	
	
	@Before
	public void criacaoDeObjeto() {
		_embaralhador = new EmbaralhadorUm();
	}
	
	@Test
	public void removerEspacosEmBranco() {

		assertEquals("[a,b,c,d]", _embaralhador.removerEspacosEmBranco("[a, b, c, d]"));
	}
	
	@Test
	public void removerVirgulasEColchetes() {
		
		assertEquals("abcd", _embaralhador.removerVirgulasEColchetes("[a,b,c,d]"));
	}
	
	
}
