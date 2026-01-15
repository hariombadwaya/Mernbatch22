import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}){
    const [userDetails , setUserDetails] = useState({
  fullName : "Hariom",
  email : "hariom@gmail.com",
    });

     return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
}
 



export default UserContext;