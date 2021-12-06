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

  const handleClick = evt => {
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

  const removeFromCollection = evt => {
    console.log('working')
    evt.preventDefault()
    removeWeaponFromHeld(location.state)
  }


  return ( 
    <>
    <div>
      <img src={`https://api.genshin.dev/weapons/${location.state}/icon`} alt="gacha-card" />
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
        <button 
          onClick={handleClick}
          type="submit"  
          className={styles.addWeapBtn} 
        >
          Add to Collection
        </button>
        <button 
          onClick={removeFromCollection}
          type="submit"  
          className={styles.addWeapBtn} 
        >
          Remove from Collection
        </button>
      </form>
    </div>
    </>
  );
}
 
export default WeaponDetails;