let myPromise = new Promise((resolve,reject)=>{

let x = 1;
if(x==2){
    resolve("Ok Done");
}
else{
    reject("Soory Failed");
}
})

myPromise.then((res)=>{
    console.log(res);
    
}).catch((error)=>{
    console.log(error);
    
});