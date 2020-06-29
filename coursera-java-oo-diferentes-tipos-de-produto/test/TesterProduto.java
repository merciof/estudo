import static org.junit.Assert.*;

import org.junit.Test;

public class TesterProduto {

	
	@Test
	public void equalsHashCode() {
		Produto produto = new Produto();
		produto.codigo = 1;
		Produto produtoDois = new Produto();
		produtoDois.codigo = 2;
		Produto produtoTres = new Produto();
		produtoTres.codigo = 1;
		
		assertTrue(produto.equals(produtoTres));
		assertFalse(produto.equals(produtoDois));
		
		assertTrue(produto.hashCode() == produtoTres.hashCode());
		
		assertFalse(produto.hashCode() == produtoDois.hashCode());
		

	}

}
