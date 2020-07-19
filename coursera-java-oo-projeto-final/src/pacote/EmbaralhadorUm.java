package pacote;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class EmbaralhadorUm implements IEmbaralhador {

	//embaralha randomicamente os elementos da lista
	@Override
	public String embaralhar(String palavra) {

		List<String> list = new ArrayList<>();

		String stringSemEspacoEmBranco, aux;

		//adiciona os "caracteres" da palavra em uma lista
		for (int i = 0; i < palavra.length(); i++) {

			aux = palavra.substring(i, i + 1);

			list.add(aux);
		}

		//embaralha randomicamente os elementos da lista
		Collections.shuffle(list);

		stringSemEspacoEmBranco = removerEspacosEmBranco(list.toString());
		
		return removerVirgulasEColchetes(stringSemEspacoEmBranco);
	}


	 public String removerEspacosEmBranco(String string) {

		return string.replaceAll("\\s+", "");

	}


	public String removerVirgulasEColchetes(String string) {

		String aux = "";
		
		for (int i = 0; i < string.length(); i++) {
			
			if (string.charAt(i) != ',' && string.charAt(i) != '[' && string.charAt(i) != ']') 
				aux += string.charAt(i);
			
		}
		
		return aux;
	}

}
