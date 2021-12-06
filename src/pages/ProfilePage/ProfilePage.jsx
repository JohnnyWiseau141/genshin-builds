import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { showProfileDetails, getMyCharacters } from '../../services/profileService'
import TeamBuild from '../../components/TeamBuild/TeamBuild'
import styles from './ProfilePage.module.css'


const ProfilePage = (props) => {
   // const allWeps = props.weapons
   const user = props.user
   const [profile, setProfile] = useState(user)
   // const [weapons, setWeapons] = useState(allWeps)
   const [myCharacters, setMyCharacters] = useState([])

   useEffect(() => {
      getMyCharacters(props.user.profile)
         .then(ownedCharacters => setMyCharacters(ownedCharacters))
   }, [])

   return (
      <>
         <main className={styles.profile_page}>
            <h1>{profile.name}</h1>
            {/* avatar image goes here */}
            {/* edit image here  */}
            {myCharacters ?
               <>
                  {myCharacters.map(character =>
                     <>
                        <div key={character} className={styles.icon}>
                           <Link to={`/characterDetails`} state={character.characterName.toLowerCase()}>
                              <img className={styles.characterIcon} src={`https://api.genshin.dev/characters/${character.characterName.toLowerCase()}/icon`} alt="icon" />
                           </Link>
                        </div>
                     </>
                  )}
               </>
               :
               'Go collect characters!!'
            }
            <TeamBuild user={user} />
         </main>
      </>
   );
}

export default ProfilePage;