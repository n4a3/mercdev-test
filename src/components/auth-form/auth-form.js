import React from 'react'
import { connect } from 'react-redux'

import withMercdevService from '../hoc/withMercdevService'
import { compose } from '../../utils'

import './auth-form.css'

const Error = ({text}) => {
  return (
    <div className="error-indicator">
      <span>{text}</span>
    </div>
  )
}

const AuthForm = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchLogin()
  }

  return (
    <div className={`auth ${props.error ? 'error' : ''}`}
    onSubmit={handleSubmit}>
      <h1>Log In</h1>
      <form
      
      >
        <input type="email"
              placeholder="E-Mail"
        />
        <input type="password"
              placeholder="Password"
        />

        {props.error ? <Error text={props.error}/> : null}

        <button>Login</button>
      </form>
    </div>
  )
}

const mapStateToProps = ({ user: {error} }) => {
  return {error}
}

export default compose(
  withMercdevService(),
  connect(mapStateToProps)
  )(AuthForm)