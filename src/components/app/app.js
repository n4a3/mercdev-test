import React from 'react'
import AuthForm from '../auth-form'
import MercdevService from '../../services/mercdev-service'

import '../../fonts/fonts.css'
import './app.css'

const service = new MercdevService()

const App = () => {
  service.userLogin('user@example.csom', 'mercdev')
  return (
    <main className="login-page">
      <div className="user-box">
        <AuthForm />
      </div>
    </main>
  )
}

export default App