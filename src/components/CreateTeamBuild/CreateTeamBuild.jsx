import React from 'react';
import styles from './CreateTeamBuild.module.css'

const CreateTeamBuild = (props) => {
   const allCharacters = props.props.myCharacters
   const allWeapons = props.props.weapons

   const handleClick = () => {
      console.log('working')
   }


   return (
      <>
         <div>
            {/* show list of characters to add to team */}
            <button>Create Team</button>
            <div className={styles.character_list} style={{ display: 'none' }}>
               {allCharacters.map(character =>
                  <>
                     <button>
                        <img src={`https://api.genshin.dev/characters/${character.characterName.toLowerCase()}/icon`} alt="" onClick={() => handleClick} />
                     </button>
                  </>
               )}
            </div>
         </div>
         <div style={{ display: 'none' }}>
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
      </>
   );
}

export default CreateTeamBuild;