import React, { Profiler, useEffect, useState } from 'react'
import CreateTeamBuild from '../../pages/CreateTeamBuild/CreateTeamBuild'
import { Link } from 'react-router-dom'
import styles from '../TeamBuilds/TeamBuilds.module.css'

const TeamBuild = (props) => {
   const allCharacters = props.myCharacters
   const [teamBuild, setTeamBuild] = useState({})

   return (
      <>
         <h1>Team Component Working</h1>

         <div>
            {props.myTeamBuilds ?
               //Display all builds here!!! save this for last???
               'You have builds!'
               :
               //button here to displays form to create build
               <CreateTeamBuild props={props} />
            }
         </div>
      </>
   );
}

export default TeamBuild;