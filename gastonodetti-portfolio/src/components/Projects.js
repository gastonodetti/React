import React from "react"
import "../css/Projects.css"
import Tool from "./Tool.js"
import Project from "./Project.js"
import toolsData from "../Data/tools"
import projectsData from "../Data/projects"


export default function Projects() {

    const toolsElements = toolsData.map(e => {
        return <Tool 
                    {...e}
                />
    })

    const projectElements = projectsData.map(e => {
        return <Project 
                    {...e}
                />
    })



    return (
        <div className="projects--div">
            <div>
                <h3>Herramientas que sé usar</h3>
                <div className="tools--container">
                   {toolsElements}
                </div>

            </div>
            <div >
                <h3>Algunos de mis proyectos</h3>
                <div className="projects--container">
                    {projectElements}
                </div>    
            </div>
        </div>
    )
}