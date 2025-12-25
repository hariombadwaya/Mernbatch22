
import { useEffect, useState } from 'react';
import './App.css';

function App() {
     const [profile, setProfile]= useState([]);
      async function fetchData() {
         let res = await fetch("https://api.github.com/users")
         let result = await res.json()
          setProfile(result);
      }

     useEffect(()=>{
       fetchData();
     },[])

  return (
   <>
     { profile.map((user)=>
      <div key= {user.id} >

      <img src={user.avatar_url} alt='image_loading'  width="80px" />
      <p>{user.login}</p>

      </div>
    )
      }
    
   </>
  );
}

export default App;
