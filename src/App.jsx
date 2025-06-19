import "./App.css";
import { languages } from "./languages.js";
import { useState } from "react";
import { clsx } from "clsx";

export default function AssemblyEndgame() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const [currentWord, setCurrentWord] = useState("react");

  const [guessedLetters, setGuessedLetters] = useState([]);

  // Derived values
    const wrongGuessCount = 
        guessedLetters.filter(letter => !currentWord.includes(letter)).length
    console.log(wrongGuessCount)

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );

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

  const letterElements = currentWord.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)

    const letterElementClass = clsx({
      letter: true,
      hidden: !isCorrect,
    })
    return (
      <span key={index} className={letterElementClass}>
        {letter.toUpperCase()}
      </span>
    )
  });

  const keys = alphabet.split("").map((key, index) => {
    const isGuessed = guessedLetters.includes(key)
    const isCorrect = isGuessed && currentWord.includes(key)
    const isWrong = isGuessed && !currentWord.includes(key)
    const buttonClass = clsx({
      key: true,
      correct: isCorrect,
      incorrect: isWrong
    })
    return (
      <button
        onClick={() => addGuessedLetter(key)}
        key={index}
        className={buttonClass}
      >
        {key.toUpperCase()}
      </button>
    );
  });

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
      <section className="keyboard">{keys}</section>
      <button className="new-game">New Game</button>
    </main>
  );
}
