import {Routes, Route, } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Contacts from "./pages/Contacts.jsx"
import About from "./pages/About.jsx"
import Header from "./components/Header.js"
function App() {
  return (
    <>
    <Header/>
    <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/contact" element={<Contacts/>}></Route>
  <Route path="/about" element={<About/>}></Route>

    </Routes>
    </>
  )
}

export default App;
