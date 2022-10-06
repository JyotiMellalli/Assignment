var arr=[2,4,5,6,7,8,9,12,34,3];
var first=0,second=0;
for(let i=0;i<arr.length;i++){
    var current=arr[i];
    if(first<current){
        second=first;
        first=current;
    }
    else if(second<current){
        second=current;
    }
}
console.log(' first two  maximum numbers in the array  '+first+' ' +second);