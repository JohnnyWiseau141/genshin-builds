import React, { Profiler, useEffect, useState } from 'react'
import CreateTeamBuild from '../../pages/CreateTeamBuild/CreateTeamBuild'
import { Link } from 'react-router-dom'
import styles from '../TeamBuilds/TeamBuilds.module.css'

const TeamBuild = (props) => {
   

   return (
      <>
         <div>
            <h1 className={`is-size-2 p-4 ${styles.text}`}>My Team Builds</h1>
         </div>

         <div>
            {props.myTeamBuilds ?
               //Display all builds here!!! save this for last???
               props.myTeamBuilds.map(builds =>
                  <>
                  <div className={styles.teamContainer}>
                     <img className={styles.characterIcon} src={`https://api.genshin.dev/characters/${builds.character1[0]}/icon`} alt="character1" /> 
                     <img className={styles.characterIcon} src={`https://api.genshin.dev/characters/${builds.character2[0]}/icon`} alt="character2" /> 
                     <img className={styles.characterIcon} src={`https://api.genshin.dev/characters/${builds.character3[0]}/icon`} alt="character3" /> 
                     <img className={styles.characterIcon} src={`https://api.genshin.dev/characters/${builds.character4[0]}/icon`} alt="character4" /> 
                     <button className='button is-danger' onClick={() => props.handleRemove(builds)}>Delete</button>
                  </div>
                  </>
                  )
               :
               //button here to displays form to create build
               <CreateTeamBuild props={props} />
            }
         </div>
      </>
   );
}

export default TeamBuild;