import React from "react";
import { useEffect } from "react";
import memeData from "../memeData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemesImage, setAllMemesImage] = React.useState(memeData);
  // const [api, setApi] = React.useState({});

  useEffect(
    function callApi(){
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then((data) => setAllMemesImage(data.data.memes))
      .catch((err) => console.log(`Error ${err}`));
    }
  , [])
  console.log(allMemesImage)

  function getMemeImage(e) {
    e.preventDefault();
    const rand = Math.trunc(Math.random() * allMemesImage.length);
    const url = allMemesImage[rand].url;

    setMeme((prevMemeState) => ({
      ...prevMemeState,
      randomImage: url,
    }));
    // callApi()
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="Top text"
          className="input--top"
          onChange={handleChange}
          value={meme.topText}
          name="topText"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="input--bottom"
          onChange={handleChange}
          value={meme.bottomText}
          name="bottomText"
        />
        <button type="submit" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </form>
      <div className="meme--img-box">
        <img src={meme.randomImage} alt="meme" className="meme--img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
