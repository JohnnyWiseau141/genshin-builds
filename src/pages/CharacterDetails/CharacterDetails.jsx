import React, { useState, useEffect, useRef, Profiler } from 'react';
import { useLocation } from "react-router-dom";
import { getCharacterDetails } from '../../services/characterService'
import styles from './CharacterDetails.module.css'
import CharacterForm from '../../components/CharacterForm/CharacterForm';
import RemoveCharacter from '../../components/RemoveCharacter/RemoveCharacter';

const CharacterDetails = (props) => {
  const [characterDetails, setCharacterDetails] = useState({})
  // const [handle, setHandle] = useState(true)
  // const handler = useRef(true)

  let location = useLocation()

  // const handleClick = (newValue) => {
  //   const value = handler.current
  //   console.log(handler.current)
  //   handler.current = newValue
  //   console.log(handler.current)
  //   setHandle(newValue)
  // }

  const handleClick = evt => {
    console.log('working')
  }

  useEffect(() => {
    getCharacterDetails(location.state)
      .then(characterDetails => setCharacterDetails(characterDetails))
  }, [])

  // useEffect(() => {
  //   setHandle(handler)
  // }, [handler])

  return (
    <>
      {/* render character gacha card */}
      <div className={styles.detailsContainer} >
        <div className={styles.cardContainer}>
          <img className={styles.gachaCard} src={`https://api.genshin.dev/characters/${location.state}/gacha-card`} alt="gacha-card" />
        </div>

        <div className={styles.btnTxt}>
          {/* render character details */}
          <div className={styles.characterDetails}>
            <h1>Name: {characterDetails.name}</h1>
            <h1>Vision: {characterDetails.vision}</h1>
            <h1>Weapon: {characterDetails.weapon}</h1>
            <h1>Nation: {characterDetails.nation}</h1>
            <h1>Rarity: {characterDetails.rarity}</h1>
          </div>

          {props.myProfile.characters.find(character => character._id) === characterDetails._id ?
            <div>
              <RemoveCharacter detailId={location.state} characterDetails={characterDetails} handleClick={handleClick}/>
            </div>
            :
            <div>
              <CharacterForm detailId={location.state} characterDetails={characterDetails} handleClick={handleClick}/>
            </div>
          }

        </div>
      </div>
    </>
  );
}

export default CharacterDetails;