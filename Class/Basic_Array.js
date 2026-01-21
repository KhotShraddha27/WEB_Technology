//Array
let myArr =[0,1,2,3,4,5];
console.log(`My array :${myArr}`);
console.log(typeof(myArr));

const arr = new Array(0,11,2);
console.log(arr[1]);

//Array methods
arr.push(9);//adds value in array
console.log(arr);
arr.pop(4);//removes last value from array
console.log(arr);
arr.unshift(56);//shifts all elements and add at first position
console.log(arr);
console.log(arr.shift());//removes first element 
console.log(arr);
console.log(arr.includes(34));//checks whether the element is present in the array 
console.log(arr.indexOf(11));//gives the index of the element present in the array 
console.log(arr.at());
//Activity -->slice and split 