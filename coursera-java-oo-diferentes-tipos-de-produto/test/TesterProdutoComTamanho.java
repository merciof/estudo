import static org.junit.Assert.*;

import org.junit.Test;

public class TesterProdutoComTamanho {

	@Test
	public void equalsAndHashCoded() {
	
			ProdutoComTamanho produtoComTamanho = new ProdutoComTamanho();
			
			produtoComTamanho.codigo = 1;
			produtoComTamanho.tamanho = "P";
			
			ProdutoComTamanho produtoComTamanhoDois = new ProdutoComTamanho();
			
			produtoComTamanhoDois.codigo = 1;
			produtoComTamanhoDois.tamanho = "G";
			
			ProdutoComTamanho produtoComTamanhoTres = new ProdutoComTamanho();
			
			produtoComTamanhoTres.codigo = 1;
			produtoComTamanhoTres.tamanho = "P";
			
			assertFalse(produtoComTamanho.equals(produtoComTamanhoDois));
			assertTrue(produtoComTamanho.equals(produtoComTamanhoTres));
			
	}

}
