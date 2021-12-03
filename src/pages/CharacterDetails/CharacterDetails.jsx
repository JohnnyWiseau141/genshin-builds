import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { getCharacterDetails } from '../../services/characterService'

const CharacterDetails = (props) => {
  const [characterDetails, setCharacterDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getCharacterDetails(location.state)
    .then(characterDetails => setCharacterDetails(characterDetails))
  },[])

  return (  
    <>
    <img src={`https://api.genshin.dev/characters/${location.state}/icon`} alt="gacha-card" />
    <h1>Name: {characterDetails.name}</h1>
    <h1>Vision: {characterDetails.vision}</h1>
    <h1>Weapon: {characterDetails.weapon}</h1>
    <h1>Nation: {characterDetails.nation}</h1>
    </>
  );
}
 
export default CharacterDetails;