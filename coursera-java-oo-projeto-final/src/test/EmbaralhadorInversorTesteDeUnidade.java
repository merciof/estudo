package test;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import pacote.EmbaralhadorInversor;


public class EmbaralhadorInversorTesteDeUnidade {

	EmbaralhadorInversor _embaralhador;
	
	@Before
	public void criacaoDeObjeto() {
		_embaralhador = new EmbaralhadorInversor();
	}
	
	
	@Test
	public void embaralhar() {
		assertEquals("dcba", _embaralhador.embaralhar("abcd"));
	}

}
