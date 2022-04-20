import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import ProfilePage from '../ProfilePage/ProfilePage'
import CharacterIndex from '../CharacterIndex/CharacterIndex'
import WeaponIndex from '../WeaponIndex/WeaponIndex'
import CharacterDetails from '../CharacterDetails/CharacterDetails'
import WeaponDetails from '../WeaponDetails/WeaponDetails'
import CreateTeamBuild from '../CreateTeamBuild/CreateTeamBuild'
import Community from '../Community/Community'
import NewsForm from '../../components/NewsForm/NewsForm'
import * as authService from '../../services/authService'
import { getAllCharacters } from '../../services/characterService'
import { getAllWeapons } from '../../services/weaponService'
import { getProfile } from '../../services/profileService'

const App = () => {
	const [user, setUser] = useState(authService.getUser())
	const [myProfile, setMyProfile] = useState(user)
	const [characters, setCharacters] = useState([])
	const [weapons, setWeapons] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		getAllCharacters()
			.then(characters => {
				setCharacters(characters)
			})
	}, [])

	useEffect(() => {
		getAllWeapons()
			.then(weapons => {
				setWeapons(weapons)
			})
	}, [])

	useEffect(() => {
		if (user) {
			getProfile(user.profile)
				.then(myProfile => {
					setMyProfile(myProfile)
				})
		}
	}, [])

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		navigate('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	return (
		<>
			<NavBar user={user} handleLogout={handleLogout} />
			<Routes>
				<Route path='/' element={<Landing user={user} />} />
				<Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/users' element={user ? <Users /> : <Navigate to='/login' />} />
				<Route path='/profile' element={user ? <ProfilePage user={user} weapons={weapons} characters={characters} /> : <Navigate to='/login' />} />
				<Route path='/characters' element={<CharacterIndex user={user} characters={characters} />} />
				<Route path='/weapons' element={<WeaponIndex user={user} weapons={weapons} />} />
				<Route path='/character-details/:character' element={<CharacterDetails user={user} characters={characters} myProfile={myProfile} />} />
				<Route path='/weapon-details/:weapon' element={<WeaponDetails user={user} weapons={weapons} />} />
				<Route path='/create-team-build' element={<CreateTeamBuild user={user} weapons={weapons} characters={characters} />} />
				<Route path='/community' element={<Community user={user} weapons={weapons} characters={characters} />} />
				<Route path='/news-form' element={<NewsForm user={user} />} />
			</Routes>
		</>
	);
}

export default App;
