#include <iostream>
using namespace std;
int main()
{
    int n=5;
    for( int a =0; a<n;a++){
     // space
       for(int j=0; j<n-a-1;j++){
           cout<<" ";
       }
        //   star
    for(int y=0; y<2*a+1;y++){
        cout<<"*";
    
    }
    // space
    for(int z=0; z<n-a+1;z++){
        cout<<" ";
    }
    cout<<endl;
        
    }
    
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