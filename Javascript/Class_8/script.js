// Loops in js 

// for(let i=1; i<=10; i++)
// {
//     for(let j=1; j<=10; j++){
//         console.log(j);
//     }
// }
// ------------------------------------------------------------------

// do while loop
// let i=1;
// do{
//       console.log(i)
//       i++
// }
// while(i<=10);

// -------------------------------------------------------------------------

// while loop
 
// let x=1;
// while(x<=5){
//     console.log(x);
//     x++;
// }


// wap to print table of a number

// for(i=1;i<=1;i++)
// {
//     for(j=1;j<=10;j++)
//     {
//         console.log(i+"*"+j+"="+(i*j));
//     }
// }


// ----------------------------------Number System Questions-------------------------------------

// 1. check the number is even or odd
// let x=3;
// if(x%2===0){
//     console.log("The number is even")
// }
// else{
//     console.log("the number is odd ")
// }


// 2. check weather the number is divisible by 5 and 11

// let x=55;
// if(x%5===0 && x%11 ===0){
//     console.log("The number is divisible by 5 and 11")
// }
// else{
//     console.log("the number is not divisible")
// }

// 3. check wheather the number is positive , negative or zero

//  let x=1;
//  if(x>0)
//     console.log("positive");
// if(x<0)
//     console.log("negative");
// if(x==0)
//     console.log("Zero")

//4. check wheather the number is divisible by 2 ,3 and 5 at the same time

// let x= Number(prompt("enter the number "));
// if(x%2===0 && x%3===0 && x%5===0)
//     console.log("yes it is a divisible by all of them")
// else
//     console.log("No it is not divisible by all of them");


// 5. Reverse a number without using inbuit function
   //  let x= Number(prompt("enter the number"));
   //   let rev=0;
   // while(x !=0)
   // { 
   //    rem = x%10;
   //     rev =  rev*10+rem;
   //     x= Math.trunc(x/10);
   // }
   // console.log(rev);


// 6. check whether the number is pallndrome or not

// let num= Number(prompt("Enter the number"));
// let rev=0;
// const temp= num;
// while(num !=0){
//    rem = num%10;
//    rev= rev*10+rem;
//    num = Math.floor(num/10);
// }
// if(rev==temp){
//    console.log("The number is pallindrome");
// }
// else{
//    console.log("Number is not pallindrome");
// }


// 7. Count how many digits in a number

// let num= Number(prompt("Enter the number"));
// let count=0;
// while(num !=0)
// {
//    num =Math.floor (num/10);
//    count ++
// }
// console.log(`The number contains ${count} digits `);

// 9. Check whether the reverse of a number is divisible by 3.

//  let x= Number(prompt("enter the number"));
//    let rev=0;
//    while(x !=0)
//    { 
//       rem = x%10;
//       rev =  rev*10+rem;
//       x= Math.trunc(x/10);
//    } 
//    if(rev % 3===0)
//    {
//       console.log("The reverse of number is divisible by 3")
//    }
//    else{
//       console.log("the reverse of a number is not divisible by 3")
//    }

// 10. Find the sum of digits of a number

// let num = Number(prompt("enter the number"));
// let sum=0;
// while(num !=0){
//     let rem= num%10;
//     sum= sum+rem;
//     num= Math.floor(num/10);
// }
// console.log(`the sum of the number is ${sum}`);


// 11. Find the product of digits of a number

// let num = Number(prompt("enter the number"));
// let product=1;
// while(num !=0){
//     let rem= num%10;
//     product= product*rem;
//     num= Math.floor(num/10);
// }
// console.log(`the product of the digits of a number is ${product}`);


// 12. Find the largest digit in a number

//  let num = Number(prompt("Enter a number"));
// let largest = 0;

// while (num > 0) {
//     let digit = num % 10;
//     if (digit > largest) {
//         largest = digit;
//     }
//     num = Math.floor(num / 10);
// }
// console.log("Largest digit is " + largest);


// 13. Find the smallest digit in a number

//  let num = Number(prompt("Enter a number"));
// let smallest = num%10;

// while (num > 0) {
//     let digit = num % 10;
//     if (digit < smallest) {
//         smallest = digit;
//     }
//     num = Math.floor(num/10);
// }
// console.log("smallest digit in a number is " + smallest);

// 14. Print the frequency of each digit in a number.
// let num = Number(prompt("enter the number"));
// let temp=num;

// for(i=0;i<=9;i++){
//   let count =0;
//   num=temp
//   while(num>0)
//   {
//     ele=num%10;
//     if(i==ele)
//     {
//       count++;
//     }
//     num= Math.floor(num/10);
//   }
//   if(count>0){
//   console.log(`  ${i}  frequency is  ${count}`);
// }
// }



// 16. Find the factorial of a number

// let num = Number(prompt("Enter a number:"));
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//     fact = fact * i;
// }
// console.log(`Factorial of ${num} is ${fact}`);


// 20. Check whether a number is prime


// let num = Number(prompt("Enter a number"));
// let isPrime = 1;
// if (num <= 1) {
//     isPrime = 0;
// } 
// else {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = 0;
//             break;
//          }
//     }
// }
// if (isPrime) {
//     console.log(" prime number");
// } else {
//     console.log( " is not a prime number");
// }


// 33. Generate Fibonacci series up to n terms.

// function fib(num) {
//   let a = 0;
//   let b = 1;
//   console.log(a)
//   console.log(b)
//   for (let i = 0; i <= num; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//     console.log(c)
//   }
// }
// fib(5)


// 34. Check whether a number belongs to Fibonacci series.
  //  let num = Number(prompt("Enter the number"));
  //  let a=0, b=1;
  //  let c= a+b;
  //  while(c<=num){
  //   if(c==num){
  //     console.log("yes it is belongs to fibonacci series")
  //     break; 
  //   }
  //     a=b;
  //     b=c
  //     c= a+b;
      
  //  }

//  36. Print sum of first n odd numbers.

// let num = Number(prompt("enter the number"));
// let sum =0;
// for(i=1;i<=num;i++){
//   if(i%2 !=0){
//     sum= sum+i;
//   }
// }
// console.log(`sum of first n odd number is ${sum}`)


// 37. Print sum of first n even numbers.

// let num = Number(prompt("enter the number"));
// let sum =0;
// for(i=1;i<=num;i++){
//   if(i%2==0){
//     sum= sum+i;
//   }
// }
// console.log(`sum of first n even number is ${sum}`)


// 38. Print sum of squares of digits of number.

// let num = Number(prompt("enter the number"));
// let sum=0;
// while(num !=0){
//   let sq= num%10;
//   sq= sq*sq;
//   sum= sum+sq;
//   num = Math.floor(num/10);
// }
// console.log(`sum of squares of digits of number is ${sum}`);


// 39. Count number of even digits in a number.

// let num = Number(prompt("enter the number"));
// let count =0;
// while(num !=0)
// {
//   let digit= num%10;
//   if(digit %2 ==0)
//   {
//     count++;
//   }
//   num = Math.floor(num/10);
// }
// console.log(`number of even digits in a number is  ${count}`)


// 40. Count number of odd digits in a number.

// let num = Number(prompt("enter the number"));
// let count =0;
// while(num !=0)
// {
//   let digit= num%10;
//   if(digit %2 !=0)
//   {
//     count++;
//   }
//   num = Math.floor(num/10);
// }
// console.log(`number of odd digits in a number is  ${count}`)
     

// 41. Count how many zeros are present in a number

// let num = Number(prompt("enter the number"));
// let count =0;
// while(num !=0)
// {
//   let digit= num%10;
//   if(digit ==0)
//   {
//     count++;
//   }
//   num = Math.floor(num/10);
// }
// console.log(` ${count} Zeros present in a number`)


// 42. Find difference between sum of even digits and sum of odd digits.

// let num = Number(prompt("enter the number"));
// let sumofeven=0;
// let sumofodd=0;
// while(num!=0){
//   let digit = num%10;
//   if(digit %2==0){
//     sumofeven= sumofeven+digit;
//   }
//   else{
//     sumofodd= sumofodd+digit
//   }
//   num = Math.floor(num/10)
// }
// let difference = sumofeven-sumofodd;
// console.log(`diff b/w sum of even and sum of odd digits is  ${difference}`)


// 43. Check whether a number contains repeated digits.

// let num = Number(prompt("Enter the number"));
// let temp = num;
// let found = false;

// for (let i = 0; i <= 9; i++) {
//     let count = 0;
//     let n = temp;

//     while (n > 0) {
//         let digit = n % 10;
//         if (digit === i) {
//             count++;
//         }
//         n = Math.floor(n / 10);
//     }

//     if (count > 1) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     console.log(`${temp} contains repeated digits`);
// } else {
//     console.log(`${temp} does NOT contain repeated digits`);
// }


// 24. Check whether a number is a Perfect number

// let num = Number(prompt("Enter a number:"));
// let sum = 0;

// for (let i = 1; i <= num / 2; i++) {
//     if (num % i === 0) {
//         sum =sum + i;
//     }
// }

// if (sum === num) {
//     console.log(`${num} is a Perfect number`);
// } else {
//     console.log(`${num} is NOT a Perfect number`);
// }


// 25. Check whether a number is an Armstrong number

let num = Number(prompt("Enter a number:"));
let temp = num;

// Count digits
let digits = num.toString().length;

let sum = 0;
while (num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit, digits);
    num = Math.floor(num / 10);
}

if (sum === temp) {
    console.log(`${temp} is an Armstrong number`);
} else {
    console.log(`${temp} is NOT an Armstrong number`);
}
 



