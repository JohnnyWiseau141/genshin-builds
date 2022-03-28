import styles from './Landing.module.css'
import { Link } from 'react-router-dom'


const Landing = ({ user }) => {
  return (
    <>
      <main className={styles.landing_container}>
        <div className={styles.bg_image}></div>
        <div className={`p-6 ${styles.text}`}>
          <h1 className="is-size-1 mb-3">
            Welcome{user ? `, ${user.name}` : ""}
          </h1>
          {user &&
            <>
              <h3 className="is-size-3">Click Explore Characters to Get Started!!</h3>
              <div>
                <Link className="button is-primary m-3" to="/characters">Explore Characters</Link>
              </div>
            </>}
          <div>
            <p className="mt-2 mb-4">About Us: Hello there! And welcome to our application-- Genshin Builds! <br /> We are a group of software engineers testing our skills and using it to deploy an application featuring a video game we all enjoy playing! We hope you find the application useful and informative for any and all Genshin Impact players out there.</p>
          </div>
          {!user &&
            <>
              <div>
                <Link className="button is-light m-3" to="/login">Login</Link>
                <Link className="button is-info m-3" to="/signup">Sign Up</Link>
              </div>
            </>
          }
          <p className="buttons mt-3 is-align-self-center">
            <a href="https://github.com/JohnnyWiseau141/genshin-builds">
              <button className="button is-light">
                <span>GitHub</span>
              </button>
            </a>
          </p>
        </div>
      </main>
    </>
  )
}

export default Landing