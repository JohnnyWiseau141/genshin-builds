import styles from './Landing.module.css'
import { Link } from 'react-router-dom'


const Landing = ({ user }) => {
  return (
    <>
      <main className={styles.container}>
        <div className="bg-light-blue">
          <div className="box-border">
            <h1>
              Welcome{user ? `, ${user.name} Click Explore to Get Started!!` : "."}
            </h1>
          </div>
          <div>
            <p>About Us:</p>
          </div>
            <Link className="btn" to="/login">Login</Link>
            <Link className="btn" to="/signup">Sign Up</Link>
        </div>
      </main>
    </>
  )
}

export default Landing