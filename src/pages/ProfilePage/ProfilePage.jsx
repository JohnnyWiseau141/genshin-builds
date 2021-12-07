import React, { useState, useEffect } from 'react'
import { getProfile, getMyCharacters } from '../../services/profileService'
import TeamBuild from '../../components/TeamBuild/TeamBuild'
import Characters from '../../components/Characters/Characters'
import styles from './ProfilePage.module.css'


const ProfilePage = (props) => {
   const user = props.user
   const [myProfile, setMyProfile] = useState(user)
   const [myCharacters, setMyCharacters] = useState([])

   useEffect(() => {
      getProfile(props.user.profile)
         .then(myProfile => {
            setMyProfile(myProfile)
         })
   }, [])

   useEffect(() => {
      getMyCharacters(props.user.profile)
         .then(getMyCharacters => {
            setMyCharacters(getMyCharacters)
         })
   }, [])

   return (
      <>
         <main className={styles.profile_page}>
            <h1>{myProfile.name}</h1>
            <Characters user={user} myCharacters={myCharacters}/>
            {/* avatar image goes here */}
            {/* edit image here  */}
            <TeamBuild user={user} myCharacters={myCharacters}/>
         </main>
      </>
   );
}

export default ProfilePage;