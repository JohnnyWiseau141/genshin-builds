import React from 'react'
import styles from '../EditCharacter/EditCharacter.module.css'

const EditCharacter = (props) => {
   const allCharacters = props.myCharacters

   const changeImage = (evt) => {
      console.log(evt.target.id)
      props.setImage(`https://api.genshin.dev/characters/${evt.target.id}/icon`)
      props.setIsEditWeapon(false)
      props.setSelectedChar(evt.target.id)
   }

   return (
      <>
      <div className={styles.selectCharacter}>
         {allCharacters ?
            <>
               {allCharacters.map(character =>
                  <>
                     <div key={character.characterName} className={styles.icon}>
                        <button
                           onClick={changeImage}
                        >
                           <img className={styles.characterIcon} id={character.characterName} key={character.characterName} src={`https://api.genshin.dev/characters/${character.characterName.toLowerCase()}/icon`} alt="icon" />
                        </button>
                     </div>
                  </>
               )}
            </>
            :
            'Go collect characters!!'
         }
      </div>
      </>
   );
}

export default EditCharacter;

