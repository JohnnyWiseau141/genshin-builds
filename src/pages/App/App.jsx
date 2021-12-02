import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import CharacterIndex from '../CharacterIndex/CharacterIndex'
import * as authService from '../../services/authService'
import * as characterService from '../../services/characterService'

const App = () => {
	const [user, setUser] = useState(authService.getUser())
	const navigate = useNavigate()
	const [characters, setCharacters] = useState([])

	useEffect(()=>{
		characterService.getAllCharacters()
		.then(characters => setCharacters(characters))
	},[])

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
				<Route path='/characterindex' element={<CharacterIndex user={user} />} />
			</Routes>
		</>
	);
}
 
export default App;