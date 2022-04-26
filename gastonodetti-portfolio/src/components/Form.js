import React from "react"
import "../css/Form.css"

export default function Form(props) {

    return (

        <div className="popup-box">
        
      <div className="box">
      <div className="work--in--progress">Este sector está momentaneamente clausurado, ¡vuelva pronto!</div>
        <span className="close-icon" onClick={props.handleClose}>x</span>
        
        <h4>Por favor, completa el formulario y me pondré en contacto lo antes posible</h4>
        <form>
          <input type="text" id="name" placeholder="Tu nombre"></input>
          <input type="email" id="email" placeholder="Tu email"></input>
          <input type="text" id="telephone" placeholder="Tu teléfono"></input>
          <textarea type="text" id="description" placeholder="Tu consulta..."></textarea>
          <input type="submit" id="submit"></input>
        </form>

        <p className="label--contact">Si prefieres, contáctame en: </p>
        
        <p className="form--contact">gastonodetti@gmail.com |  + 54 9 351 7738898</p>
      </div>
      
    </div>
  )
}