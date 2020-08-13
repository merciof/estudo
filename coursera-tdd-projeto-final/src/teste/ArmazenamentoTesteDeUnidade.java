package teste;

import static org.junit.Assert.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import repositorioDePontos.*;

public class ArmazenamentoTesteDeUnidade {

	
	//add criacao de objeto armazenamento
	
	Armazenamento _armazenamento;
	
	@Before
	public void criaçãoDeObjetos() {
		
		_armazenamento = new Armazenamento();
	}
	

	@Test
	public void getPontosEstrelaDeUsuario() 
	{
		_armazenamento.armazenarPontos("mercio", "estrela", 10);
		
		assertEquals(10, _armazenamento.getPontosDeUsuarioPorTipo("mercio", "estrela"));
		
	}
	
	@Test
	public void getPontosMoedaDeUsuario() 
	{
		_armazenamento.armazenarPontos("mercio", "moeda", 15);
		_armazenamento.armazenarPontos("mercio", "moeda", 10);
		
		
		assertEquals(25, _armazenamento.getPontosDeUsuarioPorTipo("mercio", "moeda"));
		

	}
	
	@Test
	public void getUsuariosComPontuacao() 
	{
		_armazenamento.armazenarPontos("mercio", "moeda", 15);
		
		_armazenamento.armazenarPontos("jose", "moeda", 15);
		
		List<String> usuarios = new ArrayList<>();
		
		usuarios.add("mercio");
		
		usuarios.add("jose");
		
		assertEquals(usuarios, _armazenamento.getUsuariosComPontuacao());
	}
	
	@Test
	public void getTiposDePontos() 
	{
		_armazenamento.armazenarPontos("mercio", "moeda", 15);
		
		_armazenamento.armazenarPontos("jose", "estrela", 15);
		
		List<String> tiposDePontos = new ArrayList<>();
		
		tiposDePontos.add("moeda");
		
		tiposDePontos.add("estrela");
		
		assertEquals(tiposDePontos, _armazenamento.getTiposDePontosRegistrados());
	}
	

}
