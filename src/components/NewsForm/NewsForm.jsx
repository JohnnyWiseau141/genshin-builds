import styles from './NewsForm.module.css'
import React, { useState } from 'react';


const AddNews = (props) => {
   const [formData, setFormData] = useState({
      coverImage: '',
      version: '',
      shortDescription: '',
      fullDescription: '',
      dateOfUpdate: ''
   })

   return (
      <>
         <main className={styles.background}>
            <div className={styles.form}>
               <form action="submit">
                  {/* Form here will fill out news model completing information needed to display on page. */}
                  <div>
                     <button className='button is-info' disabled>Upload Image</button>
                  </div>

                  <div className="control mx-6">
                     Version Number
                     <input
                        className="input"
                        type="text"
                        autoComplete="off"
                     // onChange={handleChange}
                     />
                  </div>

                  <div>
                     Short Description
                     <textarea className='textarea' cols="10" rows="5" ></textarea>
                  </div>

                  <div>
                     Full Description
                     <textarea className='textarea' cols="30" rows="10"></textarea>
                  </div>

                  <div className="control mx-6">
                     Date of Update
                     <input
                        className="input"
                        type="text"
                        autoComplete="off"
                     // onChange={handleChange}
                     />
                  </div>

                  <button className='button is-primary'>Submit</button>
                  {/* Submit button will redirect to Community Page then displaying new news */}

               </form>
            </div>
         </main>
      </>
   );
}

export default AddNews;