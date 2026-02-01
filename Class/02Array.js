// const sH =["h","a","r","i"];
// const a = ["n","a","r","a","y","a","n"];
// sH.push(a);
// console.log(sH);
// console.log(sH[3]);
// console.log(sH[4][2]);
// console.log("Array concatination:");
// //Array concat
// const arr1 =[1,2,3,4,5,6];
// console.log(sH.concat(arr1));

const arr2 =[1,2,3,[4,5,6],[7,8],[9,10,[11]]];
//console.log(arr2);
const arr3 =[arr2.flat(Infinity)];
const arr4 =[arr3.flat(1)];
console.log(arr3);

const arr5 =[1,2,3,[4,5,6],[6,7],[[7,8],[4,5]]];//neated array
const arr6 =[arr5.flat(Infinity)];
console.log(arr6);

//how the nested array should be flattened if default value is 1;(infinity-->flattens all levels)
//flat does not change original array it return new array 

//Data Scripting using these methods 
console.log(Array.isArray("Hari"));//check given value is array or not 
console.log(Array.isArray(arr6));
console.log(Array.from("hari"));//converts an iterable object like string ,set, map into an array
console.log(Array.from({name :"hari"}));
console.log(Object.keys({name :"hari"}));
console.log(Object.values({name :"hari"}));
console.log(Object.entries({name :"hari"}));

let sc1=100;
let sc2=200;
let sc3=300;
console.log(Array.of(sc1,sc2,sc3));//create a new array from given values no matter  
