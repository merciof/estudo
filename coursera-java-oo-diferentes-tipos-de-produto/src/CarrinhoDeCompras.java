import java.util.HashMap;
import java.util.Map;

public class CarrinhoDeCompras {

	Map<Produto, Integer> _listaDeProdutos;
	Float _precoTotal;
	
	
	
	public CarrinhoDeCompras() {
		super();
		_listaDeProdutos = new HashMap<Produto, Integer>();
		_precoTotal = 0f;
	}

	void adicionarProduto(Produto produto) {
		
		if (_listaDeProdutos.containsKey(produto)) {
			
			_listaDeProdutos.put(produto, _listaDeProdutos.get(produto) + 1);
			
			return;
		}
		
		_listaDeProdutos.put(produto, 1);
		
		
	}
	
	void removerProduto(Produto produto) {
		_listaDeProdutos.remove(produto);
	}
	
	
	float calcularValorTotalDaCompra() {
		for (Produto  produto : _listaDeProdutos.keySet() ) {
			_precoTotal += produto.preco;
		}
		
		return _precoTotal;
	}
	
}
