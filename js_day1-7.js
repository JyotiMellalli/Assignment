let arr1=[1,2,3,4,5];
let arr2=[1,1,1,1,1];
let fact=1;
for(let i=0;i<=5;i++ ){
    
    for(let j=arr1[i];j>=1;j--){
        arr2[i]=arr2[i]*j;
    }
}

alert(arr2);