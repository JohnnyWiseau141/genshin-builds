import styles from './Landing.module.css'
import { Link } from 'react-router-dom'


const Landing = ({ user }) => {
  return (
    <>
      <main className={styles.landing_container}>
        <div className={styles.bg_image}></div>
        <div className={`${styles.text}`}>
          <h1>
            Welcome{user ? `, ${user.name}` : ""}
          </h1>
          {user &&
            <>
              <h3>Click Explore Characters to Get Started!!</h3>
              <div>
                <Link className="btn btn-primary" to="/characters">Explore Characters</Link>
              </div>
            </>}
          <p className={styles.about_us_p}>About Us: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate placeat laboriosam<br /> blanditiis repudiandae? Nesciunt, obcaecati quasi fugiat animi eligendi harum, nisi quisquam <br />eveniet soluta sed facilis distinctio et tempora vitae.</p>
          {!user &&
            <>
              <Link className="btn" to="/login">Login</Link>
              <Link className="btn" to="/signup">Sign Up</Link>
            </>
          }
        </div>
      </main>
    </>
  )
}

export default Landing