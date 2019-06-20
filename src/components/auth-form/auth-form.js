import React from 'react'
import './auth-form.css'


const AuthForm = () => {
  return (
    <div className="auth"
    onSubmit={(e) => e.preventDefault()}>
      <h1>Log In</h1>
      <form
      
      >
        <input type="email"
              placeholder="E-Mail"
        />
        <input type="password"
              placeholder="Password"
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default AuthForm