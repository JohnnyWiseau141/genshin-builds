import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { createWeapon, getWeaponDetails, removeWeaponFromHeld } from '../../services/weaponService';
import styles from './WeaponDetails.module.css'

const WeaponDetails = (props) => {
  const [weaponDetails, setWeaponDetails] = useState({})
  const [formData, setFormData] = useState({
    weaponName: '',
    weaponType: '',
    baseAttack: ''
  })

  let location = useLocation()

  useEffect(()=> {
    getWeaponDetails(location.state)
    .then(weaponDetails => setWeaponDetails(weaponDetails))
  }, [])

  const addToWeapCollection = evt => {
    setFormData({
      weaponName: `${location.state}`,
      weaponType: `${weaponDetails.type}`,
      baseAttack: `${weaponDetails.baseAttack}`
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    createWeapon(formData)
  }

  const removeFromWeapCollection = evt => {
    evt.preventDefault()
    removeWeaponFromHeld(location.state)
  }


  return ( 
    <>
    <div className={styles.detailsContainer}>
    <div>
      <img className={styles.weaponImage} src={`https://api.genshin.dev/weapons/${location.state}/icon`} alt="gacha-card" />
    </div>
    <div className={styles.weaponDetails}>
      <h1>Name: {weaponDetails.name}</h1>
      <h1>Type: {weaponDetails.type}</h1>
      <h1>Rarity: {weaponDetails.rarity}</h1>
      <h1>Base Attack: {weaponDetails.baseAttack}</h1>
      <h1>Sub Stat: {weaponDetails.subStat}</h1>
      <h1>Passive: {weaponDetails.passiveName}</h1>
      <h1>Passive description: {weaponDetails.passiveDesc}</h1>
      <h1>Location: {weaponDetails.location}</h1>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <button 
            onClick={addToWeapCollection}
            type="submit"  
            className={`button is-large is-fullwidth is-warning is-rounded`} 
            id={styles.addWep}
          >
            Add to Collection
          </button>
        </div>
      </form>
        <button 
          onClick={removeFromWeapCollection}
          type="submit"  
          className={`button is-large is-fullwidth is-danger is-rounded`} 
          id={styles.removeWep}
        >
          Remove from Collection
        </button>
    </div>
    </div>
    </>
  );
}

export default WeaponDetails;