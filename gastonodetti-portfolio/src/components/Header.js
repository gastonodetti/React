import React from "react"
import Form from "./Form"
import "../css/Header.css"

export default function Header(){

    const [isOpen, setIsOpen] = React.useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    
    return (
        
        <div id="header" className="header--div">
           <a href="#header" className="header--logo">G</a>
           <button onClick={togglePopup} className="header--a" href="#">Contáctame</button>
           {isOpen && <Form handleClose={togglePopup} />}
        </div>
        
    )
}

