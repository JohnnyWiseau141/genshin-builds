import React, { useState } from 'react'
import styles from './PublicBuilds.module.css'


const PublicBuilds = (props) => {
   const [PublicTeamBuilds, setPublicTeamBuilds] = useState('temp')
   // get all users data and their teambuilds
   
   if (PublicTeamBuilds){
      return (
         <>
            <h1>Team Builds Shown Here</h1>
         </>
      );
   } else {
      return (
         <>
            <h1>loading...</h1>
         </>
      )
   }
}

export default PublicBuilds;