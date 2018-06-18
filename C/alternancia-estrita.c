#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

int cont = 0, turn = 0;

void delay()
{
    int i, j, k, valor = 100;

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
    
    while (cont_zero < 10)
    { 
        //espera até seja o turno seja igual a 0
        while (turn != 0) {}

        //região crítica
        cont = cont + 1;

        printf("Processo 0 executando seção crítica, cont = %i \n", cont);
        delay();
        
        turn = 1;
        printf("***************Turno alterado para %i************ \n", turn);
        printf("Processo 0 executando seção Não crítica \n");
        cont_zero += 1;
        delay();

    }
}

void *processo_um(void *arg)
{
    int cont_um = 0;
    
    while (cont_um < 10)
    {
        //espera até seja o turno seja igual a 0
        while (turn != 1) {}

        //região crítica
        cont = cont + 1;

        printf("Processo 1 executando seção crítica, cont = %i \n", cont);
        delay();
        turn = 0;
        printf("***************Turno alterado para %i************ \n", turn);
        printf("Processo 1 executando seção Não crítica\n");
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
