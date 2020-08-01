package pacote;

public class EmbaralhadorInversor implements IEmbaralhador {

	@Override
	public String embaralhar(String palavra) {

		char[] caracteres = palavra.toCharArray();
		int indiceMaximo = caracteres.length - 1;
		
		char[] caracteresInvertidos = palavra.toCharArray();
		
		char aux;
		
		//Por que não funciona?
//		for (int i = 0; i < caracteres.length; i++) {
//			
//			aux = caracteres[indiceMaximo - i];
//			
//			caracteres[indiceMaximo - i] =  caracteres[i];		
//			
//			caracteres[i] = aux;
//			
//		}
		
		for (int i = indiceMaximo; i >= 0; i--) {
			
			caracteresInvertidos[indiceMaximo - i] = caracteres[i];
		}

		return new String(caracteresInvertidos);

	}
	
}
