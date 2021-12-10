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
            <p className="mt-2 mb-4">About Us: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quo doloremque <br />pariatur qui vero! Minima, esse temporibus. Dicta mollitia quisquam accusamus earum fuga <br />sunt, cumque expedita unde id similique et.</p>
          </div>
          {!user &&
            <>
              <div>
                <Link className="button is-light m-3" to="/login">Login</Link>
                <Link className="button is-info m-3" to="/signup">Sign Up</Link>
              </div>
            </>
          }
          <p class="buttons mt-3 is-align-self-center">
            <a href="https://github.com/JohnnyWiseau141/genshin-builds">
              <button class="button">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
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