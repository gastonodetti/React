import React from "react"
import Header from "./components/Header"
import Introduction from "./components/Introduction";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Footer from "./components/Footer"


export default function App() {


  return (
    <div>
      
        <Header />
        <Introduction />
        <Presentation />
        <Projects />
        <Footer />
        
    </div>
  );
}
