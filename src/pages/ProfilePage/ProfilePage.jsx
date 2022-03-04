import React, { useState, useEffect } from 'react'
import { getProfile, getMyCharacters, createBuild, getMyBuilds, getMyWeapons } from '../../services/profileService'
import { Link } from 'react-router-dom'
import Characters from '../../components/Characters/Characters'
import TeamBuilds from '../../components/TeamBuilds/TeamBuilds'
import Weapons from '../../components/Weapons/Weapons'
import { removeTeamBuild } from '../../services/profileService'
import styles from './ProfilePage.module.css'


const ProfilePage = (props) => {
   const user = props.user
   const [myProfile, setMyProfile] = useState(user)
   const [myCharacters, setMyCharacters] = useState([])
   const [myTeamBuilds, setMyTeamBuilds] = useState([])
   const [myWeapons, setMyWeapons] = useState([])

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

   useEffect(() => {
      getMyBuilds(props.user.profile)
         .then(getMyBuilds => {
            setMyTeamBuilds(getMyBuilds)
         })
   }, [])

   useEffect(() => {
      getMyWeapons(props.user.profile)
         .then(getMyWeapons => {
            setMyWeapons(getMyWeapons)
         })
   }, [])

   const handleRemove = builds => {
      removeTeamBuild(builds._id)
      setMyTeamBuilds(myTeamBuilds.filter(build => build._id !== builds._id))
   }

   return (
      <>
         <div className={styles.bground}>
            <main className={`${styles.profile_page}`}>
               <h1 className={`is-size-2 p-4 ${styles.text}`}>My Collection</h1>
               <br />

               <div className={styles.Weapons}>
                  <Weapons user={user} myWeapons={myWeapons} />
               </div>

               <div className={styles.Characters}>
                  <Characters user={user} myCharacters={myCharacters} />
               </div>

               <div className={styles.TeamBuilds}>
                  <TeamBuilds user={props.user} myTeamBuilds={myTeamBuilds} handleRemove={handleRemove} />
               </div>

               <div className={styles.createBuild}>
                  <br />
                  <Link
                     className="button is-primary"
                     to='/createTeamBuild'
                     onClick={addToCollection}
                     state={myCharacters}
                     id={styles.createBuild}
                  >Create a Build</Link>
               </div>
            </main>
         </div>
      </>
   );
}

export default ProfilePage;