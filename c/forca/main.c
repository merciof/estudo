#include <stdio.h>
#include <string.h>

void abertura(){
    printf("*******************\n");
    printf("*  Jogo de Forca  *\n");
    printf("*******************\n");
};



int main(){

    char chute;
    char chutes[26];
    char palavra_secreta[20];
    int tentativas = 0;
    int achou = 0;

    sprintf(palavra_secreta,"progresso");
    do
    {
    
        abertura();
        
        //loop usado para varrer os caracteres da palavra secreta
        for(int i = 0; i < strlen(palavra_secreta); i++) {
            
            //verifica se o caractere chutado está contido da palavra secreta
            for(int j = 0; j < tentativas; j++) {
                if(chutes[j] == palavra_secreta[i]){
                    achou = 1;
                    break;
                }
            }

            if(achou){
                printf("%c ", palavra_secreta[i]);
            } else {
                printf("_ ");
            }
            achou = 0;
        }

        scanf(" %c",&chute);
        chutes[tentativas] = chute;
        tentativas++;


    } while (1);  
    

    return 0;
}