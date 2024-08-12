import React from "react";
import memesData from "../memeData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const { memes } = allMemeImages.data;
    const randomIndex = Math.floor(Math.random() * memes.length);
    const { url } = memes[randomIndex];
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChangeTopText(text) {
    setMeme((prevMeme) => ({
      ...prevMeme,
      topText: text,
    }));
  }

  function handleChangeBottomText(text) {
    setMeme((prevMeme) => ({
      ...prevMeme,
      bottomText: text,
    }));
  }

  return (
    <main className="meme">
      <section className="meme--form">
        <label htmlFor="meme-top-text" className="form--label">
          Top text
        </label>
        <label htmlFor="meme-bottom-text" className="form--label">
          Bottom text
        </label>

        <input
          type="text"
          placeholder="Shut up"
          aria-label="meme-top-text"
          onChange={(e) => handleChangeTopText(e.target.value)}
          className="form--input"
        />
        <input
          type="text"
          placeholder="And take my money"
          aria-label="meme-bottom-text"
          onChange={(e) => handleChangeBottomText(e.target.value)}
          className="form--input"
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </section>

      <section className="meme--image-container">
        <img src={meme.randomImage} alt="Meme Image" className="meme--image" />
        <h2 className="meme--top-text">{meme.topText}</h2>
        <h2 className="meme--bottom-text">{meme.bottomText}</h2>
      </section>
    </main>
  );
}
