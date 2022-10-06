
for(let counter=5;counter<=50;counter++){
    var notprime=false;
    for(let i=2;i<=counter;i++){
        if(counter%i===0&& i!==counter)
        {
            notprime=true;
        }
    }
    if(notprime===false){
        console.log(counter);
    }
}


