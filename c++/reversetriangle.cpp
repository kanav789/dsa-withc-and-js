#include <iostream>
using namespace std;
int main()
{
    int n=5;
    for (int i=0; i<n; i++){
        // space
       for(int j=0; j<i;j++){
           cout<<" ";
       }
    //   star
    for(int y=0; y<2*n-(2*i+1);y++){
        cout<<"*";
    
    }
    // space
    for(int z=0; z<i;z++){
        cout<<" ";
    }
    cout<<endl;
    }
}