package pacote;

import java.util.Random;

//possui um método que retorna um embaralhador
//aleatóriamente.
public class FabricaEmbaralhador {
	
	static Random randon = new Random();
	static int limite = 20;
	static int valorUm = 0;
	static int valorDois = 0;
	
	static void gerarAleatoriedade() {
		valorUm = randon.nextInt(limite);
		valorDois = randon.nextInt(limite);
	}
	
	
	static IEmbaralhador getInstance() {
		
		gerarAleatoriedade();
		
		if(valorUm > valorDois)
			return new EmbaralhadorRandomico();
		else
			return new EmbaralhadorInversor();
	}
}
