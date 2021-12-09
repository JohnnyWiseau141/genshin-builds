import React, { useState, useEffect } from 'react';
import styles from './CreateTeamBuild.module.css'
import { useLocation } from "react-router-dom";
// import Characters from '../../components/Characters/Characters';
import EditCharacter from '../../components/EditCharacter/EditCharacter'
import EditWeapon from '../../components/EditWeapon/EditWeapon'
import SelectTeam from '../../components/SelectTeam/SelectTeam'
import { getProfile } from '../../services/profileService';

const CreateTeamBuild = (props) => {
   const defaultImg = 'https://png2.cleanpng.com/sh/7647b85e9ceb0f4134eddbf507242a11/L0KzQYm3VMAzN5d2fZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfRme5x5hAI2d3HvfMHokPVzNaFxjeU2YX7nPb7wjwV0NaRuReRuc4TkgsW0VfFkOmJpSdUEZEe6Qoi1Vck3QGg8TaI6NUK1Roi3WMc3PmU6RuJ3Zx==/kisspng-computer-icons-desktop-wallpaper-plus-and-minus-si-restart-5ac21d1c9d7727.596877501522670876645.png'
   const location = useLocation()
   const myCharacters = location.state
   const user = props.user
   const [IsEdit, setIsEdit] = useState(true)
   const [isEditWeapon, setIsEditWeapon] = useState(true)
   const [selectedChar, setSelectedChar] = useState()
   const [profile, setProfile] = useState(user)

   const [boxOne, setBoxOne] = useState(defaultImg)
   const [boxTwo, setBoxTwo] = useState(defaultImg)
   const [boxThree, setBoxThree] = useState(defaultImg)
   const [boxFour, setBoxFour] = useState(defaultImg)

   useEffect(() => {
      getProfile(user.profile)
         .then(myProfile => {
            setProfile(myProfile)
         })
   }, [])

   const handleClick = idx => {
      setIsEdit(false)
   }

   return (
      <>
         <main className={styles.profile_page}>
            <SelectTeam user={user} myCharacters={myCharacters} handleClick={handleClick}/>
            {(IsEdit) ?
               ('') : (isEditWeapon) ?
                  (<EditCharacter user={user} myCharacters={myCharacters}
                     setIsEditWeapon={setIsEditWeapon}
                     setSelectedChar={setSelectedChar} profile={props.profile}
                     handleClick={handleClick}
                  />)
                  :
                  // <h1>weapons here</h1>
                  (<EditWeapon weapons={props.weapons} selectedChar={selectedChar}
                     setIsEditWeapon={setIsEditWeapon} setIsEdit={setIsEdit}
                  />)
            }
         </main>
      </>
   );
}

export default CreateTeamBuild;