import styles from './Landing.module.css'
import { Link } from 'react-router-dom'


const Landing = ({ user }) => {
  return (
    <>
      <main className="landing-container">
        <div className="test">
          <h1>
            Welcome{user ? `, ${user.name}` : "."}
          </h1>
        </div>
        {user &&
          <div>
            <h3>Click Explore to Get Started!!</h3>
            <Link className="btn" to="/characters">Explore Characters</Link>
          </div>}
        <div>
          <p>About Us: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate placeat laboriosam blanditiis repudiandae? Nesciunt, obcaecati quasi fugiat animi eligendi harum, nisi quisquam eveniet soluta sed facilis distinctio et tempora vitae.</p>
        </div>
        {!user &&
          <div>
            <Link className="btn" to="/login">Login</Link>
            <Link className="btn" to="/signup">Sign Up</Link>
          </div>}
      </main>
    </>
  )
}

export default Landing