import React from 'react'
import AuthForm from '../auth-form'
import UserInfo from '../user-info'

import '../../fonts/fonts.css'
import './app.css'

import logo from './img/w-mercury-development.svg'

const App = () => {
  return (
    <main className="user-page">
      <img src={logo} alt="Mercury Development" className="logo"/>
      <div className="user-box">
        <AuthForm />
        {/* <UserInfo userData={{name: 'test', photoUrl: 'https://api.adorable.io/avatars/285/abott@adorable.png'}}/> */}
      </div>
    </main>
  )
}

export default App