package test;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import pacote.IMecanicaDoJogo;
import pacote.MecanicaDeJogoFacil;

public class MecanicaDoJogoFacilTesteDeUnidade {

	IMecanicaDoJogo mecanicaDoJogo;
	
	@Before
	public void criacaoDeObjetos() {
		mecanicaDoJogo = new MecanicaDeJogoFacil();
	}
	
	
	@Test
	public void get_pontuacaoDoJogador() {
		assertEquals(0, mecanicaDoJogo.get_pontuacaoDoJogador());
		mecanicaDoJogo.somarPonto();
		assertEquals(1, mecanicaDoJogo.get_pontuacaoDoJogador());
	}
	
	@Test
	public void somarPonto() {
		assertEquals(1, mecanicaDoJogo.somarPonto());
		assertEquals(2, mecanicaDoJogo.somarPonto());
		assertEquals(3, mecanicaDoJogo.somarPonto());
	}
	
	@Test
	public void removerTentativa() {
		assertFalse(mecanicaDoJogo.fimDoJogo());
		mecanicaDoJogo.removerTentativa();
		mecanicaDoJogo.removerTentativa();
		assertTrue(mecanicaDoJogo.fimDoJogo());
		
	}
	
	@Test
	public void veriricarTentativa() {
		
		assertTrue(mecanicaDoJogo.veriricarTentativa("x", "x"));
		assertFalse(mecanicaDoJogo.veriricarTentativa("x", "y"));
		
	}
	
	
	

}
