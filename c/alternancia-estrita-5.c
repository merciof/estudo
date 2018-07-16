/*UFRPE - Universidade Federal Rural de Pernambuco
Aluno: Mércio Andrade Filho
Implementação de algoritmo de alternância estrita para solução do
problema da seção crítica.
São criadas 5 threads e executadas de forma alternada, com espera ativa (busy wait), 
com base nao valor da variável turno. 
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
//turno é inicializado como 0
//permitindo a execução da thread 0
int turno = 0;

//função usada para criar um delay de alguns segundos
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
    //contador para tornar finito o numero de execução da thread
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
        printf("turno setado para 2\n");
        
        turno = 2;
        
        printf("\n");
        printf("Executando a " GREEN "seção não crítica" RESET " da thread " BOLDWHITE "UM \n" RESET);
        printf("\n");
        contador_thread_um += 1;
        delay();
    }
}

void *processo_dois(void *arg)
{
    int contador_thread_um = 0;
    while (contador_thread_um < 5)
    {
        //espera até seja o turnoo seja igual a 0
        while (turno != 2) {}
        
        printf("********** Executando " RED "SEÇÂO CRÌTICA" RESET " da Thread "BOLDWHITE "DOIS *********** \n" RESET);
        //região crítica
        contador = contador + 1;
        printf("\n"); 
        printf("Variável compartilhada acrescida de uma unidade: contador = %d\n", contador);
        printf("\n");
        printf("************************************************************\n");
        delay();
        printf("\n");
        printf("turno setado para 3\n");
        
        turno = 3;
        
        printf("\n");
        printf("Executando a " GREEN "seção não crítica" RESET " da thread " BOLDWHITE "DOIS \n" RESET);
        printf("\n");
        contador_thread_um += 1;
        delay();
    }
}

void *processo_tres(void *arg)
{
    int contador_thread_um = 0;

    while (contador_thread_um < 5)
    {
        //espera até seja o turnoo seja igual a 0
        while (turno != 3) {}
        
        printf("********** Executando " RED "SEÇÂO CRÌTICA" RESET " da Thread "BOLDWHITE "TRES *********** \n" RESET);
        //região crítica
        contador = contador + 1;
        printf("\n"); 
        printf("Variável compartilhada acrescida de uma unidade: contador = %d\n", contador);
        printf("\n");
        printf("************************************************************\n");
        delay();
        printf("\n");
        printf("turno setado para 4\n");
        
        turno = 4;
        
        printf("\n");
        printf("Executando a " GREEN "seção não crítica" RESET " da thread " BOLDWHITE "TRES \n" RESET);
        printf("\n");
        contador_thread_um += 1;
        delay();
    }
}

void *processo_quatro(void *arg)
{
    int contador_thread_um = 0;

    while (contador_thread_um < 5)
    {
        //espera até seja o turnoo seja igual a 0
        while (turno != 4) {}
        
        printf("********** Executando " RED "SEÇÂO CRÌTICA" RESET " da Thread "BOLDWHITE "QUATRO *********** \n" RESET);
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
        printf("Executando a " GREEN "seção não crítica" RESET " da thread " BOLDWHITE "QUATRO \n" RESET);
        printf("\n");
        contador_thread_um += 1;
        delay();
    }
}

int main()
{   
    pthread_t threads[4];
    int arg[4], x;

    //função da biblioteca pthreads para a criação de threads
    pthread_create(&threads[0], NULL, processo_zero, (void *)&arg[0]);
    pthread_create(&threads[1], NULL, processo_um, (void *)&arg[1]);
    pthread_create(&threads[2], NULL, processo_dois, (void *)&arg[2]);
    pthread_create(&threads[3], NULL, processo_tres, (void *)&arg[3]);
    pthread_create(&threads[4], NULL, processo_quatro, (void *)&arg[4]);

    //suspende a execução desta thread principal até que estas outras terminem
    pthread_join(threads[0], NULL);
    pthread_join(threads[1], NULL);
    pthread_join(threads[2], NULL);
    pthread_join(threads[3], NULL);
    pthread_join(threads[4], NULL);

    scanf("%d",&x);
    return 0;
}
