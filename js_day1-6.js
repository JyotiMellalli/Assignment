array=[3,3,7,7,9,7,5,1,1,1]
function num(arr){
    result=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            result+=arr[i]
        }
    }
    if(result==0){
        return 'No Even numbers found'
    }
    return result
}
alert(num(array));