package test;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import pacote.EmbaralhadorRandomico;
import pacote.IEmbaralhador;

public class EmbaralhadorRandomicoTesteDeUnidade {

	EmbaralhadorRandomico _embaralhador;
	
	
	@Before
	public void criacaoDeObjeto() {
		_embaralhador = new EmbaralhadorRandomico();
	}
	
	@Test
	public void removerEspacosEmBranco() {

		assertEquals("[a,b,c,d]", _embaralhador.removerEspacosEmBranco("[a, b, c, d]"));
	}
	
	@Test
	public void removerVirgulasEColchetes() {
		
		assertEquals("abcd", _embaralhador.removerVirgulasEColchetes("[a,b,c,d]"));
	}
	
	//como testar uma função randômica?
	@Test
	public void embaralhar() {
		
		//assertEquals(_embaralhador.embaralhar("abcd"));
	}
	
	
}
