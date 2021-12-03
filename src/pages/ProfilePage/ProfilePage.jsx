import React, { useState } from 'react';

const ProfilePage = (props) => {
   const [profile, setProfile] = useState({})
   
   return (
      <>
         <h1>Working</h1>
         <p>{console.log(props)}</p>
      </>
   );
}

export default ProfilePage;