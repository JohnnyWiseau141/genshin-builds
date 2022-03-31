import React, { useState } from 'react'
import styles from './SelectTeam.module.css'

const SelectTeam = (props) => {

   const [selectedIdx, setSelectedIdx] = useState()

   const updateIdx = (idx) => {
      props.handleClick(idx)
      setSelectedIdx(idx)
   }

   return (
      <>
         <div className={styles.build_container}>
            <div className={styles.add_characters}>
               {props.images.map((image, idx) =>
               <button
                  key={`btn${idx}`}
                  // onClick={addCharacter}
                  onClick={()=>updateIdx(idx)}
                  >
                     <img 
                        key={`img${idx}`} 
                        src={image}
                        alt="plus" 
                        className={styles.plus_image} />
               </button>
                  )}
            </div>
         </div>
      </>
   );
}

export default SelectTeam;
