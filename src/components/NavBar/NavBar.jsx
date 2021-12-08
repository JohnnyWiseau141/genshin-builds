import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item">
						{/* Temporary Image */}
						<img src="https://ih1.redbubble.net/image.1816083712.5142/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
							alt="placeholder"
							width="30"
							height="30" />
						Genshin Builds
					</Link>

					<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="genshin-navbar">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div className="navbar-menu" id="genshin-navbar">
					<div className="navbar-start">
						<Link className="navbar-item" to="/">Home</Link>
						<Link className="navbar-item" to="/profile">My Profile</Link>
						<Link className="navbar-item" to="/characters">Characters</Link>
						<Link className="navbar-item" to="/weapons">Weapons</Link>
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
