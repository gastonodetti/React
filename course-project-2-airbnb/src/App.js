import React from "react";
import Header from "./components/Header"
import Card from "./components/Card"
import CardElements from "./data"


/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.

https://www.figma.com/file/4YjrygFEXOcDp9AAnVFv7o/Airbnb-Experiences?node-id=0%3A1

https://scrimba.com/learn/learnreact/project-sold-out-badge-cod6a41078bdec8db3c39513b
*/


export default function App(){

  const cardElements = CardElements.map(e => {

    return <Card 
              key={e.id}
              {...e}
              />

  })

  return (
    <div>
      <Header />
      <div className="cardHolder">
        {cardElements}
      </div>
    </div>
  )
}