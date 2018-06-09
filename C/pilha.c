#include <stdio.h>
#include <stdlib.h>

#define SIZE 50 

//variáveis globais
int *base, *p1, stack[SIZE];

//assinaturas das funções
void push(int i);
int pop(void);

int main(int argc, char const *argv[])
{
    int value;
    
    base = stack;
    p1 = stack;

    
    do
    {
        printf("Entre com o valor: ");
        scanf("%d", &value);
        
        if (value != 0) {
            push(value);
        } 
        else
        {
            printf("novo valor do topo é %d\n", pop());
        }
        
    } while (value != -1);
    
    return 0;
}

void push(int i) {
    p1++;
    if (p1 == (base + SIZE)) {
        printf("Estouro da pilha");
        exit(1);
    }
    *p1 = i;
}

int pop(void) {
    
    if (p1 == base) {
        printf("Estouro da pilha.");
        exit(1);
    }
    p1--;
    return *p1;
}
