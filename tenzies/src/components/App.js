import "../css/index.css"
import Rules from "./Rules"
import Die from "./Die"
import Button from "./Button"
import React, { useEffect } from "react"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


function App() {


const [dices, setDices] = React.useState(generateRandomDices());
const [tenzies, setTenzies] = React.useState(false);
const [plays, setPlays] = React.useState(0)



useEffect(
  function(){
    const allHeld = dices.every(die => die.isHeld)
    const firstValue = dices[0].value
    const allSameValue = dices.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }}
  , [dices])


useEffect(
  function(){
    const allHeld = dices.every(die => die.isHeld)
    const firstValue = dices[0].value
    const allSameValue = dices.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }}
  , [dices])


//cambia el color del dado segun propiedad isheld
function holdDice(id){
  setDices(oldDice => oldDice.map(die => {
    return die.id === id ? {...die, isHeld: !die.isHeld} : die
})) 
}

function newDie(){
  let randomnumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  return ({
    value: randomnumber,
    isHeld: false,
    id: nanoid(),
  })
}

function rollDices(){

  tenzies ? setPlays(0) : setPlays(plays+1)

  if(tenzies){
    setTenzies(false)
    setDices(generateRandomDices())
  }

  setDices(oldDices => oldDices.map(die => {

    return die.isHeld ? 
      die :
      newDie()
    
})) 
}

function generateRandomDices(){ 

  let newArray = []
  for(let i = 0 ; i < 10 ; i++){
    newArray.push(newDie())
  }
  return newArray
}

const diceElements = dices.map(dice => <Die 
    key= {dice.id} 
    value = {dice.value} 
    isHeld={dice.isHeld}
    holdDice={() => holdDice(dice.id)}
  />) 


  return (
   <main>
     {tenzies && <Confetti />}
     <Rules />
      <div className="Dices">
        {diceElements}
      </div>
        
     <Button 
        content = {tenzies ? "Nuevo juego" : "Rueda"}
        handleClick = {() => rollDices()}
     />
     <div className="Plays">
       Tus jugadas: {plays}
     </div>
   </main>
  );
}

export default App;
