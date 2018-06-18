#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

#define RED     "\033[31m"
#define GREEN   "\033[32m"
#define RESET   "\033[0m"
#define BOLDWHITE   "\033[1m\033[37m"

int cont = 0, turn = 0;

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
    int cont_zero = 0;
    
    printf("Thread 0 criada\n");

    while (cont_zero < 1)
    { 
        //espera até seja o turno seja igual a 0
        while (turn != 0) {}

        //região crítica
        printf("\n");
        printf("********** Executando " RED "SEÇÂO CRÌTICA" RESET " da Thread "BOLDWHITE "ZERO *********** \n" RESET);
        printf("\n");
        cont = cont + 1;
        printf("Variável compartilhada acrescida de uma unidade: cont = %d\n", cont);
        printf("\n");
        printf("**************************************************************\n");
        delay();

        printf("\n");
        printf("Turno setado para 1\n");
        
        turn = 1;
        printf("\n");
        printf("Executando a " GREEN "seção não crítica" RESET " da thread " BOLDWHITE "ZERO \n" RESET);
        printf("\n");
        cont_zero += 1;
        delay();
    }
}

void *processo_um(void *arg)
{
    int cont_um = 0;
    while (cont_um < 1)
    {
        //espera até seja o turno seja igual a 0
        while (turn != 1) {}
        
        printf("\n");
        printf("********** Executando " RED "SEÇÂO CRÌTICA" RESET " da Thread "BOLDWHITE "UM *********** \n" RESET);
        //região crítica
        cont = cont + 1;
        printf("\n"); 
        printf("Variável compartilhada acrescida de uma unidade: cont = %d\n", cont);
        printf("\n");
        printf("************************************************************\n");
        
        printf("\n");
        printf("Turno setado para 0\n");
        
        turn = 0;
        
        delay();
        printf("\n");
        printf("Executando a " GREEN "seção não crítica" RESET " da thread " BOLDWHITE "UM \ns" RESET);
        printf("\n");
        cont_um += 1;
        delay();
    }
}

int main()
{   
    pthread_t threads[1];
    int arg[1], x;

    pthread_create(&threads[0], NULL, processo_zero, (void *)&arg[0]);
    pthread_create(&threads[1], NULL, processo_um, (void *)&arg[1]);

    pthread_join(threads[0], NULL);
    pthread_join(threads[1], NULL);

    scanf("%d",&x);
    printf("\n");
    return 0;
}
