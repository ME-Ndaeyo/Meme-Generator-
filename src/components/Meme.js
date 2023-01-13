import React from 'react';
import memeData from "../memeData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemesImage, setAllMemesImage] = React.useState(memeData);  

  function getMemeImage(e) {
    e.preventDefault();
    const rand = Math.trunc(Math.random() * allMemesImage.data.memes.length);
    const url = allMemesImage.data.memes[rand].url; 

    setMeme(prevMemeState => ({
        ...prevMemeState,
        randomImage: url
    }));
  }

  return (
    <main>
      <form>
        <input type="text" className="input--top" />
        <input type="text" className="input--bottom" />
        <button type="submit" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </form>
      <div className="meme--img-box">
        <img src={`${meme.randomImage}`} alt="meme" />
      </div>
    </main>
  );
}
