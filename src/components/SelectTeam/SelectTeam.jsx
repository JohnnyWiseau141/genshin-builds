import React from 'react'
import styles from './SelectTeam.module.css'

const SelectTeam = (props) => {

   // const addCharacter = (evt) => {
   //    props.setIsEdit(false)
   // }

   return (
      <>
         <div className={styles.buildContainer}>
            <div className={styles.addCharacters}>
               {props.images.map((image, idx) =>
               <button
                  key={`btn${idx}`}
                  // onClick={addCharacter}
                  onClick={() => props.handleClick(idx)}
                  >
                     <img 
                        key={`img${idx}`} 
                        src={image}
                        alt="plus" 
                        className={styles.plusImage} />
               </button>
                  )}
            </div>
         </div>
      </>
   );
}

export default SelectTeam;
