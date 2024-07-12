/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
using namespace std;

int main()
{
    for(int i=0;i<5;i++){
        int start =1;
        if(i % 2 == 0) start=1;
        else start =0;
        for(int j=0;j<=i;j++){
            cout<< start ;
            start =1 - start;
        }
        cout<<endl;
    }
}