import React from "react"
import Joke from "./Components/Joke"
import jokesData from "./Components/jokesData"

export default function App (){

    const jokeElements = jokesData.map(e => {

        return <Joke 
            setup={e.setup}
            punchline={e.punchline}
        />
    })

    return (
        <div>
            <h1>Jokes</h1>
           
            {jokeElements}

        </div>

    )
}