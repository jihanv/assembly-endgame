import React from "react"
import './App.css'
import { languages } from "./languages.js"
/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: 
 * 1. Save a "currentWord" in state. Initialize as "react".
 * 2. Map over the letters of the word (you'll need to turn 
 *    the string into an array of letters first) and display
 *    each one as a <span>. Capitalize the letters when
 *    displaying them.
 * 3. Style to look like the design. You can get the underline 
 *    effect on the box using `border-bottom`.
 */
export default function AssemblyEndgame() {
  const languageList = languages.map(language => <span key={language.name} className="language" style={{
          backgroundColor:language.backgroundColor,
          color: language.color}}>{language.name}</span>)
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
        {languageList}
      </section>
    </main>
  )
}
