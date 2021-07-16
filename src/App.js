import React from 'react';
import './App.css';
import axios from 'axios'
import { response } from "msw"
import { useState, useEffect } from 'react'
import JediPowers from './components/CharacterDetails'
import CharactersDetails from './components/Character'

const App = () => {

  const [characters, setCharacters] = useState([])
  const [currentId, setCurrentId] = useState(null)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const openDetails = characterId => {
    setCurrentId(id)
  }

  const closeDetails = () => {
    setCurrentId(null)
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      console.log('WORKING!! YAY')
        setCharacters(res.data)

      })
      .catch(err => {
        debugger
      })
  }, [])



  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">REACT WARS</h1>
     {characters.map(characterId => {
       return <CharactersDetails key={characterId.id} info={characterId} action={openDetails} />
     })}
    </div>
  )
}

export default App;
