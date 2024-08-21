import React, { useEffect, useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemesData() {
      await fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then(({ data }) => setAllMemes(data.memes));
    }

    getMemesData();
  }, []);

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const { url } = allMemes[randomIndex];
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChangeText(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
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
          name="topText"
          value={meme.topText}
          onChange={handleChangeText}
          className="form--input"
        />
        <input
          type="text"
          placeholder="And take my money"
          aria-label="meme-bottom-text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChangeText}
          className="form--input"
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </section>

      <section className="meme--image-container">
        <img src={meme.randomImage} alt="Meme Image" className="meme--image" />
        <h2 className="meme--text top-text">{meme.topText}</h2>
        <h2 className="meme--text bottom-text">{meme.bottomText}</h2>
      </section>
    </main>
  );
}
