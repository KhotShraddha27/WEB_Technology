// -- let var const -- Activity 01
{
    //varibles declared with let can't be redeclared
    let x= 2;// Provides Block Scope in js
    console.log(x);      
    document.writeln(x);

}

{
   //varibles declared with var can't be redeclare
    var x= 2;
    console.log(x);
    document.writeln(x);

}

{
    //variable defined with const cant be reassigned.
    const PI = 3.1415;
    //PI =3.14;    
    console.log(PI);
    document.writeln(PI);
}

//Block of code --Activity 02
let a=2;
{
    let a=10;
}
console.log(a);
document.writeln(a);

var b=20;
{
    var b =30;
}
console.log(b);
document.writeln(b);

const c=40;
{
    const c=60;
}
console.log(c);

//--Display student information-- Activity 04
console.log("Display student information");
let firstName ="Hari";
let lastName ="Narayan";
let age = 5;
let collegeName= "DKTE";
let result = true;
let cgpa = 8.5;

console.log({firstName});
document.write({firstName});
console.log({lastName});
document.write({lastName});
console.log({age});
document.write({age});
console.log({collegeName});
document.write({collegeName});
console.log({result});
document.write({result});
console.log({cgpa});
document.write({cgpa});

// -- Check number is even/odd -- Activity 03
console.log("Check if num is even or odd");
var no = 56;
if (no%2==0){
    //console.log("Number is even.");
    document.writeln("Number is even.");
}
else{
    //console.log("Number is odd.");
    document.writeln("Number is odd.")
}

//--Check student is pass or fail --Activity 04
const marks =35;
if (marks>=50){
    console.log("Student is passed!!");
}
else{
    console.log("Student is failed!!");
}
//--Display numbers upto 50
for(i=0;i<=50;i++){
    console.log("Numbers froms 0 to 50:")
    console.log(i);
}