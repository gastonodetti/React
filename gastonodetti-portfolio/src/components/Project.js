import React from "react";
import "../css/Projects.css"

export default function Project(props){
    return (
        <div className="card">
            <a href={props.link} target="_blank" rel="noopener noreferrer">{props.name}</a>
            <div className="project--div">
                Hola!    
            </div>    
        </div>
    )
}