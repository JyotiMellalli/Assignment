function getVideo(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(getVideo()){
                resolve("Got Video")

            }else{
                reject("Didn't got video")
            }
        },3000)
    })
}
let methodForResolve=(result)=>{
    console.log("Message After Resolve="+result);
}
let methodForReject=(reject)=>{
    console.log("message After Reject="+reject);
}
function addIntro(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(addIntro()){
                resolve("Intro not added")

            }else{
                reject("Intro not added")
            }
        },3000);
    })
}
function addSummery(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(addSummery()){
                resolve("summery added")
            }else{
                reject("summery not added")
            }
        },3000);
    })
}
getVideo().then(methodForResolve).catch(methodForReject);
addIntro().then(methodForResolve).catch(methodForReject);
addSummery().then(methodForResolve).catch(methodForReject);