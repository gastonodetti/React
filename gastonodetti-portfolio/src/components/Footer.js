import React from "react"
import Form from "./Form"
import "../css/Footer.css"

export default function Footer() {

    const [isOpen, setIsOpen] = React.useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }

    return(
        <div className="footer--main--div">
           <div className="footer--contactMe">
                <h2>¿Trabajemos juntos?</h2>
                <p>Pongámonos en contacto y charlemos un poco.</p>
                <button className="footer--button" onClick={togglePopup} href="#">¡Clickéame!</button>
                {isOpen && <Form  handleClose={togglePopup} />}                
           </div>
           <div className="footer--social">
                <a href="https://www.linkedin.com/in/gastonodetti/" target="_blank">Linkedin</a>
                <a href="https://www.facebook.com/GastonOdetti/" target="_blank">Facebook</a>
               <a href="https://www.instagram.com/gaston.odetti/" target="_blank">Instagram</a>
               <a href="https://github.com/gastonodetti" target="_blank">GitHub</a>
           </div>
           <span className="footer--signature">Handcrafted by @GastonOdetti</span>
              
        </div>

    )
}