import { useState } from "react";
import { clsx } from "clsx";
import { languages } from "./languages";
import { getFarewellText } from "./utils";

export default function AssemblyEndgame() {
  // State values
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Derived values
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameLost || isGameWon;
  // Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const languageElements = languages.map((lang, index) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    const chipClasses = clsx({
      chip: true,
      lost: index < wrongGuessCount ? true : false,
    });
    return (
      <span className={chipClasses} style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord
    .split("")
    .map((letter, index) => (
      <span key={index}>
        {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    ));

  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        key={letter}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  const recentGuess = guessedLetters[guessedLetters.length - 1]
  const missedGuess = !currentWord.split("").includes(recentGuess) && guessedLetters.length!== 0
  const gameStatusClass = clsx( "game-status", {
    won: isGameWon,
    lost: isGameLost,
    missed: missedGuess,
  })

      function renderGameStatus() {
        if (!isGameOver) {
            if(missedGuess){
              return getFarewellText()
            }
            else{
              return null
            }
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        } else {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
    }
  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className={gameStatusClass}>
        {renderGameStatus()}
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  );
}
