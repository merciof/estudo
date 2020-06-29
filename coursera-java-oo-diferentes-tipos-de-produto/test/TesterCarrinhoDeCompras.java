import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class TesterCarrinhoDeCompras {
	
	CarrinhoDeCompras _carrinhoDeCompras;
	Produto _produto;
	ProdutoComTamanho _produtoComTamanho;
	
	@Before
	public void criacaoObjetos() {
		_carrinhoDeCompras = new CarrinhoDeCompras();
		_produto = new Produto();
		_produto.codigo = 123;
		_produtoComTamanho = new ProdutoComTamanho();
		_produtoComTamanho.codigo = 1234;
		_produtoComTamanho.tamanho = "P";
	}

	@Test
	public void adicionarProduto() {
		
		_carrinhoDeCompras.adicionarProduto(_produto);
		assertTrue(_carrinhoDeCompras._listaDeProdutos.containsKey(_produto));
		
		_carrinhoDeCompras.adicionarProduto(_produtoComTamanho);
		assertTrue(_carrinhoDeCompras._listaDeProdutos.containsKey(_produtoComTamanho));
		
	}
	
	@Test
	public void adicionarProdutoRepetido() {
		
		_carrinhoDeCompras.adicionarProduto(_produto);
		assertTrue(_carrinhoDeCompras._listaDeProdutos.containsKey(_produto));
		assertEquals((Integer) 1, _carrinhoDeCompras._listaDeProdutos.get(_produto));
		
		_carrinhoDeCompras.adicionarProduto(_produto);
		assertEquals((Integer) 2, _carrinhoDeCompras._listaDeProdutos.get(_produto));
		
		_carrinhoDeCompras.adicionarProduto(_produtoComTamanho);
		assertEquals((Integer) 1, _carrinhoDeCompras._listaDeProdutos.get(_produtoComTamanho));
		
		_carrinhoDeCompras.adicionarProduto(_produtoComTamanho);
		assertEquals((Integer) 2, _carrinhoDeCompras._listaDeProdutos.get(_produtoComTamanho));
		
	}
	
	@Test
	public void adicionarProdutoComTamanhoRepetido() {
		
		_carrinhoDeCompras.adicionarProduto(_produtoComTamanho);
		assertTrue(_carrinhoDeCompras._listaDeProdutos.containsKey(_produtoComTamanho));
		assertEquals((Integer) 1, _carrinhoDeCompras._listaDeProdutos.get(_produtoComTamanho));
		
		_carrinhoDeCompras.adicionarProduto(_produtoComTamanho);
		assertEquals((Integer) 2, _carrinhoDeCompras._listaDeProdutos.get(_produtoComTamanho));
		
		_carrinhoDeCompras.adicionarProduto(_produtoComTamanho);
		assertEquals((Integer) 3, _carrinhoDeCompras._listaDeProdutos.get(_produtoComTamanho));
		
	}
	
	@Test
	public void removerProduto() {
		
		_carrinhoDeCompras.adicionarProduto(_produto);
		assertTrue(_carrinhoDeCompras._listaDeProdutos.containsKey(_produto));
		_carrinhoDeCompras.removerProduto(_produto);
		assertFalse(_carrinhoDeCompras._listaDeProdutos.containsKey(_produto));
		
		_carrinhoDeCompras.adicionarProduto(_produtoComTamanho);
		assertTrue(_carrinhoDeCompras._listaDeProdutos.containsKey(_produtoComTamanho));
		_carrinhoDeCompras.removerProduto(_produtoComTamanho);
		assertFalse(_carrinhoDeCompras._listaDeProdutos.containsKey(_produtoComTamanho));
		
	}
	

	
	@Test
	public void calcularValorCompra() {
		
		_produto.preco = 50;
		_produtoComTamanho.preco = 100;
		
		Produto produtoDois = new Produto();
		produtoDois.preco = 100;
		produtoDois.codigo = 1234;
		
		_carrinhoDeCompras.adicionarProduto(_produto);
		assertTrue(_carrinhoDeCompras._listaDeProdutos.containsKey(_produto));
		
		_carrinhoDeCompras.adicionarProduto(produtoDois);
		assertTrue(_carrinhoDeCompras._listaDeProdutos.containsKey(produtoDois));
		
		_carrinhoDeCompras.adicionarProduto(_produtoComTamanho);
	
		
		assertEquals(250, _carrinhoDeCompras.calcularValorTotalDaCompra(), 0.1);
	}

}
