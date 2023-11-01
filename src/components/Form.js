import React, { useEffect, useState } from "react";

export default function Form(props) {
  const [getImg, setImg] = useState({
    topText: "",
    BottomText: "",
    ImageUrl: "",
  });
  const [AllMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getUrl() {
    const index = Math.floor(AllMemes.length * Math.random());
    const url = AllMemes[index].url;
    setImg((prevmeme) => ({
      ...prevmeme,
      ImageUrl: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setImg((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  }

  return (
    <div className="Form">
      <div className="input-text">
        <input
          type="text"
          className="input-box"
          name="topText"
          value={getImg.topText}
          onChange={handleChange}
          placeholder="Enter the upper text"
        />
        <input
          type="text"
          className="input-box"
          name="BottomText"
          value={getImg.BottomText}
          onChange={handleChange}
          placeholder="Enter the lower text"
        />
      </div>
      <button className="button" onClick={getUrl}>
        Get a new image meme
      </button>
      <div className="meme">
        {getImg.ImageUrl !== "" && (
          <img src={getImg.ImageUrl} className="meme-img" alt="" />
        )}
        {getImg.ImageUrl !== "" && (
          <p className="meme-upper">{getImg.topText}</p>
        )}
        {getImg.ImageUrl !== "" && (
          <p className="meme-lower">{getImg.BottomText}</p>
        )}
      </div>
    </div>
  );
}
