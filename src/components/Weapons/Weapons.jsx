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
                        <Link to={`/weapon-details/${weapon.weaponName}`} state={weapon.weaponName.toLowerCase()}>
                           <img className={styles.weaponIcon} key={weapon.weaponName} src={`https://api.genshin.dev/weapons/${weapon.weaponName.toLowerCase()}/icon`} alt="icon" />
                           <p>{weapon.weaponName[0].toUpperCase() + weapon.weaponName.slice(1,20)}</p>
                           {/* add weapon name handler here */}
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