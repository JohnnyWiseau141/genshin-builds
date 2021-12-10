import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Weapons/Weapons.module.css'

const Weapons = (props) => {
   const allWeapons = props.myWeapons

   return (
      <>
         {allWeapons ?
            <>
               {allWeapons.map(weapon =>
                  <>
                     <div key={weapon.weaponName} className={styles.icon}>
                        <Link to={`/weaponDetails`} state={weapon.weaponName.toLowerCase()}>
                           <img className={styles.weaponIcon} key={weapon.weaponName} src={`https://api.genshin.dev/weapons/${weapon.weaponName.toLowerCase()}/icon`} alt="icon" />
                           <p>{weapon.weaponName}</p>
                        </Link>
                     </div>
                  </>
               )}
            </>
            :
            'Go collect weapons!!'
         }
      </>
   );
}

export default Weapons;