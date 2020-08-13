package repositorioDePontos;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


/**
 * 
 * @author merciof
 * 
 * 
 *
 */

public class Armazenamento {
	
	public File _arquivo;
	public FileWriter _fileWriter;
	public Scanner _leitor;
	
	
	public Armazenamento() {
		super();
		
		_arquivo = new File("repositorio_de_pontos.txt");
		
		try {
			_arquivo.createNewFile();
			//_leitor = new Scanner(_arquivo);
			_fileWriter = new FileWriter("repositorio_de_pontos.txt");
		
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}

	//Armazenar que um usuário recebeu uma quantidade de um tipo de ponto. 
	//Por exemplo: o usuário "guerra" recebeu "10" pontos do tipo "estrela"
	public void armazenarPontos(String nomeUsuario, String tipoDePonto, int quantidadeDePontos) {
		try {
			//os arquivo está sendo sobrescrito com novos dados
			_fileWriter = new FileWriter("repositorio_de_pontos.txt", true);
			_fileWriter.write(nomeUsuario + " " + tipoDePonto + " " + quantidadeDePontos + "\n");
			//_fileWriter.write(System.getProperty( "line.separator" ));
		    _fileWriter.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//Recuperar quantos pontos de um tipo tem um usuário. 
	public int getPontosDeUsuarioPorTipo(String nomeUsuario, String tipoDePonto) {
				
		try {
			_leitor = new Scanner(_arquivo);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String[] dado;
		int pontuacao = 0;
		
		while(_leitor.hasNextLine()) {
			
			String linha = _leitor.nextLine();
			
			dado =  linha.split(" ");
			
			if (dado[0].equals(nomeUsuario)) 
				if (dado[1].equals(tipoDePonto)) 
					pontuacao += Integer.parseInt(dado[2]);		
		}
		
		_leitor.close();
		
		return pontuacao;
	}
	
	//Retornar todos os usuários que já receberam algum tipo de ponto.
	public List<String> getUsuariosComPontuacao() {
		
		try {
			_leitor = new Scanner(_arquivo);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		String[] dado;
		
		List<String> usuariosComPontuacao = new ArrayList<>();
		
		
		while(_leitor.hasNextLine()) {
			
			String linha = _leitor.nextLine();
			
			dado =  linha.split(" ");
			
			if (!usuariosComPontuacao.contains(dado[0])) 
				usuariosComPontuacao.add(dado[0]);
			
		}	
			
					
		return usuariosComPontuacao;
	}
	
	//Retornar todos os tipos de ponto que já foram registrados para algum usuário.
	public List<String> getTiposDePontosRegistrados() {
		
		try {
			_leitor = new Scanner(_arquivo);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		String[] dado;
		
		List<String> tiposDePontos = new ArrayList<>();
		
		
		while(_leitor.hasNextLine()) {
			
			String linha = _leitor.nextLine();
			
			dado =  linha.split(" ");
			
			if (!tiposDePontos.contains(dado[1])) 
				tiposDePontos.add(dado[1]);
			
		}
		
		
		return tiposDePontos;
		
	}
	
}
