 import React, { useEffect } from 'react'
 import { useState  } from 'react'

export default function App() {
  // let name = ", how are you";
//  const [userName, setuserName] = useState("how are you");
  const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const ans = await res.json();
       setInfo(ans);
      console.log("api is calling",ans);
    };
  const [info, setInfo] = useState([]);
  useEffect(() => {
    

    fetchData();
  }, []); 
 // console.log(info)
  return (
    <div>
    
  
     
   {/* <p>{info[0]?.title}</p> */}

   {info.map((t)=>{
    return (<p>{t.title}</p>)
   })}

    </div>
 
  )

}
