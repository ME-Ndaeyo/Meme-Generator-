import memeData from "../memeData";

export default function Form(){
    function show(e){
      const rand = Math.trunc(Math.random() * memeData.data.memes.length);
      console.log(memeData.data.memes[rand].url);
      e.preventDefault();
    }

    return (
      <form>
        <div className="input--box">
          <input type="text" />
          <input type="text" />
        </div>
        <button type="submit" onClick={show}>
          Get a new meme image
        </button>
      </form>
    );
}