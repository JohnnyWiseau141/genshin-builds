import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Characters/Characters.module.css'

const Characters = (props) => {
   const allCharacters = props.myCharacters

   return (
      <>
         {allCharacters ?
            <>
               {allCharacters.map(character =>
                  <>
                     <div key={character.characterName} className={styles.icon}>
                        <Link to={`/characterDetails`} state={character.characterName.toLowerCase()}>
                           <img className={styles.characterIcon} key={character.characterName} src={`https://api.genshin.dev/characters/${character.characterName.toLowerCase()}/icon`} alt="icon" />
                           {character.characterName}
                        </Link>
                     </div>
                  </>
               )}
            </>
            :
            'Go collect characters!!'
         }
      </>
   );
}

export default Characters;