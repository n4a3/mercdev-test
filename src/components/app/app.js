import React from 'react'
import AuthForm from '../auth-form'
import MercdevService from '../../services/mercdev-service'

import '../../fonts/fonts.css'
import './app.css'

import logo from './img/w-mercury-development.svg'

const service = new MercdevService()

const App = () => {
  service.userLogin('user@example.csom', 'mercdev')
  return (
    <main className="user-page">
      <img src={logo} alt="Mercury Development"/>
      <div className="user-box">
        <AuthForm />
      </div>
    </main>
  )
}

export default App