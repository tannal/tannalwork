#include <stdio.h>

int main(){
	void *ptr = malloc(4);
	printf("%p\n", main);
	printf("%p\n", ptr);
	return 0;
}
