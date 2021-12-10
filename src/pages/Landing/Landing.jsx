import styles from './Landing.module.css'
import { Link } from 'react-router-dom'


const Landing = ({ user }) => {
  return (
    <>
      <main className={styles.landing_container}>
        <div className={styles.bg_image}></div>
        <div className={`p-5 ${styles.text}`}>
          <h1 className="is-size-1 mt-3">
            Welcome{user ? `, ${user.name}` : ""}
          </h1>
          {user &&
            <>
              <h3 className="is-size-3">Click Explore Characters to Get Started!!</h3>
              <div>
                <Link className="button is-primary m-3" to="/characters">Explore Characters</Link>
              </div>
            </>}
          <p className={`mx-5 my-3 ${styles.about_us_p}`}>About Us: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate placeat laboriosam<br /> blanditiis repudiandae? Nesciunt, obcaecati quasi fugiat animi eligendi harum, nisi quisquam <br />eveniet soluta sed facilis distinctio et tempora vitae.</p>
          {!user &&
            <>
              <div>
                <Link className="button is-light m-3" to="/login">Login</Link>
                <Link className="button is-info m-3" to="/signup">Sign Up</Link>
              </div>
            </>
          }
        </div>
      </main>
    </>
  )
}

export default Landing