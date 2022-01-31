import React from "react";
import Header from "./components/Header"
import Card from "./components/Card"

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