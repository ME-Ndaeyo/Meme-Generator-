import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";
import boxes from "./boxes";

export default function Card() {
  const [square, setSquare] = useState(boxes);

  // function toggle(id) {
  //   setSquare((prevState) => {
  //     return prevState.map(el =>{
  //       return el.id === id? {...el, on: !el.on} : el
  //     })
  //   });
  // }
  
  function toggle(id) {
    setSquare((prevState) => {
      return prevState.map(el =>{
        return el.id === id? {...el, on: !el.on} : el
      })
    });
  }

  const boxEl = square.map((el) => <Box key={el.id} id={el.id} on={el.on} click={toggle} />);

  return (
    <section>
      <Navbar />
      <Meme/>
      <div className="box-container">
        {boxEl}
      </div>
    </section>
  );
}