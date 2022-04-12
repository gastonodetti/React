import "../css/index.css"
import Rules from "./Rules"
import Die from "./Die"
import Button from "./Button"
import React from "react"
import { nanoid } from 'nanoid'

function App() {

const [dices, setDices] = React.useState(generateRandomDices())


function generateRandomDices(){ 
  let newArray = []
  for(let i = 0 ; i < 10 ; i++){
    let randomnumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    let dice = {
      value: randomnumber,
      isHeld: false,
      id: nanoid()
    }
    newArray.push(dice)
  }
  return newArray
}

const diceElements = dices.map(dice => <Die key= {dice.id} value = {dice.value} isHeld={dice.isHeld}/>) 


  return (
   <main>
     <Rules />
      <div className="Dices">
        {diceElements}
      </div>
        
     <Button 
        handleClick = {() => setDices(generateRandomDices())}
     />
   </main>
  );
}

export default App;
