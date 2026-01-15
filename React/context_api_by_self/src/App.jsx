import { Routes, Route } from "react-router-dom"
import Home from "./pages/HomePage"
import Profile from "./pages/ProfilePage"
import Navbar from './components/Navbar';
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div>
   <UserProvider>
      <Navbar></Navbar>
      
     <Routes>
      <Route path="/" element = {<Home/>} ></Route>
      <Route path="/profile" element = {<Profile/>}></Route>
     </Routes>

</UserProvider>
    </div>
  )
}

export default App