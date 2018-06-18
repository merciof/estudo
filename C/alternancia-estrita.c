#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#define N_THREAD 100

void delay()
{
    int i, j, k, valor = 500;

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
    int *pvalor;
    pvalor = arg;
    printf("Thread %i executando...\n", *pvalor);
    delay();
    printf("Thread %i finalizando!\n", *pvalor);
}

int main()
{
    pthread_t threads[N_THREAD];
    int i,arg[N_THREAD],x;
    
    for( i = 0; i < N_THREAD; i++)
    {
        arg[i] = i + 1;
        pthread_create(&threads[i],NULL,funcao,(void *)&arg[i]);
    }
  
    for( i = 0; i < N_THREAD; i++)
    {
        pthread_join(threads[i],NULL);
    }
    scanf("%d",&x);
    printf("\n");
    return 0;
}
