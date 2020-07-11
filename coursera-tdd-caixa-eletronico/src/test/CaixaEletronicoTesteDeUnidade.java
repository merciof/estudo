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
		_contaCorrente.numero = 1;
		_contaCorrente.login = "login";
		_contaCorrente.senha = "senha";
		_mockServicoRemoto = MockServicoRemoto.getInstance();
		_mockServicoRemoto._listaDeContas.put(_contaCorrente.numero, _contaCorrente);
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
		_contaCorrente.setSaldo(500);
		assertEquals("Retire seu dinheiro", _caixaEletronico.sacar(_contaCorrente, 100));
	}
	
	@Test
	public void testSacarSaldoInsuficiente() {
		_contaCorrente.setSaldo(50);
		assertEquals("Saldo insuficiente", _caixaEletronico.sacar(_contaCorrente, 100));
	}
	
	@Test
	public void testDepositar() {
		assertEquals("Depósito recebido com sucesso", _caixaEletronico.depositar(_contaCorrente, 50));
		assertEquals(50, _contaCorrente.getSaldo(), 1);
	}
	
	@Test
	public void testSaldo() {
		//assertEquals("retorno saldo", _caixaEletronico.saldo());
	}

}
