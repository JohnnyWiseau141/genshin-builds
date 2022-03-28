import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const NavBar = ({ user, handleLogout }) => {
	const [isActive, setIsActive] = useState(false)

	const handleActive = evt => {
		setIsActive(!isActive)
	}

	return (
		<>
			<nav className="navbar is-dark is-fixed-top">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item">
						{/* Temporary Image */}
						<img src="https://64.media.tumblr.com/350e608e12f1bc97576f6dbdfd37cde0/45eaca76b40e52c7-d7/s500x750/48fa6df8385077a0a982cb2c746cf9ff4effd610.png"
							alt="Logo"
							width="28"
							height="34" />
						Genshin Builds
					</Link>
					<a role="button" onClick={() => handleActive()} className="navbar-burger" aria-label="menu">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				<div className={`navbar-menu${isActive ? " is-active" : ""}`} id="genshin-navbar">
					<div className="navbar-start">
						<Link className="navbar-item" to="/">Home</Link>
						<Link className="navbar-item" to="/profile">My Profile</Link>
						<Link className="navbar-item" to="/characters">Characters</Link>
						<Link className="navbar-item" to="/weapons">Weapons</Link>
						<Link className="navbar-item" to="/community" >Community</Link>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">
								Docs
							</a>
							<div className="navbar-dropdown">
								<a className="navbar-item">
									About us
								</a>
								<a className="navbar-item">
									Elements
								</a>
								<hr className="navbar-divider" />
								<div className="navbar-item">
									Version 3.6.1
								</div>
							</div>
						</div>
					</div>

					<div className="navbar-end">
						{!user &&
							<>
								<div className="navbar-item">
									<div className="buttons">
										<Link className="button is-dark" to="/login">Login</Link>
										<Link className="button is-info" to="/signup">Sign Up</Link>
									</div>
								</div>
							</>
						}
						{user &&
							<>
								<div className="navbar-item">
									<div className="buttons">
										<Link to='' className="button is-dark" onClick={handleLogout}>Log Out</Link>
									</div>
								</div>
							</>
						}
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavBar
