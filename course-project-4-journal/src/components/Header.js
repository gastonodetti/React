import React from "react"
import worldLogo from "../images/world.png"

export default function Header(){
    return (
        <div className="header--div">
            <img id="header--logo" src={worldLogo}/>
            <span>my travel journal.</span>
        </div>
    )
}