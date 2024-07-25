// Find The Union of two sorted array  arr1[] = {1,2,3,4,5}   arr2[] = {2,3,4,4,5}

function unionofarray(arr1,arr2){
let uniqueArray=new Set([...arr1,...arr2]);

return uniqueArray;
}
let arr1=[1,2,3,4,5]
let arr2=[1,2,3,4,5,6,7]

console.log(unionofarray(arr1,arr2))