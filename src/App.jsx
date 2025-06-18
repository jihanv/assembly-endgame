import "./App.css";
import { languages } from "./languages.js";
import { useState } from "react";

export default function AssemblyEndgame() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const [currentWord, setCurrentWord] = useState("react");

  const languageList = languages.map((language) => (
    <span
      key={language.name}
      className="language"
      style={{
        backgroundColor: language.backgroundColor,
        color: language.color,
      }}
    >
      {language.name}
    </span>
  ));

  const letterElements = currentWord.split("").map((letter, index) => (
          <span key={index} className="letter">
            {letter.toUpperCase()}
          </span>
        ))

  const keys = alphabet.split("").map((key, index) => (
    <span key={index} className="key">
      {key.toUpperCase()}
    </span>
  ));

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe from Assembly
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="languages">{languageList}</section>
      <section className="word">
        {letterElements}
      </section>
      <section className="keyboard">
        {keys}
      </section>
      <button className="new-game">New Game</button>
    </main>
  );
}
