import React, { useState } from "react";

const Jokes = () => {
  const [joke, setJoke] = useState("");

  const fetchApi = () => {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setJoke(data.joke))
      
  };

  return (
    <div className="joke-container">
    <h2>Random  Joke Generator</h2>
    <button onClick={fetchApi}>Generate Joke</button>
    <p>{joke}</p>
  </div>
  );
};

export default Jokes;
