import React from 'react'
import styles from './SelectTeam.module.css'

const SelectTeam = (props) => {

   const addCharacter = (evt) => {
      props.setIsEdit(false)
   }

   return (
      <>
         <div className={styles.buildContainer}>
            <div className={styles.addCharacters}>
               {props.nums.map(num =>
               <button
                  key={`btn${num}`}
                  onClick={addCharacter}>
                     <img 
                        key={`img${num}`} 
                        src={props.image}
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
