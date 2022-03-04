import React, { useState, useEffect } from 'react';
import styles from './CreateTeamBuild.module.css'
import { useLocation } from "react-router-dom";
// import Characters from '../../components/Characters/Characters';
import EditCharacter from '../../components/EditCharacter/EditCharacter'
import EditWeapon from '../../components/EditWeapon/EditWeapon'
import SelectTeam from '../../components/SelectTeam/SelectTeam'
import { getProfile } from '../../services/profileService';
import { Link } from 'react-router-dom';

const CreateTeamBuild = (props) => {
   const defaultImg = 'images/plus_sign.png'
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

   const [selectedIdx, setSelectedIdx] = useState()
   const [images, setImages] = useState([boxOne, boxTwo, boxThree, boxFour])

   useEffect(() => {
      getProfile(user.profile)
         .then(myProfile => {
            setProfile(myProfile)
         })
   }, [])

   const changeBoxImg = name => {
      if (selectedIdx === 0) {
         setBoxOne(`https://api.genshin.dev/characters/${name}/icon`)
         setImages([`https://api.genshin.dev/characters/${name}/icon`, boxTwo, boxThree, boxFour])
      }
      if (selectedIdx === 1) {
         setBoxTwo(`https://api.genshin.dev/characters/${name}/icon`)
         setImages([boxOne, `https://api.genshin.dev/characters/${name}/icon`, boxThree, boxFour])
      }
      if (selectedIdx === 2) {
         setBoxThree(`https://api.genshin.dev/characters/${name}/icon`)
         setImages([boxOne, boxTwo, `https://api.genshin.dev/characters/${name}/icon`, boxFour])
      }
      if (selectedIdx === 3) {
         setBoxFour(`https://api.genshin.dev/characters/${name}/icon`)
         setImages([boxOne, boxTwo, boxThree, `https://api.genshin.dev/characters/${name}/icon`])
      }
   }

   const handleClick = idx => {
      setSelectedIdx(idx)
      setIsEdit(false)
   }

   return (
      <>
         <main className={`has-text-centered ${styles.profile_page}`}>
            <SelectTeam user={user} myCharacters={myCharacters} handleClick={handleClick} setIsEdit={setIsEdit}
               boxOne={boxOne} boxTwo={boxTwo} boxThree={boxThree} boxFour={boxFour}
               selectedIdx={selectedIdx} images={images}
            />
            {(IsEdit) ?
               ('') : (isEditWeapon) ?
                  (<EditCharacter user={user} myCharacters={myCharacters}
                     setIsEditWeapon={setIsEditWeapon} setSelectedChar={setSelectedChar} profile={profile} handleClick={handleClick}
                     boxOne={boxOne} boxTwo={boxTwo} boxThree={boxThree} boxFour={boxFour}
                     changeBoxImg={changeBoxImg} selectedIdx={selectedIdx}
                  />)
                  :
                  // <h1>weapons here</h1>
                  (<EditWeapon user={user} weapons={props.weapons} setIsEditWeapon={setIsEditWeapon} setIsEdit={setIsEdit}
                  />)
            }
            {(boxOne !== defaultImg && boxTwo !== defaultImg && boxThree !== defaultImg && boxFour !== defaultImg) ? 
            (<Link to='/profile'>
                  <button className="button is-light">
                     {/* show once all characters and weapons have been added!!! */}
                     Done
                  </button>
            </Link>) : ('')
            }
         </main>
      </>
   );
}

export default CreateTeamBuild;