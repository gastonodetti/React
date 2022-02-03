import React from "react"
import Troll from "../images/troll.png"

export default function Header(){
    return(
        <div className="header--main">
            <div className="header--logo">
                <img src={Troll}/>
                <h1>Meme Generator</h1>
            </div>
            <span>React Course - Project 3</span>
        </div>
    )
}