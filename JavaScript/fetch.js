// fetch().then((res)=>{
//     console.log(res);
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })
const demo =()=>{
    const x = 10;
    return new Promise((resolve,reject)=>{
        if( x ==10){
            resolve("Ok Done");
        }else{
            reject("Failed");
        }
        
        
    })
}

demo().then((res)=>{
    console.log(res);
    
}).catch((error)=>{
    console.log(error);
    
});