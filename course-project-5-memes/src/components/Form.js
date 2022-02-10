import React from "react"
import ArrayMemes from "../MemesData"

export default function Form(){



    const [allMemeImages] = React.useState(ArrayMemes)

    const [currentMeme, setCurrentMeme] = React.useState({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        })

    function getImage(){

        let position = Math.round(Math.random() * 100)
        let newMeme = ArrayMemes.data.memes[position].url
        
        setCurrentMeme(prevMeme => ({
            ...prevMeme,
            randomImage: newMeme
        }))

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
            <img id="theMeme" src={currentMeme.randomImage} />
        </div>
        </div>

    )
}