import React from "react"
import data from "./data"
import Header from "./components/Header"
import Travel from "./components/Travel"

export default function App(){

    const locations = data.map(item => {
        return <Travel 
        
            {...item}

        />
    })


    return (
        <div>
        <Header />
        {locations}
        </div>
    )
}