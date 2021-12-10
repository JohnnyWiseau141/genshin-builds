import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    pw: ''
  })
  const navigate = useNavigate()

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    authService.login(formData)
      .then(() => {
        props.handleSignupOrLogin()
        navigate('/')
      })
      .catch(err => {
        alert('Invalid Credentials')
      })
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={`field px-6 py-4 ${styles.inputContainer}`}>
        <label htmlFor="email" className={`label has-text-white ${styles.label}`}>Email</label>
        <div className="control mx-6">
          <input
            className="input"
            type="text"
            autoComplete="off"
            id="email"
            value={formData.email}
            name="email"
            placeholder="e.g. alex@gmail.com"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={`field px-6 py-4 ${styles.inputContainer}`}>
        <label htmlFor="password " className={`label has-text-white ${styles.label}`}>Password</label>
        <div className="control mx-6">
          <input
            className="input"
            type="password"
            autoComplete="off"
            id="password"
            value={formData.pw}
            name="pw"
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <button className={`button is-submit mx-1 ${styles.button}`}>Log In</button>
        <Link to="/">
          <button className="button is-danger mx-1">Cancel</button>
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;