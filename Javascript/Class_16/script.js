// let b= document.getElementsByTagName("body")
 let b= document.body;
let btn = document.createElement("button");
btn.textContent="Press";
b.append(btn)

//let h = document.createElement("h1");
// h.textContent="Button is clicked";
// b.append(h)

btn.addEventListener("click", ()=>{
  let h = document.createElement("h1");
h.textContent="Button is clicked";
let btn2= document.createElement("button");
btn2.textContent= "delete";
b.append(h)
b.append(btn2)
btn2.addEventListener("click", ()=>{
    b.removeChild(h)
    b.removeChild(btn2)
})
});
