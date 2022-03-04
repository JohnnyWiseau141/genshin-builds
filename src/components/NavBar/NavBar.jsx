import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const NavBar = ({ user, handleLogout }) => {
	const [isActive, setIsActive] = useState(false)

	const handleActive = evt => {
		setIsActive(!isActive)
	}

	return (
		<>
			<nav className="navbar is-light">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item">
						{/* Temporary Image */}
						<img src="https://64.media.tumblr.com/350e608e12f1bc97576f6dbdfd37cde0/45eaca76b40e52c7-d7/s500x750/48fa6df8385077a0a982cb2c746cf9ff4effd610.png"
							alt="placeholder"
							width="28"
							height="34" />
						Genshin Builds
					</Link>
					<a role="button" onClick={() => handleActive()} class="navbar-burger" aria-label="menu">
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
						<div class="navbar-item has-dropdown is-hoverable">
							<a class="navbar-link">
								Docs
							</a>
							<div class="navbar-dropdown">
								<a class="navbar-item">
									About us
								</a>
								<a class="navbar-item">
									Elements
								</a>
								<hr class="navbar-divider" />
								<div class="navbar-item">
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
										<Link className="button is-light" to="/login">Login</Link>
										<Link className="button is-info" to="/signup">Sign Up</Link>
									</div>
								</div>
							</>
						}
						{user &&
							<>
								<div className="navbar-item">
									<div className="buttons">
										<Link to='' className="button is-light" onClick={handleLogout}>Log Out</Link>
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
