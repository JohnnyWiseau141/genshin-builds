import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { getWeaponDetails } from '../../services/weaponService';

const WeaponDetails = (props) => {
  const [weaponDetails, setWeaponDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getWeaponDetails(location.state)
    .then(weaponDetails => setWeaponDetails(weaponDetails))
  }, [])

  return ( 
    <>
    <img src={`https://api.genshin.dev/weapons/${location.state}/icon`} alt="gacha-card" />
    <h1>Name: {weaponDetails.name}</h1>
    <h1>Type: {weaponDetails.type}</h1>
    <h1>Rarity: {weaponDetails.rarity}</h1>
    <h1>Base Attack: {weaponDetails.baseAttack}</h1>
    <h1>Sub Stat: {weaponDetails.subStat}</h1>
    <h1>Passive: {weaponDetails.passiveName}</h1>
    <h1>Passive description: {weaponDetails.passiveDesc}</h1>
    <h1>Location: {weaponDetails.location}</h1>
    </>
   );
}
 
export default WeaponDetails;