import React from "react"
import ArrayMemes from "../MemesData"

export default function Form(){

    const [currentMeme, setCurrentMeme] = React.useState("")

    function getImage(){

        console.log(currentMeme)

        let position = Math.round(Math.random() * 100)
        let newMeme = ArrayMemes.data.memes[position].url
        
        setCurrentMeme(newMeme)

    }

    

    return (
        <div>
        <div className="form--main">
            <div className="inputs--main">
                <input type="text" placeholder="Top Text"/>
                <input type="text" placeholder="Bottom Text"/>
            </div>
            <button onClick={getImage} id="button--main">Get a new meme image  🖼</button>
        </div>
        <div className="meme--result">
            <img id="theMeme" src={currentMeme} />
        </div>
        </div>

    )
}