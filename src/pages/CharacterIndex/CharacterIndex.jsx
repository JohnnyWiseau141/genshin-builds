import styles from './CharacterIndex.module.css'
import { Link } from 'react-router-dom'

const CharacterIndex = (props) => {
  return (  
    <>
    <div className={styles.container}>
      {props.characters.map(character =>
        <div key={character} className={styles.icon}>
              <Link to={`/characterDetails`} state={character}> 
                <img className={styles.characterIcon} src={`https://api.genshin.dev/characters/${character}/icon`} alt="icon" />
                <div className={styles.box}>{character}</div>
              </Link>
        </div>
      )}
    </div>
    </>
  );
}
 
export default CharacterIndex;