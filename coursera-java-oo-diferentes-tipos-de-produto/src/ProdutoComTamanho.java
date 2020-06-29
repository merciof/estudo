
public class ProdutoComTamanho extends Produto {
	String tamanho;
	
//	um produto com mesmo código e tamanhos diferentes são considerados diferentes.
	
	public boolean equals(Object object) {
		
		if(!(object instanceof ProdutoComTamanho))
			return false;
		
		ProdutoComTamanho produtoComTamanho = (ProdutoComTamanho) object;
		
		if( (produtoComTamanho.codigo == this.codigo) && produtoComTamanho.tamanho.equals(this.tamanho))
			return true;
		
		return false;
	}
	
	public int hashCode() {
		return this.codigo;
	}
	
}
