let str ="JavaScriptBootcamp";
let size = str.length;
console.log(size);


// for-in loop

let associate ={
    name : "Suraj Kumar",                       // name = KEY
    organization : "Cognizant",                 //organization = KEY
    domain : "QEA-NFT",                         //   domain       "
    tools : "Neoload, jMeter and LoadRunner",   //   tools        "
    isWorking : true,                           //  isWorking     "
}

for(let key in associate){
    console.log("KEY = ", key, "VALUE = ", associate[key] );
}