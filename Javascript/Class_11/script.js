// js is single threaded language ?????




//  closure - object in js , combination of two things - lexical scoping and simple function .
// used to change data safely ,retain the variable address of lexical scope which a normal function cannot do , stores the reference of the variable of outer function.
// disadvantages  - wastage of memory , as it stores/remembers  the address of variable ,memory leak - sol - when we are not using any object than we can initialize it with null to prevent memory leak/wastage of memory.
// solution - intialize the value of of the variable with null.


// function counTer(){
//     let count = 0;
//     return function inner(){
//         console.log(count);
//         return count++;
//     }
// }

// let ab = counTer();
// console.log(ab());
// console.log(ab());

// let ab1 = counTer();
// console.log(ab1());
// console.log(ab1());
// console.log(ab1());

// let ab2 =null;
// ab2 = counTer();
// console.log(ab2());
// console.log(ab2());

// -------------------------------------------------------------------------------------------------------------
// callback hell/pyramifd of doom - a callback hell is the condition in which multiple callback functions are called inside multiple callback functions.
// disadvantages - code complexity , horizontal scrolling , reduced understanding



// asynchronus js - when multiple lines of codes are run simultaneously/parallelly.this reduces the total time to perform a program.

// bom - browser object model , biggest object , automatically runs without calling any function(browser function ),
// json object me key ka name string hoga , mtlb double quote , no key value can be undefined(if given than it will be ignored ), null (if given than empty will be given as output ) ,function , last key ke baad comma nhi aayega , data bhejne ka tareeka h sirf json aur kisi tareeke se nhi daal skte , lene ke time pr ui and json ke form me collect kr skte h 
// asynchronous api calling is known as side effect 

// API - application pr

// XHR - 
// request types - server se request lena - GET request , post , patch(partial updation of data) , delete , PUT -update completely

// API calling by XHR 
// const xhrobj = new XMLHttpRequest();
// xhrobj.responseType = "json";     
// xhrobj.open("get","https://jsonplaceholder.typicode.com/posts");   //open method used to open request 
// xhrobj.send();


// function apiCalling(method , url){
//     const xhrobj = new XMLHttpRequest();
//     xhrobj.responseType = "json";          //null
//     xhrobj.open(method,url);   //open method used to open request 
//     xhrobj.send();
//     xhrobj.onload=()=>{
//           console.log(xhrobj.response);
//     }
//     console.log(xhrobj);
    

// }
// // apiCalling("GET","https://jsonplaceholder.typicode.com/posts");
// apiCalling("POST","https://jsonplaceholder.typicode.com/posts");



// const ob =new XMLHttpRequest()
// ob.responseType="json"
// ob.open("GET", "https://jsonplaceholder.typicode.com/posts");
// ob.send()

// console.log(ob);


//  //by function 

// function FetchAPI(method,url) {
//     const data =new XMLHttpRequest()
// data.responseType="json"
// // ob.response( type= "JSON");
// data.open(method,url);
// data.send()
// console.log(data);
// }

// FetchAPI("GET","https://jsonplaceholder.typicode.com/posts");



// callback hell and api calling implementation ---------------------------

// first way of calling the api
/*const obj = new XMLHttpRequest();
obj.response = "json";
obj.open("GET", "https://jsonplaceholder.typicode.com/posts");
obj.send();
console.log(obj);
console.log("api")*/

// function apiCalling(method, url) {
//     const obj = new XMLHttpRequest();
//     // obj.response = "json";
//     obj.responseType = "json";
//     obj.open(method, url);
//     obj.send();
//     obj.onload = () => {
//         console.log(obj.response);

//     }
//     console.log(obj);
//     // console.log(obj.response);
//     console.log("api")
//     return obj.response;
// }
// let ans=apiCalling("GET", "https://jsonplaceholder.typicode.com/posts");
// // console.log(ans)



// 2nd way 
// function apiCalling(method, url, printApiData) {
//     const obj = new XMLHttpRequest();
//     obj.open(method, url);
//     obj.send();
//     obj.onload = () => {
//         console.log(obj.response);
//         printApiData(obj.response)

//     }

// }
// apiCalling("GET", "https://jsonplaceholder.typicode.com/posts/1", (data) => {
//     console.log("data of api", data)
// });


// callback hell-> when you make a multiple function call inside a multiple callback function i.e callback hell.
// it is also known as pyramid of Doom.
// due to this code become difficult to read or understand.


// function NarakKaDwar(method, url, printApiData) {
//     const obj = new XMLHttpRequest();
//     obj.responseType = "json";
//     obj.open(method, url);
//     obj.send();
//     obj.addEventListener("load", () => {
//         printApiData(obj.response)
//     })
// }

// NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
//     console.log("Ye meri all posts hai", data);

//     NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
//         (data) => {
//             console.log("Ye meri Single Post hai", data)
//             NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
//                 (data) => {
//                     console.log("Ye meri Single Post ke andar je sare comments hai", data)
//                     NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
//                         (data) => {
//                             console.log("Ye meri Single Post ke andar ek comments hai", data)
//                             NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
//                                 console.log("Ye meri all posts hai", data);
                                
//                                 NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
//                                     (data) => {
//                                         console.log("Ye meri Single Post hai", data)
//                                         NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
//                                             (data) => {
//                                                 console.log("Ye meri Single Post ke andar je sare comments hai", data)
//                                                 NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
//                                                     (data) => {
//                                                         console.log("Ye meri Single Post ke andar ek comments hai", data)
//                                                         NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
//                                                             console.log("Ye meri all posts hai", data);

//                                                              NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
//                                                                 (data) => {
//                                                                     console.log("Ye meri Single Post hai", data)
//                                                                     NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
//                                                                         (data) => {
//                                                                             console.log("Ye meri Single Post ke andar je sare comments hai", data)
//                                                                             NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
//                                                                                 (data) => {
//                                                                                     console.log("Ye meri Single Post ke andar ek comments hai", data)

//                                                                                 });
//                                                                         });
//                                                                 });

//                                                         });
//                                                     });
//                                             });
//                                     });

//                             });
//                         });
//                 });
//         });

// });


function apiCalling(method, url, printApiData) {
    const obj = new XMLHttpRequest();
    obj.responseType = "json";
    obj.open(method, url);
    obj.send();
    obj.addEventListener("load", () => {
        printApiData(obj.response)
    })
}
apiCalling("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
    console.log("posts", data);
    apiCalling("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
        (data) => {
            console.log("post", data)
             apiCalling("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
             (data) => {
             console.log("comments", data)
            });
      });
});











