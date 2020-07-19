package pacote;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.Random;

//classe que possui um método que retorna uma palavra retirada
//aleatóriamente de uma lista de palavras lida a partir de um arquivo.
public class BancoDePalavras {
	

	private List<String> lines = null;
	
	private Random rand;
	
	public BancoDePalavras() {
		super();
		rand = new Random();
		
		try {
	        lines = Files.readAllLines(new File("banco-de-palavras.txt").toPath());
	    } catch (IOException e) {
	        e.printStackTrace();
	    }
	}
	
	protected String getPalavra() {
		return lines.get(rand.nextInt(lines.size()));
	}
	
}
