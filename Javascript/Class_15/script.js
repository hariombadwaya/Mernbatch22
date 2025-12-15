console.log("Ram Ram");
setTimeout(() => {
    console.log("hey syam");
}, 2000);

promise = new Promise ((res,rej)=>res("solve"))
promise.then(e=>console.log(e));
console.log("end");