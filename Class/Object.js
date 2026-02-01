//Obj literals -->key:value pair
let myObj = {name :"Hari",
    age :20,
    loc:"Jsp",
    email :"xyz@gmail.com",
    isLogin :true,
    lastLoginDate :["Mon","Tue","Wed","Thur","Fri","Sat"],
    "fName":"XYZ"
}
/*There are two types of objdeclaration
1)obj literals
2)constructor
3)singleton
When u create const it creates singleton obj it means itself obj
when we create obj literals - signleton is not created
obj constructor then singleton is created ---> interview*/
 
//console.log(myObj);
//console.log(typeof(myObj));

const mySym = Symbol();
const myObj2 ={
    [mySym] : "Hari"
}
console.log(myObj2);
console.log(typeof(myObj2));

myObj.email = "abc@gmail.com";
console.log(myObj.email);
//Object.freeze(myObj);
console.log(myObj);
myObj.email = "pqr@gmail.com";
console.log(myObj.email);

myObj.greeting = function(){
    console.log("Hello JS user!!");
}
myObj.greeting();