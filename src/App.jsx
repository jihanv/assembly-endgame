import "./App.css";
import { languages } from "./languages.js";
import { useState } from "react";
import { clsx } from "clsx";

export default function AssemblyEndgame() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const [currentWord, setCurrentWord] = useState("react");

  const [guessedLetters, setGuessedLetters] = useState([]);

  function addGuessedLetter(letter) {
    let inWord = false;
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
    if (currentWord.split("").includes(letter.toLowerCase())) {
      inWord = true;
    }
    changeKeyboard(letter, inWord);
  }

  function changeKeyboard(letter, inWord) {
    console.log("Changing keyboard");
    const newButtonClasses = clsx({
      key: true,
      correct: inWord,
      incorrect: !inWord,
    });
    console.log(newButtonClasses);
    setPressedKey((prevKeyboard) => {
      const newkyboard = prevKeyboard.map((key) => {
        if (key.props["data-character"] === letter.toUpperCase()) {
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              key={key.index}
              className={newButtonClasses}
              data-character={letter.toUpperCase()}
            >
              {letter.toUpperCase()}
            </button>
          );
        }
        return key;
      });
      return newkyboard;
    });
  }
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
  ));

  const keys = alphabet.split("").map((key, index) => {
    const buttonClass = clsx("key");
    return (
      <button
        onClick={() => addGuessedLetter(key)}
        key={index}
        className={buttonClass}
        data-character={key.toUpperCase()}
      >
        {key.toUpperCase()}
      </button>
    );
  });

  const [pressedKey, setPressedKey] = useState(keys);
  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="languages">{languageList}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{pressedKey}</section>
      <button className="new-game">New Game</button>
    </main>
  );
}
