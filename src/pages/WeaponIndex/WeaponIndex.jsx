import styles from './WeaponIndex.module.css'
import { Link } from 'react-router-dom'

const WeaponIndex = (props) => {
  return (
    <>
      <div className={styles.bground}>
        <div className={styles.container}>
          {props.weapons.map(weapon =>
            <div key={weapon} className={styles.weaponImage}>
              <Link to={`/weaponDetails`} state={weapon}>
                <img className={styles.weaponIcon} src={`https://api.genshin.dev/weapons/${weapon}/icon`} alt="Weapon" />
                {/* add conditional that fixes broken images */}

                <div className={styles.box}>{weapon[0].toUpperCase() + weapon.slice(1, 20)}</div>
                {/* add conditional that removes '-', replaces it with spaces, and capitilize second+ word(s) */}
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WeaponIndex;