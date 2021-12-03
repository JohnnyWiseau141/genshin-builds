import styles from './WeaponIndex.module.css'
import { Link } from 'react-router-dom'

const WeaponIndex = (props) => {
  return (  
    <>
    <div className={styles.container}>
      {props.weapons.map(weapon =>
        <div key={weapon} className="weapon-image">
              <Link to={`/weaponDetails`} state={weapon}> 
                <img className={styles.weaponIcon} src={`https://api.genshin.dev/weapons/${weapon}/icon`} alt="icon" />
              </Link>
        </div>
      )}
    </div>
    </>
  );
}
 
export default WeaponIndex;

