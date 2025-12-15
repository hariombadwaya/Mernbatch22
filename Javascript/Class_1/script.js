// 1st way using var in this redeclaration and initialization is allowed

// Function-scoped
// Can be re-declared and updated

var a = 10;
var a = 20; 
console.log(a)  // 20

// -----------------------------------------------------------------------------

// 2nd way using let 

// Block-scoped ({ ... })
// Can be updated, but not re-declared in the same scope

let b=10;
 b=30;
console.log(b)    // 30

//-----------------------------------------------------------------------------------

// 3rd way using const

// Block-scoped
// Cannot be re-assigned or re-declared

const c=50;
console.log(c);
