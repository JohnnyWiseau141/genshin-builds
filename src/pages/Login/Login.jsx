import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const LoginPage = (props) => {
  return (
  <main className={styles.container}>
    <div className={styles.bground}></div>
      <div className={styles.text}>
        <h1 className="is-size-2">Log In</h1>
        <LoginForm handleSignupOrLogin={props.handleSignupOrLogin} />
      </div>
    
  </main>
  );
}
 
export default LoginPage;