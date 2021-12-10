import React from 'react'
import styles from './EditWeapon.module.css'

const EditWeapon = (props) => {
  
  const handleClick = (evt) => {
    props.setIsEdit(true)
    props.setIsEditWeapon(true)
  }
  
  return (  
    <>
    <div className={styles.selectWeapon}>
    {props.weapons.map(weapon => 
      <button onClick={handleClick}>
        <img id={weapon} key={weapon} className={styles.weapon} src={`https://api.genshin.dev/weapons/${weapon}/icon`} alt="weapon" />
      </button>
      )}
      </div>
    </>
  );
}
 
export default EditWeapon;
