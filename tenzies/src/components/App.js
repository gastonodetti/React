import "../css/index.css"
import Rules from "./Rules"
import Die from "./Die"
import Button from "./Button"
import React, { useEffect } from "react"
import { nanoid } from 'nanoid'

function App() {


const [dices, setDices] = React.useState(generateRandomDices());
const [tenzies, setTenzies] = React.useState(false);

useEffect(
  function(){
    console.log("hola")
  }
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
     <Rules />
      <div className="Dices">
        {diceElements}
      </div>
        
     <Button 
        handleClick = {() => rollDices()}
     />
   </main>
  );
}

export default App;
