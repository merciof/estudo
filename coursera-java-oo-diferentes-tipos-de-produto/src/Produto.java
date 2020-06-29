
public class Produto {
	String nome;
	int codigo;
	float preco;
	
 //	Sobrescreva os métodos equals() e hashCode() de Object (veja seção sobre esses métodos), de forma a serem considerados iguais instancias de Produto que possuam o mesmo código.
	
	public boolean equals(Object object) {
		
		Produto produto = (Produto) object;
		
		if(produto.codigo == this.codigo) 
			return true;
		
		
		return false;
		
	}
	
	public int hashCode() {
		return this.codigo;
	}
	
}
