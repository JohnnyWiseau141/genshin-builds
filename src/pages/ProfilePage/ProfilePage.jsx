import React, { useState, useEffect } from 'react'
import { getProfile, getMyCharacters, createBuild, getMyBuilds } from '../../services/profileService'
import { Link } from 'react-router-dom'
import Characters from '../../components/Characters/Characters'
import TeamBuilds from '../../components/TeamBuilds/TeamBuilds'
import { removeTeamBuild } from '../../services/profileService'
import styles from './ProfilePage.module.css'


const ProfilePage = (props) => {
   const user = props.user
   const [myProfile, setMyProfile] = useState(user)
   const [myCharacters, setMyCharacters] = useState([])
   const [myTeamBuilds, setMyTeamBuilds] = useState([])

   const [formData, setFormData] = useState({
      createdBy: props.user.profile,
      character1: [],
      character2: [],
      character3: [],
      character4: []
   })

   const addToCollection = evt => {
      createBuild(props.user.profile, formData)
   }

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

   useEffect(() =>{
      getMyBuilds(props.user.profile)
      .then(getMyBuilds =>{
         setMyTeamBuilds(getMyBuilds)
      })
   },[])

   const handleRemove = builds => {
      removeTeamBuild(builds._id)
      setMyTeamBuilds(myTeamBuilds.filter(build => build._id !== builds._id))
   }

   return (
      <>
         <div className={styles.bground}>
            <main className={styles.profile_page}>
               <h1 className={styles.text}>{myProfile.name}'s character collection:</h1>
               <br />
               <div className={styles.imgHolder}>
                  <Characters className={styles.charaImage} user={user} myCharacters={myCharacters} />

                  <TeamBuilds user={props.user} myTeamBuilds={myTeamBuilds} handleRemove={handleRemove}/>
               </div>
               <div>
                  <br/>
                  <Link
                     className="button"
                     to='/createTeamBuild'
                     onClick={addToCollection}
                     state={myCharacters}
                  >Create a Build</Link>
               </div>
            </main>
         </div>
      </>
   );
}

export default ProfilePage;