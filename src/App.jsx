import React from "react";
import Header from "../src/components/Header";
import Cards from "../src/components/Cards";
import data  from "./data"

export default function App(){
  const cards = data.map(item =>{
    if (item.id < data.length) {
      return (
        <>
          <Cards
            key = {item.id}
            {...item}
          />
          <hr/>
        </>
      )
    }else{
      return(
        <Cards
            key = {item.id}
            {...item}
          />
      )
    }
  })

  return(
    <div>
      <Header/>
      <section className="card--list">
        {cards}
      </section>
    </div>
 
  )
}
