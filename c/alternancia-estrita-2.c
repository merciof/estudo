/*UFRPE - Universidade Federal Rural de Pernambuco
Aluno: Mércio Andrade Filho
Implementação de algoritmo de alternância estrita para solução do
problema da seção crítica
Referência: Fundamentos de Sistemas Operacionais, Silberschatz */

#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

//codigo para imprimmir cores no terminal
#define RED     "\033[31m"
#define GREEN   "\033[32m"
#define RESET   "\033[0m"
#define BOLDWHITE   "\033[1m\033[37m"

//contador é a variável golbal compartilhada acessada/alterada na seção crítica
int contador = 0; 

//variável global usada para sinalizar o turno corrente
int turno = 0;

void delay()
{
    int i, j, k, valor = 1000;

    for (i = 0; i < valor; i++)
    {
        for (j = 0; j < valor; j++)
        {
            for (k = 0; k < valor; k++)
            {
                valor = valor;
            }
        }
    }
}

void *processo_zero(void *arg)
{
    int contador_thread_zero = 0;

    while (contador_thread_zero < 5)
    { 
        //espera até seja o turnoo seja igual a 0
        while (turno != 0) {}
 
        printf("********** Executando " RED "SEÇÂO CRÌTICA" RESET " da Thread "BOLDWHITE "ZERO *********** \n" RESET);
        printf("\n");
        //região crítica
        contador = contador + 1;
        printf("Variável compartilhada acrescida de uma unidade: contador = %d\n", contador);
        printf("\n");
        printf("**************************************************************\n");
        delay();
        printf("\n");
        printf("turno setado para 1\n");
        
        turno = 1;
        

        printf("\n");
        printf("Executando a " GREEN "seção não crítica" RESET " da thread " BOLDWHITE "ZERO \n" RESET);
        printf("\n");
        contador_thread_zero += 1;
        delay();
    }
}

void *processo_um(void *arg)
{
    int contador_thread_um = 0;
    while (contador_thread_um < 5)
    {
        //espera até seja o turnoo seja igual a 0
        while (turno != 1) {}
        
        printf("********** Executando " RED "SEÇÂO CRÌTICA" RESET " da Thread "BOLDWHITE "UM *********** \n" RESET);
        //região crítica
        contador = contador + 1;
        printf("\n"); 
        printf("Variável compartilhada acrescida de uma unidade: contador = %d\n", contador);
        printf("\n");
        printf("************************************************************\n");
        delay();
        printf("\n");
        printf("turno setado para 0\n");
        
        turno = 0;
        
        printf("\n");
        printf("Executando a " GREEN "seção não crítica" RESET " da thread " BOLDWHITE "UM \n" RESET);
        printf("\n");
        contador_thread_um += 1;
        delay();
    }
}

int main()
{   
    pthread_t threads[1];
    int arg[1], x;

    //função da biblioteca pthreads para a criação de threads
    pthread_create(&threads[0], NULL, processo_zero, (void *)&arg[0]);
    pthread_create(&threads[1], NULL, processo_um, (void *)&arg[1]);

    pthread_join(threads[0], NULL);
    pthread_join(threads[1], NULL);

    scanf("%d",&x);
    printf("\n");
    return 0;
}
