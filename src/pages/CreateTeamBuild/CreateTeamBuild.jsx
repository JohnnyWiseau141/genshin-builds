import React, { useState, useEffect } from 'react';
import styles from './CreateTeamBuild.module.css'
import { useLocation } from "react-router-dom";
import Characters from '../../components/Characters/Characters';
import EditCharacter from '../../components/EditCharacter/EditCharacter'
import EditWeapon from '../../components/EditWeapon/EditWeapon'
import SelectTeam from '../../components/SelectTeam/SelectTeam'
import { getProfile } from '../../services/profileService';

const CreateTeamBuild = (props) => {
   const location = useLocation()
   const myCharacters = location.state
   const user = props.user
   const [IsEdit, setIsEdit] = useState(true)
   const [isEditWeapon, setIsEditWeapon] = useState(true)
   const [selectedChar, setSelectedChar] = useState()
   const [image, setImage] = useState('https://png2.cleanpng.com/sh/7647b85e9ceb0f4134eddbf507242a11/L0KzQYm3VMAzN5d2fZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfRme5x5hAI2d3HvfMHokPVzNaFxjeU2YX7nPb7wjwV0NaRuReRuc4TkgsW0VfFkOmJpSdUEZEe6Qoi1Vck3QGg8TaI6NUK1Roi3WMc3PmU6RuJ3Zx==/kisspng-computer-icons-desktop-wallpaper-plus-and-minus-si-restart-5ac21d1c9d7727.596877501522670876645.png')

   return (
      <>
       <main className={styles.profile_page}>
            { (IsEdit) ? ('') : (isEditWeapon) ? (<EditCharacter user={user} myCharacters={myCharacters} setImage={setImage} setIsEditWeapon={setIsEditWeapon} setSelectedChar={setSelectedChar} profile={props.profile}  />) : (<EditWeapon weapons={props.weapons} selectedChar={selectedChar} setIsEditWeapon={setIsEditWeapon} setIsEdit={setIsEdit} />)
            }
          
            <SelectTeam user={user} myCharacters={myCharacters} selectedIdx={props.selectedIdx} handleNums={props.handleNums} nums={props.nums} setIsEdit={setIsEdit} image={image} setImage={setImage}/>
         </main>
  
      </>
   );
}

export default CreateTeamBuild;