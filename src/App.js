import React from "react";
import "./App.css";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";

export default function Card() {;
  return (
    <section>
      <Navbar />
      <Meme/>
    </section>
  );
}