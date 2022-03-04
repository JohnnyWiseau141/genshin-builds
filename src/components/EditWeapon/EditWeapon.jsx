import React, {useState,useEffect} from 'react'
import { getMyWeapons } from '../../services/profileService'
import styles from './EditWeapon.module.css'

const EditWeapon = (props) => {

  const [myWeapons, setMyWeapons] = useState([])

  useEffect(() => {
    getMyWeapons(props.user.profile)
       .then(getMyWeapons => {
          setMyWeapons(getMyWeapons)
       })
 }, [])

  const handleClick = (evt) => {
    props.setIsEdit(true)
    props.setIsEditWeapon(true)
  }
  
  return (  
    <>
    <div className={styles.selectWeapon}>
    {myWeapons.map(weapon => 
      <button onClick={handleClick}>
        <img id={weapon} key={weapon} className={styles.weapon} src={`https://api.genshin.dev/weapons/${weapon.weaponName}/icon`} alt="weapon" />
      </button>
      )}
      </div>
    </>
  );
}
 
export default EditWeapon;
