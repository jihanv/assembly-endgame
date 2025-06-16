import React from "react"
import './App.css'
import { languages } from "./languages.js"
/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Create the language chips. Use the
 * `languages.js` file to pull in the array of
 * languages to use, which contains the language
 * name, background color, and text color.
 * 
 * Hint for layout: use a flex container that can wrap
 * to layout the languages.
 */
export default function AssemblyEndgame() {
  const languageList = languages
  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly</p>
      </header>
      <section className="game-status" >
        <h2>You win!</h2>
        <p>Well done!</p>
      </section>
      <section className="languages">
        {languageList.map(language => <span key={language.name} className="language" style={{
          backgroundColor:language.backgroundColor,
          color: language.color}}>{language.name}</span>)}
      </section>
    </main>
  )
}
