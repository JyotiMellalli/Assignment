let num=1234;
let reverse =0;
let remainder;
while(num!=0){
remainder=num%10;
reverse=reverse*10+remainder;
num=Math.floor(num/10);
}
c=reverse;
alert(c);
 