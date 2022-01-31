import React from "react";
import Header from "./components/Header"
import Card from "./components/Card"


/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.

https://scrimba.com/learn/learnreact/project-map-experiences-data-into-components-co0704006bcf75aae48fb04c3
*/


export default function App(){
  return (
    <div>
      <Header />
      <Card 
        img="hero1.png"
        rating="5.0"
        reviewCount={6}
        location="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      
      />
    </div>
  )
}