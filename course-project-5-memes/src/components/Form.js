import React from "react"
import ArrayMemes from "../MemesData"

export default function Form(){

const [allMemes, setAllMemes] = React.useState([])

React.useEffect(function() {
 
  fetch("https://api.imgflip.com/get_memes")
  .then(res => res.json())
  .then(data => setAllMemes(data))

})
    

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

    function handleChange(event){
        setCurrentMeme(prevMeme => ({
            ...prevMeme,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div>
        <div className="form--main">
            <div className="inputs--main">
                <input 
                type="text" 
                placeholder="Top Text"
                name="topText"
                value={currentMeme.topText}
                onChange={handleChange}

                />

                <input 
                type="text" 
                placeholder="Bottom Text"
                name="bottomText"
                value={currentMeme.bottomText}
                onChange={handleChange}

                />
            </div>
            <button onClick={getImage} id="button--main">Get a new meme image  🖼</button>
        </div>
        <div className="meme--result">
            <img id="theMeme" src={currentMeme.randomImage} />
            <p className="top--text">{currentMeme.topText}</p>
            <p className="bottom--text">{currentMeme.bottomText}</p>
        </div>
        </div>

    )
}