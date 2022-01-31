import React from "react"
import reactLogo from "../images/logo.png"

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={reactLogo} id="reactLogo"></img>
                <h3>ReactFacts</h3>
            </div>
            <h4>React course - Project 1</h4>
        </nav>
    )
}