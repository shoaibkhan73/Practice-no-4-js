console.log(" practice no 4 ");
console.log(" javascript loop ");

// there are 5 type of loop


// for loop
let a = 5;
let b = 0;
let c = 40;

for (let i = 0; i <=100; i++) {
    console.log("check a valuse")
    console.log(a+i);
    console.log("check a with equal aswell valuse")
    console.log(a+i);
    console.log("check b valuse")
    console.log(b+i);
    console.log("check c valuse")
    console.log(c+i);
    
}


// for in loop
let obj ={
    "s.no" : 1 ,
    name :"shoaib",
    class : "webdevelopment"
}
for (const key in obj) {
       const element = obj[key]; 
       console.log(key,element)
       console.log(key)
        console.log(element)
    
}

// for of loop
for (const element of "shoaib") {
    console.log(element)
}


// while loop
let e = 0 ;
while (e<5) {
    console.log(e);
    e++
}

// do while loop
let  g = 11 ;
do {
    console.log(g);
    g++;
} while (g<10);