package pacote;

public class FabricaMecanicaDoJogo {

	public static IMecanicaDoJogo getInstance(String tipoDeMacanicaDoJogo) {
		
		if (tipoDeMacanicaDoJogo.equalsIgnoreCase("FACIL")) 
			return new MecanicaDeJogoFacil();
	
		if (tipoDeMacanicaDoJogo.equalsIgnoreCase("DIFICIL")) 
			return new MecanicaDeJogoDificil();
		
		return null;
		
	}
	
	
}
