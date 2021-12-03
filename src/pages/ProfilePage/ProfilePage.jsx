import React, { useState, useEffect } from 'react'
import { showProfileDetails } from '../../services/profileService'


const ProfilePage = (props) => {
   const [profile, setProfile] = useState({})

   useEffect(() => {
      showProfileDetails(props.user.profile)
         .then(userProfile => setProfile(userProfile))
   }, [])

   return (
      <>
         <h1>Working</h1>
      </>
   );
}

export default ProfilePage;