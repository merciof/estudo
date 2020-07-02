package test;


import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import src.Autoridade;
import src.ComTitulo;
import src.FormatadorNome;
import src.GeneroInvalidoException;
import src.Informal;
import src.Respeitoso;

public class TestadorAutoridade {

	Autoridade _autoridade;
	
	@Before
	public void criarcaoAutoridade() {
		_autoridade = new Autoridade();
		_autoridade._nome = "Fulano";
		_autoridade._sobrenome = "de Tal";
		
	}
	
	@Test
	public void formatadorNomeRespeitosoMasculino() {
		
		FormatadorNome formatadorNome = new Respeitoso("masculino");
		_autoridade._formatadorNome = formatadorNome;
		assertEquals("Sr.Fulano", _autoridade._formatadorNome.formatarNome(_autoridade._nome, _autoridade._sobrenome));
	}
	
	@Test
	public void formatadorNomeRespeitosoFeminino() {
		
		FormatadorNome formatadorNome = new Respeitoso("feminino");
		_autoridade._formatadorNome = formatadorNome;
		assertEquals("Sra.Fulano", _autoridade._formatadorNome.formatarNome(_autoridade._nome, _autoridade._sobrenome));
	}
	
	@Test(expected = GeneroInvalidoException.class)
	public void formatadorNomeRespeitosoComGenoroInvalido() {
		
		FormatadorNome formatadorNome = new Respeitoso("");
		_autoridade._formatadorNome = formatadorNome;
		_autoridade._formatadorNome.formatarNome(_autoridade._nome, _autoridade._sobrenome);
	}
	
	@Test
	public void formatadorComTitulo() {
		
		FormatadorNome formatadorNome = new ComTitulo("Vossa Excelência");
		_autoridade._formatadorNome = formatadorNome;
		assertEquals("Vossa ExcelênciaFulanode Tal", _autoridade._formatadorNome.formatarNome(_autoridade._nome, _autoridade._sobrenome));
	}
	
	@Test
	public void formatadorInformal() {
		
		FormatadorNome formatadorNome = new Informal();
		_autoridade._formatadorNome = formatadorNome;
		assertEquals("Fulano", _autoridade._formatadorNome.formatarNome(_autoridade._nome, _autoridade._sobrenome));
	}

}
