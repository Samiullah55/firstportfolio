import React from "react";
import '../src/App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Footer from "./components/Footer";
import Skills from "./pages/Skills/Skills";
function App(){
    return(
        <div className="App">
            <Router>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes> 
            </Router>
            <Footer/>
        </div>

    );
}

export default App;