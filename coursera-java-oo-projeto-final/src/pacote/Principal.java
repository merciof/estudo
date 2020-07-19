package pacote;

import java.util.Scanner;



//representa a classe com o método main(). É essa classe que é responsável por ler
//a entrada do usuário e por imprimir as informações no console. Nenhuma outra classe pode
//imprimir ou ler do console.
public class Principal {
	
	public static void main(String[] args) {
		
		
		String stringDoBancoDePalavras;
		
		String stringEmbaralhada;

		IMecanicaDoJogo mecanicaDoJogo = FabricaMecanicaDoJogo.getInstance("FACIL");
		
		BancoDePalavras bancoDePalavras = new BancoDePalavras();
		
		
		IEmbaralhador embaralhador = FabricaEmbaralhador.getInstance();
		
		Scanner scanner = new Scanner(System.in);
		
		
		//Obtenção de entrada de dado através do console
	    
	    while (mecanicaDoJogo.fimDoJogo() != true) {
	    	
	    	stringDoBancoDePalavras = bancoDePalavras.getPalavra();
			
			stringEmbaralhada = embaralhador.embaralhar(stringDoBancoDePalavras);
	    	
	    	System.out.println(stringDoBancoDePalavras);
	    	System.out.println(stringEmbaralhada);
	    	System.out.print("Qual é a palavra: ");
		    String stringDigitadaPeloJogador = scanner.nextLine(); 
		    
	    	if (mecanicaDoJogo.veriricarTentativa(stringDoBancoDePalavras, stringDigitadaPeloJogador)) {
				System.out.println("Você acertou!");
				mecanicaDoJogo.somarPonto();
			} else {
				System.out.println("Você errou!");
				mecanicaDoJogo.removerTentativa();
			}
		}
	    
	    System.out.println("Fim de jogo! A sua pontuação foi: " + mecanicaDoJogo.get_pontuacaoDoJogador());
	        
	}

}


