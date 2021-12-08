import React from 'react';
import { useLocation } from "react-router-dom";
import styles from './CreateTeamBuild.module.css'

const CreateTeamBuild = (props) => {
   const location = useLocation()
   const allCharacters = location.state
   const allWeapons = props.weapons

   const handleClick = () => {
      console.log('working')
   }

   return (
      <>
         <div>
            {/* Show empty character slots so you can add characters woo */}

            {/* show list of characters to add to team */}
            <div className={styles.character_list} style={{ display: '' }}>
               {allCharacters.map(character =>
                  <>
                     <button>
                        <img src={`https://api.genshin.dev/characters/${character.characterName.toLowerCase()}/icon`} alt="" onClick={() => handleClick} />
                     </button>
                  </>
               )}
            </div>
         </div>
         <div style={{ display: '' }}>
            {allWeapons.map(weapon =>
               <>
                  <button>
                     <img
                        src={`https://api.genshin.dev/weapons/${weapon}/icon`}
                        height="106px"
                        width="106px"
                     />
                  </button>
               </>
            )}
         </div>
         <h1>working</h1>
      </>
   );
}

export default CreateTeamBuild;