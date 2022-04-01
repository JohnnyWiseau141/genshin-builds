import React, { useState } from 'react'
import styles from './PublicBuilds.module.css'


const PublicBuilds = (props) => {
   const [PublicTeamBuilds, setPublicTeamBuilds] = useState('temp')
   // get all users data and their teambuilds

   if (PublicTeamBuilds) {
      return (
         <>
            <div>
               <h1>Team Builds Shown Here</h1>
            </div>
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