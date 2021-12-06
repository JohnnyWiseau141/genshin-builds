import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { createCharacter, getCharacterDetails, removeProfileId  } from '../../services/characterService'
import styles from './CharacterDetails.module.css'

const CharacterDetails = (props) => {
  const [characterDetails, setCharacterDetails] = useState({})
  const [formData, setFormData] = useState({
    characterName: '',
    characterWeaponType: '',
    rarity: '',
  })

  let location = useLocation()

  useEffect(()=> {
    getCharacterDetails(location.state)
    .then(characterDetails => setCharacterDetails(characterDetails))
  },[])

  const handleClick = evt => {
    setFormData({
      characterName: `${location.state}`,
      characterWeaponType: `${characterDetails.weapon}`,
      rarity: `${characterDetails.rarity}`
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    createCharacter(formData)
  }

  // const addtoCollection = () => {
  //   <button 
  //         onClick={handleClick}
  //         type="submit"  
  //         className={styles.addCharBtn} 
  //       >
  //         Add to Collection
  //       </button>
  // }

  const removeFromCollection = evt => {
    console.log('hello')
    evt.preventDefault()
    removeProfileId(location.state)
  }
  
  return (  
    <>
    <div>
      <img className={styles.gachaCard} src={`https://api.genshin.dev/characters/${location.state}/gacha-card`} alt="gacha-card" />
    </div>
    <div className={styles.characterDetails}>
      <h1>Name: {characterDetails.name}</h1>
      <h1>Vision: {characterDetails.vision}</h1>
      <h1>Weapon: {characterDetails.weapon}</h1>
      <h1>Nation: {characterDetails.nation}</h1> 
      <h1>Rarity: {characterDetails.rarity}</h1> 
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <button 
          onClick={handleClick}
          type="submit"  
          className={styles.addCharBtn} 
        >
          Add to Collection
        </button>
        <button 
          onClick={removeFromCollection}
          type="submit"  
          className={styles.addCharBtn} 
        >
          Remove from Collection
        </button>
      </form>
    </div>
    </>
  );
}
 
export default CharacterDetails;