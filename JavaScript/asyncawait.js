// function login(userName,Password){
// return new Promise((reslove,reject)=>{
//     console.log("Login Is Working");
//     if(userName == "Nikesh" && Password == 123456){
//         reslove(userName);
//     }else{
//         reject("username or password not match");
//     }
// })
// }

// function displayData(userName){
//     return new Promise((resolve,reject)=>{
//         console.log("Display data");
//         resolve("Hello " + userName);
        
//     })
// }

// // login("Nikesh",12345).then((data)=>{
// // console.log(data);
// // displayData(data).then((res)=>{
// //     console.log(res);
    
// // })



// // })
// // .catch((error)=>{
// //     console.log(error);
    
// // })


 
// const doThis = async ()=>{
// const data = await login('Nikesh',123456);
// const res = await displayData(data);
// }

function login(username,password){
    return new Promise ((resolve,reject)=>{
        console.log("Login Working");

        if(username == "Nikesh" && password == 123456){
            resolve(username);
        }else{
            reject("UserName or Password Not Match");

        }
        
    })
}

function displayData(username){
    return new Promise ((resolve,reject)=>{
        console.log("Display Data");
        resolve("Hello " + username)
        
    })



}
async function doThis() {
    try{
        const data = await login("Nikesh",12356);
        console.log(data);
        
         const res = await displayData(data);
         console.log(res);
    }
    catch(error){
        console.log(error);
        
    }
   
     
}

doThis();


// login("Nikesh",12346).then((res)=>{
//     console.log(res);
//     displayData(res).then((data)=>{
//         console.log(data);
        
//     })
    
// })

        
//   .catch((error)=>{
//         console.log(error);
        
//     })