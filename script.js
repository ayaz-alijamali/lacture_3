 // For Loop 


// agar kise b name ya number ko ziyada time print karwani k liye barr console.log karni k bajai simple for loop k zariye print karwa sakty hen,

for( let count = 1; count <= 5; count ++){
    console.log("jamali");
 };

/*let sum = 0;

for(let i = 1; 1 <= 5; i++){
    sum = sum + i;
}
console.log("sum =",sum);*/


// while Loop 

let i = 1;  // while loop se b ham print wala kam kar sakty hen, many many time jitna mein chahta 

while(i <= 10){
    console.log("sagar");
    i++
};


// Do while Loop

/*let i1 =1;

do{
    console.log("i1 =", i1);
}while(i1 <= 5);*/


// For of Loop

let string = "jamali"; // kise b valu ka length ya size chak karni k kiye 

for(let i2 of string){
    console.log("i2 =", i2);
};


let java = "java script"; // as he kam ko karni ka 2sra tareka 
let size = 0;
for(let i3 of java){
    console.log("i3 =", i3);
    size++
}
console.log("str1 size =", size);


// For in Loop 

let student = {
    name: "sagar",
    age: 12,
    cgpa: 7.5,
    isPass: true,
};
for( let key in student){
    console.log(key,student[key]);
};



// Odd Even


for( let num = 0; num <= 100; num++){
    if (num % 2 !== 0){
        console.log("odd numbers =",num);
    }
};


for( let num1 = 0; num1 <= 100; num1++){
    if (num1 % 2 === 0){
        console.log("even numbers =",num1);
    }
};


// Guessing Game 


let gameNum = 25;

let userNum = prompt("you Guess the Number:");

while( userNum != gameNum){
    userNum = prompt("Wrong Number! guessing again");
}
console.log("congratulations, you enter the right number!");


// kise b string ka pahla ya last wala  alffaz remove karni k liye slice() method use hota he 

let cast = "jamali";

console.log(cast.slice(0,5));



// concat  kise b 2 ya ziyada string ko sath mein jorni k liye,

let str1 = "Ayaz";
let str2 = "Ali";
let str3 = "Jamali";
let str4 = "I love javaScript";

let res = str1 + str2 + str3 + str4;
console.log(res);


// replace ___kise b string k Alfaz ko change kar sakty hen 


let say = "Hello";

console.log(say.replace("H","Y"));


let say1 = "Hellolololo";

console.log(say1.replaceAll("lo", "p"));



// kise b string ka ek alfaz show karwani k liye charAt() method use hotta he 

let str = "I love js";

console.log(str.charAt(7));



// prompt ki zariye user se kuch b output liny k liye 

let fullName = prompt("enter your fullName");

let userName = "@" + fullName, length;
console.log(userName);