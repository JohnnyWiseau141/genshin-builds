import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const LoginPage = (props) => {
  return (
  <div className={styles.wrapper}>
    <main className={styles.container}>
      <h1>Log In</h1>
      <LoginForm handleSignupOrLogin={props.handleSignupOrLogin} />
    </main>
  </div>
  );
}
 
export default LoginPage;