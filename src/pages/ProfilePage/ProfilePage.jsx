import React, { useState, useEffect } from 'react'
import { showProfileDetails } from '../../services/profileService'
import styles from './ProfilePage.module.css'


const ProfilePage = (props) => {
   const [profile, setProfile] = useState({})

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
            <div className="characters">{profile.characters}</div>
            <div className="builds">{profile.builds}</div>
         </main>
      </>
   );
}

export default ProfilePage;