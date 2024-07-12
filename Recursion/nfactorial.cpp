/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

int fact(int n) {
    if (n == 0) return 1;
    return n * fact(n - 1);
}

int main() {
    int n = 3;
    int result = fact(n);
    std::cout << "Factorial of " << n << " is " << result << std::endl;
    return 0;
}