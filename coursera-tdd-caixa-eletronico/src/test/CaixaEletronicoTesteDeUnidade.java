package test;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import caixaEletronico.CaixaEletronico;
import caixaEletronico.ContaCorrente;
import caixaEletronico.FalhaNoHardareException;
import caixaEletronico.MockHardware;
import caixaEletronico.MockServicoRemoto;

public class CaixaEletronicoTesteDeUnidade {

	
	CaixaEletronico _caixaEletronico;
	ContaCorrente _contaCorrente;
	MockServicoRemoto _mockServicoRemoto;
	MockHardware _mockHardware;
	MockHardware _mockHardwareComDefeito;
	
	
	@Before
	public void criacaoDeObjetos() {
		_caixaEletronico = new CaixaEletronico();
		_contaCorrente = new ContaCorrente();
		_mockServicoRemoto = MockServicoRemoto.getInstance();
		_mockHardware = new MockHardware(false);
		_mockHardwareComDefeito = new MockHardware(true);;
		_mockServicoRemoto._listaDeContas.put(1, _contaCorrente);
		_mockServicoRemoto.recuperarConta(1).numero = 1;
		_mockServicoRemoto.recuperarConta(1).login = "login";
		_mockServicoRemoto.recuperarConta(1).senha = "senha";
		
	}
	
	@Test
	public void testLogarComSucesso() throws FalhaNoHardareException {
		_mockHardware.pegarNumeroDaContaCartao();
		assertEquals("Usuário Autenticado", _caixaEletronico.logar(_contaCorrente, "login", "senha"));
	}
	
	@Test(expected = FalhaNoHardareException.class)
	public void testLogarComFalhaNoHardware() throws FalhaNoHardareException {
		_mockHardwareComDefeito.pegarNumeroDaContaCartao();
	}
	
	@Test
	public void testLogarDadosDeLoginIncorretos() {
		
		assertEquals("Não foi possível autenticar o usuário", _caixaEletronico.logar(_contaCorrente, "usu", "123"));
	}
	
	@Test
	public void testSacar() throws FalhaNoHardareException {
		_mockHardware.pegarNumeroDaContaCartao();
		_caixaEletronico.logar(_contaCorrente, "login", "senha");
		_mockServicoRemoto.recuperarConta(_contaCorrente.numero).setSaldo(500);
		_mockHardware.entregarDinheiro();
		assertEquals("Retire seu dinheiro", _caixaEletronico.sacar(_contaCorrente, 100));
	}
	
	@Test(expected = FalhaNoHardareException.class)
	public void testSacarComFalhaNoHardware() throws FalhaNoHardareException {
		_caixaEletronico.logar(_contaCorrente, "login", "senha");
		_mockServicoRemoto.recuperarConta(_contaCorrente.numero).setSaldo(500);
		_mockHardwareComDefeito.entregarDinheiro();
	}
	
	@Test
	public void testSacarSaldoInsuficiente() throws FalhaNoHardareException {
		_mockHardware.pegarNumeroDaContaCartao();
		_caixaEletronico.logar(_contaCorrente, "login", "senha");
		_mockServicoRemoto.recuperarConta(_contaCorrente.numero).setSaldo(50);
		assertEquals("Saldo insuficiente", _caixaEletronico.sacar(_contaCorrente, 100));
	}
	
	@Test
	public void testDepositar() throws FalhaNoHardareException {
		_mockHardware.pegarNumeroDaContaCartao();
		_caixaEletronico.logar(_contaCorrente, "login", "senha");
		_mockHardware.lerEnvelope();
		assertEquals("Retire seu dinheiro", _caixaEletronico.depositar(_contaCorrente, 50));
		assertEquals(50, _mockServicoRemoto.recuperarConta(_contaCorrente.numero).getSaldo(), 1);
	}
	
	@Test(expected = FalhaNoHardareException.class)
	public void testDepositarComFalhaNoHardware() throws FalhaNoHardareException {
		_caixaEletronico.logar(_contaCorrente, "login", "senha");
		_mockHardwareComDefeito.lerEnvelope();
		assertEquals("Retire seu dinheiro", _caixaEletronico.depositar(_contaCorrente, 50));
		assertEquals(50, _mockServicoRemoto.recuperarConta(_contaCorrente.numero).getSaldo(), 1);
	}
	
	
	@Test
	public void testSaldo() throws FalhaNoHardareException {
		_mockHardware.pegarNumeroDaContaCartao();
		_caixaEletronico.logar(_contaCorrente, "login", "senha");
		assertEquals("O saldo é R$0.0", _caixaEletronico.saldo(_contaCorrente));
	}

}
