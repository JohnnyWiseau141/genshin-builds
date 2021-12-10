import React, { Profiler, useEffect, useState } from 'react'
import CreateTeamBuild from '../../pages/CreateTeamBuild/CreateTeamBuild'
import { Link } from 'react-router-dom'
import styles from '../TeamBuilds/TeamBuilds.module.css'

const TeamBuild = (props) => {
   

   return (
      <>
         <h1>My Team Builds</h1>

         <div>
            {props.myTeamBuilds ?
               //Display all builds here!!! save this for last???
               props.myTeamBuilds.map(builds =>
                  <>
                  <div className={styles.teamContainer}>
                     <img src={`https://api.genshin.dev/characters/${builds.character1[0]}/icon`} alt="character1" /> 
                     <img src={`https://api.genshin.dev/characters/${builds.character2[0]}/icon`} alt="character2" /> 
                     <img src={`https://api.genshin.dev/characters/${builds.character3[0]}/icon`} alt="character3" /> 
                     <img src={`https://api.genshin.dev/characters/${builds.character4[0]}/icon`} alt="character4" /> 
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