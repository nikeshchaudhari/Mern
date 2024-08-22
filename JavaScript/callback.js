function login (l) {
    console.log("Login");
    // displayUser();
    l();
}

function displayUser(){
    console.log("Hello ");
    
}

login(displayUser);
