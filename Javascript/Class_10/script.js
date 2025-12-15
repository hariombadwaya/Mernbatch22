// Methods that changes the original array

// push() - insert on last index
// pop() -  delete last element
// unshift() - insert on zeroth index
// shift()  - delete from the zeroth index
// splice() - insert , update , delete


// let arr =[3,5,7,9]
// arr.push(12)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(12,3)
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.splice(0,0,17)
// console.log(arr);



// Methods that doesn't modifies the array
// they will always return new array

// let a = [12,13,14,15,16,17]
// let b = a.slice(0,3)
// console.log(b)

// let x = [1,2,3,4,5]
// let y = x.map((a)=>{
//     return a*2
// })
// console.log(y);

// let x = [1,2,3,4,5,4,6,8,10]
// let y = x.filter(num => num % 2 === 0);
// console.log(y);

// find - return the first matching element form the array
// let u = [34,12,45,5]
// let v = u.find((a)=> a%2==0)
// console.log(v)

// reduce() - return the single value after performing the operation
// let arr = [1, 2, 3];
// let sum = arr.reduce((total, x) => total + x, 0);
// console.log(sum); 


// some() -- atleast one condition should true otherwise false
// It tests each element with a condition (callback function)
// If any element returns true, the method returns true
// If none match, it returns false
// It does not change the original array

// let numbers = [10, 15, 25, 5];
// let result = numbers.some(num => num > 20);
// console.log(result); // true

// every() -- 
// It tests every element using a condition (callback function)
// If all elements return true → result is true
// If even one fails → result is false
// It does not modify the original array

// let numbers = [12, 15, 20, 18];
// let result = numbers.every(num => num > 10);
// console.log(result); // true



// let arr = [4, 5, 6];
// arr.forEach(x => console.log(x));


// let a = ["a","b","c"]
// let b = a.includes(5)
// console.log(b) // true

// join()
// Convert array to string
// let c = a.join("-")
// console.log(c)
// let d = a.reverse()
// console.log(d)

let a = [1,2,[3,4],5,[6,7,8],9]
a.flat(Infinity);
console.log(a);
 let newarray =a.flat(2)
console.log(newarray)



// ------------------------------------------------------------------------------------------------------------------------
//   Remaining class 




// // array modification methods 

// let arr = [10,20,30,40];
// console.log(arr);

// // insertion

// arr.splice(4,0,88);
// console.log(arr);

// // updation

// arr.splice(2,1,777);
// console.log(arr);

// // delete

// arr.splice(2,1);
// console.log(arr);


// // push --------------------------------

// let arr1 = [10,20,30,40];
// arr1.push(23);
// console.log(arr1);

// // pop --------------------------------------

// let arr2 = [10,20,30,40];
// arr2.pop(30);
// console.log(arr2);

// // shift ----------------------------------------

// let arr3 = [10,20,30,40];
// arr3.shift(30);
// console.log(arr3);

// // unshift--------------------------------------

// let arr4 = [10,20,30,40];
// arr4.unshift(30);
// console.log(arr4);


// // slice - last index is excluded 

// let arr5 = [10,20,30,33,90];

// let subpart = arr5.slice(1,3);
// console.log(subpart);

// map - if we want to perform any operation on each element of the array so we use map method.it do not modify the original array.

// let arr6 = [10,20,30];
// let modifiarr = arr6.map((i)=>
//  i *10,
// );
// console.log(modifiarr);

// filter - if we want to get element which satisfy given condition.it do not modify the original array.

// let arr7 = [10,20,30];
// let filarr = arr7.filter((i)=>i>20);
// console.log(filarr);

// find - if we want to get  the first matching element which satisfy given condition.it do not modify the original array.

// let arr8 = [10,20,30];
// let findinarr = arr8.find((i)=>i>10);
// console.log(findinarr);

// find - if we want to get  the first matching element which satisfy given condition.it do not modify the original array.

// let arr9 = [10,20,30];
// let someearr = arr9.some((i)=>i==30);
// console.log(someearr);

// console.log(arr9.indexOf(20));


// join - converts an array into a single string 
// let arr10 = [1, 2, 3, 4];
// console.log(arr10);
// let result = arr10.join("-");
// console.log(result);

// every  - condition is true for every element than true 
// let arr11 = [10,20,30];
// let evearr = arr11.every((i)=>i>20);
// console.log(evearr);


// reduce - reduce array to single value , when we want to perform any operation with 2 or more operants without loops

// let arr12 = [10,20,30];
// let reduarr = arr12.reduce((a,b)=>a+b,0); // (a,b)= accumalater , element
// console.log(reduarr);

// flat - flaten the nested array , array is converted to a single simple array without any nested array.

// let arr13 = [10,[23,67]];
// let flatarr = arr13.flat();
// console.log(flatarr);


// flat - Deep flatten: when there are more than one nested array 
// let arr13 = [10,[23,67,[45,67]]];
// let flatarr = arr13.flat(Infinity);
// console.log(flatarr);

// let arr13 = [10,[23,67,[45,67,[3,5]]]];
// let flatarr = arr13.flat(2); // here 2 is passed , which means array will be converted in  
// console.log(flatarr);


// reverse
// let arr12 = [10,20,30];
// let revarr = arr12.reverse();
// console.log(revarr);

// sort 
// include




// concat - 
// let arr12 = [10,20,30];
// let concarr = arr12.concat([40,50]);
// console.log(concarr);



// string methods---------------------------------------------------
 
console.log("hello".length);   //to find the length of the string 
console.log("Hello".charAt(1));    //  at which index the 







//Ternary operator
//short type calculation
let age = 18;
let isadult = age>= 18?"adult":"not adult";//?  this is called nullity collision operator
console.log(isadult );


//rest parameter----------------------------------------------------------
// function takeTwo(x,y,...z){   //...z when a variable is written with 3 dots in front as a parameter then the ...z is the rest parametr 
//     console.log(x,y);  
// }
// takeTwo(10,20,20,30,40,40);
// console.log(ar);


//args = keyword in js , can be accessed by writing args[indexes];

//spread parameter ----------------------------------------------------------------------------
//used with non primitive  - object and arrray 
//copy and merge values of one value to another array


//merge
// let a1 = [10,20,30];
// let a2 = [40,80,90];
// let op = [...a1 , ...a2];

// copy 
// let x = [10,20,30];
// let y = [...x];
// console.log(y);

//destructuring- extracting the values from the array and objects , array destructing & object destruvtiong

//array destructing 

// let ans =[10,20,30,40];
// const[a,b,c,d] = ans;
// console.log(ans);
// console.log(a);

// object destructuring - in this case the name of the variable should be the name of the key and not any other variable name 

// const info = {
//     id :101,
//     namee:"mohan",
//     age:10
// }
// const {id , namee} = info;  // here id and namee can be only the key name not any thing else , we cannot write id1 or anything else instead of id .If the name of the key is special than in that case we cannot use object destructuring and we will have to read elias 
// console.log(id,namee);


// break - when we want  to terminate the code 

// continue - to skip iteration 

// for of - used with array 

// let arr = [10,20,30]
// for(let item of arr){
//     console.log(item );
// }

// for in - used with objects 

// let obj = {
//     id:101,
//     name :"xy"
// }

// for (let value in obj){
//     console.log(obj[value]);
//     console.log(value);
// }


// 
// const obj1 = {
//   name: "Garima",
//   details: { age: 22 }
// };

// const obj2 = { ...obj1 }; // Shallow copy

// obj2.details.age = 30;

// console.log(obj1.details.age); 


// 
// Math.round(x) → Rounds to nearest integer
Math.round(4.6); // 5
Math.round(4.4); // 4

// Math.floor(x) → Always rounds down
Math.floor(4.9); // 4

// Math.ceil(x) → Always rounds up
Math.ceil(4.1); // 5

// Math.trunc(x) → Removes decimal part
Math.trunc(4.9); // 4

// Math.max()
Math.max(5, 9, 2); // 9

// Math.min()
Math.min(5, 9, 2); // 2

// Math.pow(x, y) → xʸ
Math.pow(2, 3); // 8

// date object 

// let d = new Date();

// console.log(d.getFullYear());     // 2025
// console.log(d.getMonth());        // 0 = January
// console.log(d.getDay());          // 2 = Tuesday
// console.log(d.getDate());         // day of month
// console.log(d.getTime());         // timestamp



// Current date & time
// let now = new Date();
// console.log(now);

// // Specific date
// let da = new Date("2024-12-31");

// lexical scope -Lexical Scope means: A function can access variables from its parent (outer) scope, based on where it is written, not where it is called.used in closure .the scope of outer function variable in inner functiion will be lexical 
// let a = 10;

// function parent() {
//   let b = 20;
//   function child() {
//     console.log(a); // 10
//     console.log(b); // 20
//   }
//   child();
// }
// parent();

/*When a variable is accessed, JS looks in this order:

Local Scope (function itself)
Parent Scope
Global Scope

If not found anywhere → ReferenceError.*/
//---------------------------------------------------------------------------

// Template literals are special strings in JavaScript that use backticks
// `Hello ${name}!`

// let name = "Garima";
// console.log(`Hello ${name}`);


// call , apply and bind

// call method - it is used to 
// const ob = {
//   id:101
// }
// function printValue(data , a){
//   console.log(this.id);
// }
// printValue.call(ob,4);       //this keyword points towards the first argument 

const ob = {
  id:101
}
function printValue(data,ar){
  console.log(this.id);
}
printValue.apply(ob,[2,3,4]);       //this keyword points towards the first argument 



// const person = {
//   name: "Garima"
// };

// function greet(city, country) {
//   console.log(`Hello ${this.name} from ${city}, ${country}`);
// }

// greet.call(person, "Indore", "India");

// greet.apply(person, ["Indore", "India"]);

// const newFunc = greet.bind(person, "Indore", "India");
// newFunc();


// string interpolation - written inside back ticks
// concatination of strings 

// ${variable name}

// string is array like object , we can use some properties of array but not all the properties of array 
// string in js is template literals and it is immutable , we cannot do any changes in string using indexing  ??????? find the answer

// curring - a function that has more than one parameter than the nested function is created that takes single parameter and the no. of nested function created will the total no. of parameters . there is no use in real life but can be asked in interviews.
// types - simple and infinite curring

// this keyword----------------------------------------------------------------------------

// this keyword -it is a currently  it points to window object by defalut  when we  call this keyword , arrow function ke andar this keyword nhi hota h , normal function ke case me  
// factory function/ constructor function  - esa function jb hum calling ke time pr us function ke aage new laga dete h  , empty object deta h print krne pr , koi banaye hote to usko 

// // case 1
// console.log(this);

// // // case 2

// function data() {
//   console.log(this);  //window object 
// }
// data();

// // // case 3 
// const ob  = {
//   id:101,
//   namee:"bhb",
//   printData : function(){
//     console.log(this.id , this.namee);
//     console.log(this);  //ob
//   }
// }
// ob.printData();

// // // case 4 
// const dat=()=>{
//   console.log(this);             
// }
// console.log(dat);

// // case 5 
// function data() {
//   console.log(this);  //empty object 
// }
//  new data();

// // case 6 

// const ob1  = {
//   id:101,
//   namee:"bhb",
//   printData : ()=>{
//     console.log(this);                    //window object 
//      console.log(this.id , this.namee);   //undefimned 
//   }
// }
// ob1.printData();

// shallow copy - make chnages to both original and the copy , exact same 

// const ob3 = {
//   BId :101,
//   batteryname: "jhh",
//   companyInfo:{
//     name:"sfdhfh",
//     revenue : 287098
    
//   },
//   isGoodQuality : true 
// }
// // // 1st way , equal to method -----------------------------------------
// const ob4 = ob3 ;
// ob3.BId = 1000;
// ob4.BId = 100;
// console.log(ob3);


// // 2nd method - assign method ----------------------------------------
// const ob2 = Object.assign(ob1);

// // 3rd method - spread method , only the changes can be done in nested object  as the memory address of nested object is same in this case.------------------------------------

// const ob3 = {
//   BId :101,
//   batteryname: "jhh",
//   companyInfo:{
//     name:"sfdhfh",
//     revenue : 287098
//   },
//   isGoodQuality : true 
// }

// const ob5 =  {...ob3};
// ob5.companyInfo.name = "honda";
// ob5.BId =100;
// ob3.BId = 120;
// ob3.companyInfo = "heoooo";

// console.log(ob3);


// deep copy - each object is different 

const ob1 = {
  id:101,
  name1 : "grow",
  info :{
    cName:"DRF",
    Revenue:100000
  },
  address:"c21"
}
// 1st way - using json

const ob2 = JSON.parse(JSON.stringify(ob1));
ob1.id = 1001;
ob2.id =3000;
ob1.info.cName= "growtech";

console.log(ob1);
console.log(ob2);

// 2nd way - structured clone 
// structuredClone(): A modern, native browser/Node.js API that handles various data types (Dates, Maps, Sets, etc.) and even transferable objects.

// 3rd way - Lodash _.cloneDeep(): A robust third-party library solution for deep cloning, handling many non-serializable items


let arr = [1,2,3,4,5,6,7];
console.log(arr.length);
arr.length =0 ;
console.log(arr);
arr[6]=20;
console.log(arr);
console.log(arr[2],arr.length);




























