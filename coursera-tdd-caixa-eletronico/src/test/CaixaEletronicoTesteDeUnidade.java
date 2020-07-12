package test;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import caixaEletronico.CaixaEletronico;
import caixaEletronico.ContaCorrente;
import caixaEletronico.MockServicoRemoto;

public class CaixaEletronicoTesteDeUnidade {

	
	CaixaEletronico _caixaEletronico;
	ContaCorrente _contaCorrente;
	MockServicoRemoto _mockServicoRemoto;
	
	@Before
	public void criacaoDeObjetos() {
		_caixaEletronico = new CaixaEletronico();
		_contaCorrente = new ContaCorrente();
		_mockServicoRemoto = MockServicoRemoto.getInstance();
		_mockServicoRemoto._listaDeContas.put(1, _contaCorrente);
		_mockServicoRemoto.recuperarConta(1).numero = 1;
		_mockServicoRemoto.recuperarConta(1).login = "login";
		_mockServicoRemoto.recuperarConta(1).senha = "senha";
		
	}
	
	@Test
	public void testLogarComSucesso() {
		
		assertEquals("Usuário Autenticado", _caixaEletronico.logar(_contaCorrente, "login", "senha"));
	}
	
	@Test
	public void testLogarFalha() {
		
		assertEquals("Não foi possível autenticar o usuário", _caixaEletronico.logar(_contaCorrente, "usu", "123"));
	}
	
	@Test
	public void testSacar() {
		_caixaEletronico.logar(_contaCorrente, "login", "senha");
		_mockServicoRemoto.recuperarConta(_contaCorrente.numero).setSaldo(500);
		assertEquals("Retire seu dinheiro", _caixaEletronico.sacar(_contaCorrente, 100));
	}
	
	@Test
	public void testSacarSaldoInsuficiente() {
		_caixaEletronico.logar(_contaCorrente, "login", "senha");
		_mockServicoRemoto.recuperarConta(_contaCorrente.numero).setSaldo(50);
		assertEquals("Saldo insuficiente", _caixaEletronico.sacar(_contaCorrente, 100));
	}
	
	@Test
	public void testDepositar() {
		_caixaEletronico.logar(_contaCorrente, "login", "senha");
		assertEquals("Retire seu dinheiro", _caixaEletronico.depositar(_contaCorrente, 50));
		assertEquals(50, _mockServicoRemoto.recuperarConta(_contaCorrente.numero).getSaldo(), 1);
	}
	
	@Test
	public void testSaldo() {
		_caixaEletronico.logar(_contaCorrente, "login", "senha");
		assertEquals("O saldo é R$0.0", _caixaEletronico.saldo(_contaCorrente));
	}

}
