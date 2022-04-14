import React from "react"
import Me from "../images/my--photo.png"
import "../css/Presentation.css"

export default function Presentation(){
    return (
        <div className="presentation--div">
            <img className="presentation--img" src={Me} />
            <div>
            <h2>Un poco sobre mí</h2>
            <p>¡Hola! Comencé mi desarrollo como programador hace un año y medio. En el 2021 fui seleccionado para obtener una beca de la carrera, impulsada por Mercado Libre y Globant, Certified
                 Tech Developer en <a href="https://www.digitalhouse.com/ar/acciones/certified-tech-developer" target="_blank"><b>Digital House</b></a>, en donde actualmente me estoy formando. 
                 <br/><br/>
                Quienes me conocen saben que soy una persona inquieta a la que le encantan los desafíos, ¡es por eso que me encuentro en búsqueda de mi primer trabajo en el mundo IT!             
            </p>    
            </div>

        </div>
    )
}