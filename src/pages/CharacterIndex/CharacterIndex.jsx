import styles from './CharacterIndex.module.css'
import { Link } from 'react-router-dom'

const CharacterIndex = (props) => {
  return (  
    <>
    <div className={styles.container}>
      {props.characters.map(character =>
        <div key={character} className="character-image">
              <Link to={`/characters/${character}`}> 
                <img src={`https://api.genshin.dev/characters/${character}/icon`} alt="icon" />
              </Link>
        </div>
      )}
    </div>
    </>
  );
}
 
export default CharacterIndex;

