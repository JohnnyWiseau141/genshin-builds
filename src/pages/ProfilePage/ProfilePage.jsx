import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { showProfileDetails } from '../../services/profileService'
import TeamBuild from '../../components/TeamBuild/TeamBuild'
import styles from './ProfilePage.module.css'


const ProfilePage = (props) => {
   const allWeps = props.weapons
   // const allChars = props.characters
   // console.log(allChars)
   const [profile, setProfile] = useState({})
   const [weapons, setWeapons] = useState(allWeps)
   // const [characters, setCharacters] = useState(allChars)

   useEffect(() => {
      showProfileDetails(props.user.profile)
         .then(userProfile => setProfile(userProfile))
   }, [])

   return (
      <>
         <main className={styles.profile_page}>
            <h1>{profile.name}</h1>
            {/* avatar image goes here */}
            {/* edit image here  */}
            {!profile.characters === [] ?
               <>
                  Has Characters
                  <div className={styles.characters}>{profile.characters}</div>
                  {!profile.characters.map(character =>
                     <div key={character} className={styles.icon}>
                        <Link to={`/characterDetails`} state={character}>
                           <img className={styles.characterIcon} src={`https://api.genshin.dev/characters/${character}/icon`} alt="icon" />
                           <div>{character}</div>
                        </Link>
                     </div>
                  )}
               </>
               :
               'Go collect characters!!'
            }
            <TeamBuild profile={profile} weapons={weapons} />
         </main>
      </>
   );
}

export default ProfilePage;