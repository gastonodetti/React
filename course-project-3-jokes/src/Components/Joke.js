import React from "react"

export default function Joke(props){
/*
    let question = ""

    if (prop.setup) {
        question = "Setup: " + prop.setup
    }
    
    en la linea 15 digo "si esto es verdadero, que se renderize esto otro. 
    Me ahorro todo el if y no queda el elemento h3 vacio"
*/
    return (
        <div  className="jokes">
            {props.setup && <h3>Setup: {props.setup}</h3>} 
            <h4>Punchline: {props.punchline}</h4>
        </div>
    )
}