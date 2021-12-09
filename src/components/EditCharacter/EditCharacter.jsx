import React, { useState, useEffect } from 'react'
import styles from '../EditCharacter/EditCharacter.module.css'
import { addCharacter } from '../../services/profileService'
import { getProfile } from '../../services/profileService'
import { useLocation } from 'react-router-dom'

const EditCharacter = (props) => {
   const allCharacters = props.myCharacters
   const [myProfile, setMyProfile] = useState(props.profile)
   const location = useLocation()
   console.log(myProfile.teamBuilds)

   const changeImage = (evt) => {
      props.setImage(`https://api.genshin.dev/characters/${evt.target.id}/icon`)
      props.setIsEditWeapon(false)
      props.setSelectedChar(evt.target.id)
      addCharacter(myProfile.teamBuilds[myProfile.teamBuilds.length-1])
   }

   useEffect(()=>{
      getProfile(props.user.profile)
      .then(profile =>{
         setMyProfile(profile)
      })
   },[props.user.profile])

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
