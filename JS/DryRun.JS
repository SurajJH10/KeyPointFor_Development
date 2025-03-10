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

let arr = [10,20,30,40,50,60];
let strArr = ['Suraj','Deepak','Ishika','Saksham'];

// Arrow Function
const calcNum = (param1,param2,param3)=>{

    switch(param3){
        case 'D' : console.log(param1/param2);
        break;
        case 'M' : console.log(param1*param2);
        break;
        case 'A' : console.log(param1+param2);
        break;
        case 'S' : console.log(param1-param2);
        break;
        default : console.log("Please enter the correct parameter (D,M,A,S)");
    }

};


let findVowel = (param1) => {
    let count = 0;
    for(let i of param1){
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u' ){
            count+=1;
        }
    }
    console.log(param1," Contains ",count," vowels");
}

// forEach Loop in Arrays
strArr.forEach((val)=>{                              // strArr.forEach((val)=>{})
    console.log("Values are : ", val.toUpperCase()); // 
});

arr.forEach((val)=>{
    console.log(val**2);
});


// MAP in Array (Returns new Array after doing operations)

let  newArr = arr.map((val)=>{
    return val*2;               //new array will be same no. of elements but twice the value
});

// Filter 
let filterArr = arr.filter((val)=>{
    return val%2===0 && val%3===0;
});


// Reduce methods in array
let reduceOutput = arr.reduce((res,curr)=>{
    return res+curr;
});

// find the largest number in an array
let maxNum = arr.reduce((prev,curr)=>{
    return curr > prev ? curr : prev;
});


// let inputData = prompt("Please enter the number : ");