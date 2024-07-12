/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
using namespace std;

int main()
{
    for(int i=1;i<5;i++){
    //   for numbers
        for(int j=1;j<=i;j++){
            cout<< j;
        }
// for name
 int space =2*(5-i);
for(int z=0;z<=space;z++)
    {cout<<" ";
        
    }
    // for numbers
     for(int j=i;j>=1;j--){
            cout<< j;
        }
        
        cout<<endl;
        space -=2;
        
    }
}