import React from "react";
import "../css/Projects.css"

export default function Tool(props){
    return (
        <div className="tool">
            
            <img alt={props.name} src={props.iconUrl}/>
            
        </div>
    )
}