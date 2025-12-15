//  obj = {
//     id : 11,
//     "Adhar Number" : 484593493,
//     "voter_card_no": 65544,

//     info : {
//         1 : "faizan singh singhaniya",
//         religion : "Mixture",

//         501 : {
//             "Chal": "chal-Nikal"
//         }


//     }
// }

// console.log(obj.info[501].Chal)

// console.log(obj.id);
// console.log(obj["Adhar Number"]);
// console.log(obj["voter_card_no"]);
// console.log(obj.info[1]);
// console.log(obj)

//console.log(typeof (typeof(undefined)));

// "use strict";
//  let x = 100;
// console.log(x);
// function test() {
//   return;
//   {
//     name: "JS"
//   }
// }
// console.log(test());

// function hello(){
//     return 2*3;
   
// }
// console.log(hello());

// console.log(console.log());

// let arr = [1, [2, 3], 4];
// console.log(arr[1][0]);
// let nums = [1, [2, [3, 4]]];
// console.log(nums[1][1][0]);

// let arr = [[1, 2], [3, 4]];
// arr[0].unshift(7);
// console.log(arr);

// let a = 1;
// let b = a++ + ++a + a;
// console.log(b);

// let x = 3;
// let y = x++ + x++ + ++x;
// console.log(x, y);


// let obj = {
//   a: {
//     b: {
//       c: 10
//     }
//   }
// };
// obj.a.b.c = obj.a.b.c + 5;
// console.log(obj.a.b.c);


// let obj = {
//   a: {
//     100: {
//       "c-18": 10
//     }
//   }
// };
// console.log(obj.a[100]["c-18"])

// let product = {
//   name: "Laptop",
//   specs: {
//     ram: "16GB",
//     storage: {
//       type: "SSD",
//       size: "512GB"
//     }
//   }
// };
// console.log(product["specs"]["storage"]["type"]);

// let product = {
//   name: "Laptop",
//   specs: {
//     ram: "16GB",
//     storage: {
//       type: "SSD",
//       size: "512GB"
//     }
//   }
// };
// console.log(product[specs][storage][type]);

let obj = {
  a: {
    b: 2
  }
};
console.log("b" in obj);
console.log("b" in obj.a);

// let ar= [1,2,3,4];
// let arr=[1,2,3,4];

console.log([1,2,3,4] == [1,2,3,4]);

console.log(1==="1");

// Primitive values (number, string)    Compared by value
// Objects (array, function, object)	Compared by reference




