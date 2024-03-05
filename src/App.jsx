import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import { Route ,Router,Routes } from "react-router"
import Work from "./Pages/Work/Work"
import About from "./Pages/About/About"
import { BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Footer from "./Components/Footer/Footer"

function App(){
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Work" element={<Work/>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>
        {/* <About/> */}
        {/* <Work/> */}
        </>
    )
}
export default App